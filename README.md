# Himanshu Patil — CV (Astro)

Static CV site built with [Astro](https://astro.build).
- **Zero JavaScript** shipped to the browser — pure HTML + CSS
- **Full SEO** — meta tags, Open Graph, Twitter card, JSON-LD structured data
- **Print-ready** — A4 PDF output via browser print dialog

---

## ✏️ Update your CV

**Only edit `src/data/resume.ts`** — every section is plain TypeScript data.

Also update the `seo.url` field to your live domain before deploying.

---

## 🚀 Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

---

## 🌐 Deploy to Netlify (recommended — free)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push this folder to a GitHub repo
2. netlify.com → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy ✓

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. vercel.com → New Project → Import repo
3. Framework: **Astro** (auto-detected)
4. Deploy ✓

---

## 🖨️ Print / Save as PDF

Click **"Print / Save as PDF"** on the page.
In the dialog: set margins to **None**, enable **Background graphics**.

---

## 📁 Structure

```
src/
├── data/
│   └── resume.ts       ← only file you need to edit
├── layouts/
│   └── Base.astro      ← HTML shell + all SEO meta tags
└── pages/
    └── index.astro     ← CV layout (pure HTML, zero JS)

public/
└── robots.txt
```

## SEO features included

- `<title>` and `<meta name="description">`
- Canonical URL
- Open Graph tags (LinkedIn / WhatsApp / Slack share preview)
- Twitter card
- `robots.txt`
- JSON-LD structured data (`Person` schema — Google understands your page is a résumé)
