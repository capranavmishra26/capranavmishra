# capranavmishra.com

Website for CA Pranav Mishra, hosted free on GitHub Pages at your own domain.

## What's in here

| Path | Purpose |
|---|---|
| `index.html` | Main website (About, Services, Applications, Resources, Contact) |
| `assets/js/apps.js` | **The list of applications.** Edit this to add or remove apps |
| `blog/` | Blog posts (one `.html` file per post) and the blog listing page |
| `blog/_template.html` | Copy this to start a new post |
| `assets/js/posts.js` | **The list of blog posts.** Add each new post here |
| `assets/img/share.png` | Image shown when a link is shared on LinkedIn or WhatsApp |
| `apps/` | Applications hosted on the site itself (GST and EMI calculators included) |
| `assets/css/style.css` | Colours, fonts and layout |
| `CNAME` | Tells GitHub Pages to serve the site at `capranavmishra.com` |
| `404.html` | Page shown for broken links |
| `.nojekyll` | Tells GitHub to serve the files as they are |

## 1. Fill in your details

Open `index.html` and replace the placeholders:

- `[ICAI M. No.]`, `B.Com, FCA / ACA`, `[City, State]` in the About section
- `+91 00000 00000` and `[Office address...]` (the email is already set to capranavmishra26@gmail.com, and the contact form sends to it)
- Photo: save it as `assets/img/pranav.jpg`, then in the About section replace the `<span>PM</span>` with
  `<img src="assets/img/pranav.jpg" alt="CA Pranav Mishra">`

## 2. Put the site on GitHub (no software needed)

1. Create a free account at https://github.com, or sign in.
2. Click **+** → **New repository**. Name it `capranavmishra.com` (any name works), set it to **Public**, then click **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
4. Drag **everything inside** the `Website` folder (`index.html`, `404.html`, `CNAME`, `.nojekyll`, `assets`, `apps`) into the browser, then click **Commit changes**.
   *Windows hides `.nojekyll` by default. In File Explorer, turn on View → Show → Hidden items before dragging.*
5. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main** and the folder to **/ (root)**, then click **Save**.
6. On the same page, under **Custom domain**, enter `capranavmishra.com` and click **Save**.

## 3. Point your domain to GitHub

Sign in where you bought the domain (GoDaddy, Hostinger, Namecheap, BigRock and so on), open **DNS settings** for `capranavmishra.com`, and add these records. First delete any existing `A` records for `@` and any parking or forwarding records.

| Type | Name / Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<your-github-username>.github.io` |

Optional (IPv6): add `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

DNS changes can take anywhere from a few minutes to 24 hours. When **Settings → Pages** shows the domain as verified, tick **Enforce HTTPS**.

Recommended: under GitHub **Settings (your profile) → Pages → Add a domain**, verify `capranavmishra.com`, so no one else can claim it on GitHub.

## 4. Adding applications for users

Every app appears as a card with a **Launch** button. To add one, add an entry to `assets/js/apps.js`:

```js
{
  name: "Income Tax Calculator",
  description: "Compare old vs new regime tax liability.",
  category: "Calculators",
  url: "apps/income-tax/",   // or an external link
  status: "live",            // "live" | "login" | "soon"
  newTab: false
}
```

There are two ways to host the app:

**A. On this website (static apps: HTML/JS calculators, forms, dashboards)**
Create a folder such as `apps/income-tax/` with an `index.html`. Copy one of the included calculators as a starting point. It will be live at `https://capranavmishra.com/apps/income-tax/`.

**B. On another service (apps that need a server, database or login: Python, Node, Streamlit and so on)**
GitHub Pages only serves static files, so host these apps on a platform such as Render, Railway, Vercel, Streamlit Community Cloud or Azure. Put the app's link in `url` with `newTab: true`.
To give it your own address, such as `app.capranavmishra.com`, add a `CNAME` record in your DNS (Name: `app`, Value: the host name that platform gives you), then add the custom domain in that platform's settings.

## 5. Writing a blog post

1. **Create the post.** In the GitHub repository, open `blog/_template.html`, click the **copy raw file** icon, then go to **Add file → Create new file**. Name it `blog/your-topic-name.html` (lowercase, words joined by hyphens) and paste.
2. **Fill it in.** Replace every line marked `CHANGE`: title, summary, the file name in the two link lines, category and date. Write your content between `POST CONTENT STARTS` and `POST CONTENT ENDS`, using:
   - `<p>...</p>` for a paragraph
   - `<h2>...</h2>` for a heading
   - `<ul><li>...</li></ul>` for bullet points
   - `<strong>...</strong>` for bold text
   - the sample table and quote box from the template

   Then click **Commit changes**.
3. **List the post.** Open `assets/js/posts.js`, click the pencil icon, and copy the existing entry block (from `{` to `},`) to add yours:
   ```js
   {
     title: "Your post title",
     date: "2026-10-15",
     category: "Income Tax",      // "Income Tax" | "Direct Tax" | "Companies Act"
     summary: "One or two lines about the post.",
     url: "blog/your-topic-name.html"
   },
   ```
   Click **Commit changes**. The post now appears on the home page under *Latest updates* and on `capranavmishra.com/blog/`.
4. **Share on LinkedIn.** Open the post on the live site and click the **LinkedIn** button at the bottom, or paste the link into a LinkedIn post: `https://capranavmishra.com/blog/your-topic-name.html`. LinkedIn shows the title, summary and preview image automatically.

You can also share a category link, for example `https://capranavmishra.com/blog/#Companies%20Act`.

If LinkedIn shows an old preview after you edit a post, paste the link into https://www.linkedin.com/post-inspector/ to refresh it.

## Updating the site later

In the GitHub repository, open any file, click the pencil icon, edit it and click **Commit changes**. You can also drag in replacement files with **Add file → Upload files**. The live site updates within about a minute.

## Note on professional guidelines

The site includes an entry disclaimer and avoids solicitation, testimonials, client names and fee information, in line with the ICAI guidelines for members' websites. Check the latest ICAI guidelines before adding new content.
