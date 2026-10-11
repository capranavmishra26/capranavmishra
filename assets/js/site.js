/* Shared by every page: ICAI disclaimer, mobile menu, footer year, blog cards. */
(function () {
  var ROOT = document.body.getAttribute("data-root") || "";

  // ICAI disclaimer: shown until the visitor agrees (remembered in this browser).
  // Injected here so it also appears when someone opens a blog post directly from LinkedIn.
  var KEY = "cpm-disclaimer-agreed";
  var agreed = false;
  try { agreed = localStorage.getItem(KEY) === "1"; } catch (e) {}
  if (!agreed) {
    var modal = document.createElement("div");
    modal.className = "disclaimer";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "disclaimer-title");
    modal.innerHTML =
      '<div class="disclaimer__box">' +
      '<h2 id="disclaimer-title">Disclaimer</h2>' +
      "<p>As per the guidelines of the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are not permitted to solicit work or advertise. By clicking <strong>“I Agree”</strong>, you acknowledge that:</p>" +
      "<ul>" +
      "<li>You are accessing this website of your own accord, seeking information about CA Pranav Mishra, and there has been no advertisement, solicitation or inducement of any kind.</li>" +
      "<li>The information on this website is for general informational purposes only and does not constitute professional advice or create a professional relationship.</li>" +
      "<li>Tools and applications offered here are for convenience only; results should be verified before being relied upon.</li>" +
      "</ul>" +
      '<div class="disclaimer__actions">' +
      '<button class="btn btn--primary" type="button">I Agree</button>' +
      '<a class="btn btn--ghost" href="https://www.icai.org" rel="noopener">Leave Site</a>' +
      "</div></div>";
    document.body.appendChild(modal);
    document.body.classList.add("locked");
    modal.querySelector("button").addEventListener("click", function () {
      try { localStorage.setItem(KEY, "1"); } catch (e) {}
      modal.remove();
      document.body.classList.remove("locked");
    });
  }

  // Mobile navigation
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
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
  }

  // Share buttons on blog posts: share the page's canonical address
  var share = document.querySelector("[data-share]");
  if (share) {
    var canonical = document.querySelector('link[rel="canonical"]');
    var pageUrl = canonical ? canonical.href : location.href;
    share.querySelector("[data-share-linkedin]").href =
      "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(pageUrl);
    share.querySelector("[data-share-whatsapp]").href =
      "https://wa.me/?text=" + encodeURIComponent(document.title + " " + pageUrl);
    var copy = share.querySelector("[data-share-copy]");
    copy.addEventListener("click", function () {
      var done = function () { copy.textContent = "Link copied"; setTimeout(function () { copy.textContent = "Copy link"; }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(pageUrl).then(done, function () { prompt("Copy this link:", pageUrl); });
      else prompt("Copy this link:", pageUrl);
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Blog helpers used by the home page and the blog index
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  window.CPM = {
    esc: esc,
    sortedPosts: function () {
      return (window.POSTS || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
    },
    formatDate: function (iso) {
      var d = new Date(iso + "T00:00:00");
      return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    },
    postCards: function (posts) {
      if (!posts.length) return '<p class="section__intro">No posts yet. Check back soon.</p>';
      return posts.map(function (p) {
        return '<a class="card post-card" href="' + esc(ROOT + p.url) + '">' +
          '<div class="post-card__meta"><span class="badge badge--cat">' + esc(p.category) + "</span>" +
          "<time>" + CPM.formatDate(p.date) + "</time></div>" +
          "<h3>" + esc(p.title) + "</h3><p>" + esc(p.summary) + "</p>" +
          '<span class="post-card__more">Read more &rarr;</span></a>';
      }).join("");
    }
  };
})();
