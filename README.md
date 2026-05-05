# Charmaine Crescini — Portfolio

A dark, techy frontend portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features
- Typing animation hero with live stats
- Scroll-reveal animations on all sections
- Interactive tabbed Experience section
- Responsive mobile-friendly layout
- Neon green / dark aesthetic with glassmorphism cards
- Space Mono + DM Sans typography

## 🗂 Project Structure

```
charmaine-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Divider.jsx
│   ├── data/
│   │   └── portfolio.js       ← Edit your info here
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Customization

All your personal data lives in **`src/data/portfolio.js`**.  
Edit that one file to update your name, bio, skills, experience, and contact links.

```js
// src/data/portfolio.js
export const portfolioData = {
  name: "Charmaine Crescini",
  github: "https://github.com/YOUR_USERNAME",  // ← update this
  // ...
};
```

## 🌐 Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag-and-drop the `dist/` folder to netlify.com/drop
```

### GitHub Pages
```bash
# 1. Add to vite.config.js:
#    base: '/your-repo-name/'

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
#    "deploy": "gh-pages -d dist"

npm run build && npm run deploy
```

## 🔧 Tech Stack
- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI framework
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- [Space Mono](https://fonts.google.com/specimen/Space+Mono) — display font
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — body font
