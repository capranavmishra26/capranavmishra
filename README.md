# capranavmishra.com

Website for CA Pranav Mishra, hosted free on GitHub Pages at your own domain.

## What's in here

| Path | Purpose |
|---|---|
| `index.html` | Main website (About, Services, Applications, Resources, Contact) |
| `assets/js/apps.js` | **The list of applications.** Edit this to add or remove apps |
| `_posts/` | **Your blog posts.** One `.md` text file per post |
| `_drafts/post-template.md` | Copy this to start a new post |
| `_layouts/post.html` | Design of a blog post page |
| `_config.yml` | Blog engine settings (no need to edit) |
| `blog/index.html` | Blog listing page with category filters |
| `assets/js/posts.js` | Builds the post list automatically (do not edit) |
| `assets/img/share.png` | Image shown when a link is shared on LinkedIn or WhatsApp |
| `apps/` | Applications hosted on the site itself (GST and EMI calculators included) |
| `assets/css/style.css` | Colours, fonts and layout |
| `CNAME` | Tells GitHub Pages to serve the site at `capranavmishra.com` |
| `404.html` | Page shown for broken links |

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
4. Drag **everything inside** the `Website` folder (all files and folders, including `_config.yml`, `_layouts` and `_posts`) into the browser, then click **Commit changes**.
   *Do not add a `.nojekyll` file. It switches off the blog engine.*
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

Posts are plain text files in the `_posts` folder. GitHub turns each one into a web page and adds it to the blog list and the home page automatically.

1. In your GitHub repository, open the `_posts` folder and click **Add file → Create new file**.
2. Name the file `YYYY-MM-DD-short-title.md`, using the publication date, lowercase words and hyphens. For example:
   `2026-10-15-tds-rate-changes.md`
   The part after the date becomes the link: `capranavmishra.com/blog/tds-rate-changes/`
3. Paste this at the top and fill in the three lines. Keep the `---` lines and the quote marks.
   ```
   ---
   title: "TDS rate changes from 1 October"
   category: Income Tax
   summary: "One or two lines shown on the blog list and in the LinkedIn preview."
   ---
   ```
   `category` must be one of: `Income Tax`, `Direct Tax`, `Companies Act`.
4. Below the second `---`, leave an empty line and **paste your article**. Leave an empty line between paragraphs. Optional formatting:

   | Type this | You get |
   |---|---|
   | `## Heading` | A heading |
   | `- point` | A bullet point |
   | `1. point` | A numbered point |
   | `**text**` | **Bold** |
   | `> note` | A highlighted note box |
   | `[ICAI](https://www.icai.org)` | A link |

   For tables, see the example in `_drafts/post-template.md`. The **Preview** tab in the GitHub editor shows how the post will look.
5. Click **Commit changes**. The post goes live in 1 to 2 minutes. Check progress on the repository's **Actions** tab.

**Sharing on LinkedIn:** open the post on the website and click the **LinkedIn** button at the bottom, or paste the link into a LinkedIn post. LinkedIn shows the title, summary and preview image automatically. If LinkedIn shows an old preview after you edit a post, paste the link into https://www.linkedin.com/post-inspector/ to refresh it.

You can also share a category link, for example `https://capranavmishra.com/blog/#Companies%20Act`.

**Editing or deleting a post:** open the file in `_posts`, then click the pencil icon to edit or the **⋯** menu to delete.

**Notes**
- A post dated in the future is published only when that date arrives and the site is next updated.
- Blog posts appear only on the live site, not when you open `index.html` from your computer.
## Updating the site later

In the GitHub repository, open any file, click the pencil icon, edit it and click **Commit changes**. You can also drag in replacement files with **Add file → Upload files**. The live site updates within about a minute.

## Note on professional guidelines

The site includes an entry disclaimer and avoids solicitation, testimonials, client names and fee information, in line with the ICAI guidelines for members' websites. Check the latest ICAI guidelines before adding new content.
