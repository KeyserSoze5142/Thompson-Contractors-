# Thompson Contractors, LLC — Website

A modern, fully responsive, SEO/AEO/GEO-optimized static website for Thompson Contractors, LLC (Tuscaloosa, AL). No build step, no dependencies — plain HTML/CSS/JS, ready for GitHub Pages or any static host.

## Quick deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `thompson-contractors-website`).
2. Upload **all files in this folder** to the repository root (keep the folder structure).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / root → Save**.
4. Your preview will be live in ~1 minute at:
   `https://<your-username>.github.io/<repo-name>/`

When the site moves to the real domain, no changes are needed — canonical URLs and the sitemap already point to `https://www.thompsoncontractors.net`.

## Site structure

```
index.html            Home (hero, services, portfolio, reviews, service areas, FAQ)
about.html            About Us + mission + values
services.html         All six services with detail sections (#design, #custom-homes, ...)
projects.html         Portfolio gallery
projects/*.html       11 individual project pages with lightbox galleries
meet-the-owner.html   Colby Thompson bio page
contact.html          Contact info + quote request form + FAQ
404.html              Custom not-found page
css/style.css         Single stylesheet (design system + responsive rules)
js/main.js            Nav, scroll reveals, lightbox, no frameworks
sitemap.xml           XML sitemap (all 17 pages)
robots.txt            Allows all crawlers, points to sitemap
.nojekyll             Tells GitHub Pages to serve files as-is
```

## SEO / AEO / GEO features built in

- **SEO** — unique title + meta description per page, canonical URLs, semantic HTML5, single H1 per page, descriptive alt text, XML sitemap, robots.txt, clean URLs, fast/lightweight pages (no frameworks), lazy-loaded images, Open Graph + Twitter cards.
- **AEO (Answer Engine Optimization)** — FAQPage structured data with 6 common customer questions, direct-answer content formatting, and question-style headings that match how people ask AI assistants and voice search.
- **GEO (local + generative engine optimization)** — `HomeAndConstructionBusiness` schema with geo-coordinates, `areaServed` for all 13 cities, geo meta tags, consistent NAP (name/address/phone) on every page, service-area content sections, plus BreadcrumbList, Person (owner), Service, and ContactPage schema so AI search engines (ChatGPT, Perplexity, Google AI Overviews) can cite the business accurately.

## Two things to do before final launch

1. **Contact form** — the form posts to a Formspree placeholder. Create a free form at [formspree.io](https://formspree.io), then in `contact.html` replace `YOUR_FORM_ID` in the form's `action` attribute. (Until then, visitors can still call or email via the prominent links.)
2. **Images** — photos are currently loaded from the existing site's Squarespace CDN so the preview works instantly with the company's real project photography. Before cancelling Squarespace, download the photos into an `images/` folder and update the `src` URLs (or ask me to do it).

## Editing

Everything is plain HTML — edit any page directly. Shared elements (header/footer) appear in each file; a find-and-replace across files keeps them in sync.
