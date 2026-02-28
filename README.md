# Mrittick Deb — Portfolio Website

A world-class animated personal portfolio built with **Next.js 14**, **Three.js**, **Framer Motion**, and the **Aurora** color system.

## ✨ Features

- **Three.js Aurora Particle Hero** — 600-particle constellation with mouse-reactive parallax and cyan/violet color interpolation
- **Framer Motion Animations** — Scroll-triggered reveals, staggered entrances, typewriter effect, character-by-character name animation
- **Dark/Light Mode Toggle** — Smooth transitions with Aurora color system
- **Custom Animated Cursor** — Dot + ring that reacts to hoverable elements
- **Glassmorphic Navbar** — Transparent → blurred glass on scroll with active section highlighting
- **Bento Grid Projects** — Featured projects get larger cards with GitHub + Live Demo buttons
- **Lenis Smooth Scroll** — Butter-smooth scrolling experience
- **Fully Responsive** — Mobile, tablet, and desktop
- **SEO Optimized** — Proper meta tags, semantic HTML, Open Graph

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + Custom CSS |
| 3D/WebGL | Three.js via @react-three/fiber + @react-three/drei |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Lucide React + React Icons |
| Fonts | Syne + Plus Jakarta Sans (Google Fonts) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page with Lenis smooth scroll
│   └── globals.css         # Aurora color system & utilities
├── components/
│   ├── ThreeBackground.tsx # Three.js aurora particle field
│   ├── CustomCursor.tsx    # Animated cursor
│   ├── Navbar.tsx          # Glassmorphic sticky navbar
│   ├── Hero.tsx            # Full-viewport hero section
│   ├── About.tsx           # Bio + avatar + stat cards
│   ├── Skills.tsx          # Categorized skill pills
│   ├── Experience.tsx      # Animated timeline
│   ├── Projects.tsx        # Bento grid project cards
│   ├── Certifications.tsx  # Achievements & education
│   ├── Contact.tsx         # Contact form + info
│   └── Footer.tsx          # Minimal footer
└── data/
    └── portfolio.ts        # All content — edit this file to update
```

## ✏️ Customization

All portfolio content lives in **`src/data/portfolio.ts`**. Edit this single file to update:
- Personal info & bio
- Social links
- Tech stack
- Projects
- Experience
- Education
- Certifications & achievements

## 🎨 Color System (Aurora)

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| Base | `#0A0F1E` | `#F8F9FC` |
| Accent Cyan | `#00D4FF` | `#00B4D8` |
| Accent Violet | `#7C3AED` | `#7C3AED` |
| Text | `#F0F2F8` | `#0A0F1E` |

---

Built with ♥ by Mrittick Deb
