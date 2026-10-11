(function () {
  // ICAI disclaimer: show until the visitor agrees (remembered in this browser)
  var KEY = "cpm-disclaimer-agreed";
  var modal = document.getElementById("disclaimer");
  var agreed = false;
  try { agreed = localStorage.getItem(KEY) === "1"; } catch (e) {}
  if (!agreed && modal) {
    modal.hidden = false;
    document.body.classList.add("locked");
    document.getElementById("disclaimer-agree").addEventListener("click", function () {
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      modal.hidden = true;
      document.body.classList.remove("locked");
    });
  }

  // Mobile navigation
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Applications
  var apps = window.APPS || [];
  var grid = document.getElementById("app-grid");
  var filter = document.getElementById("app-filter");
  var BADGES = {
    live: ["badge--live", "Live"],
    login: ["badge--login", "Sign-in"],
    soon: ["badge--soon", "Coming soon"]
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function render(category) {
    var list = apps.filter(function (a) { return category === "All" || a.category === category; });
    grid.innerHTML = list.map(function (a) {
      var badge = BADGES[a.status] || BADGES.live;
      var disabled = a.status === "soon";
      var target = a.newTab ? ' target="_blank" rel="noopener"' : "";
      var button = disabled
        ? '<span class="btn" aria-disabled="true">Coming Soon</span>'
        : '<a class="btn btn--primary" href="' + esc(a.url) + '"' + target + ">Launch &rarr;</a>";
      return '<article class="card app-card">' +
        '<div class="card__top"><div><div class="tag">' + esc(a.category) + "</div><h3>" + esc(a.name) + "</h3></div>" +
        '<span class="badge ' + badge[0] + '">' + badge[1] + "</span></div>" +
        "<p>" + esc(a.description) + "</p>" + button + "</article>";
    }).join("");
  }

  var categories = ["All"].concat(apps.map(function (a) { return a.category; })
    .filter(function (c, i, arr) { return arr.indexOf(c) === i; }));
  if (categories.length > 2) {
    filter.innerHTML = categories.map(function (c, i) {
      return '<button role="tab" aria-selected="' + (i === 0) + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");
    filter.addEventListener("click", function (e) {
      var cat = e.target.getAttribute("data-cat");
      if (!cat) return;
      filter.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-selected", b === e.target); });
      render(cat);
    });
  }
  render("All");

  // Contact form -> opens the visitor's email app
  var form = document.getElementById("contact-form");
  var to = document.querySelector("[data-email]").textContent.trim();
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var body = "Name: " + d.get("name") + "\nEmail: " + d.get("email") + "\nPhone: " + d.get("phone") + "\n\n" + d.get("message");
    window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent("Website enquiry from " + d.get("name")) +
      "&body=" + encodeURIComponent(body);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
