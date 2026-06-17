# Kanthuri Jaswanth Royal — Portfolio

A modern, animated personal portfolio built with **React + Vite + Framer Motion**.
Clean light + blue theme, rich scroll animations, fully responsive.

## 🚀 Run it locally

```bash
npm install      # first time only
npm run dev      # starts the dev server (usually http://localhost:5173)
```

Open the URL it prints in your browser.

## 🏗️ Build for hosting

```bash
npm run build    # outputs a static site into the /dist folder
npm run preview  # preview the production build locally
```

Upload the contents of `/dist` to any static host (GitHub Pages, Netlify, Vercel, etc.).

## ✏️ How to edit your content

**Everything you'd want to change lives in one file:** [`src/data.js`](src/data.js)

- `profile` — your name, headline, email, LinkedIn, GitHub, phone, summary, stats
- `experience` — your jobs / roles
- `projects` — your projects (copy the commented template to add more)
- `skills` — skill groups and percentage levels
- `education` — your degrees
- `posts` — paste your LinkedIn posts here and the "Featured" section appears automatically

Just edit the text, save, and the site updates instantly while `npm run dev` is running.

### Add your photo (optional)
Replace the initials avatar in the hero by editing the `hero-avatar` block in
`src/App.jsx`, or drop an image into `public/` and reference it.

### Add your resume
Put your resume PDF in `public/` and set `resumeUrl` in `src/data.js`
(e.g. `resumeUrl: "./resume.pdf"`) — a Resume button appears in the hero.

## 🎨 Change the colors
Edit the CSS variables at the top of [`src/index.css`](src/index.css)
(`--blue-600`, `--cyan-500`, etc.).

---
Built with ♥ using React & Framer Motion.
