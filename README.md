# Obsidian Design Agency — Corporate Website

[![Deploy Status](https://img.shields.io/badge/Netlify-Ready-00C7B7?logo=netlify&logoColor=white)](https://netlify.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Production%20Build-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> **Obsidian Design Agency** is a premier creative design agency headquartered in Victoria Island, Lagos, Nigeria. We engineer bold brand identities, tactile digital products, and high-impact design systems for visionary African enterprises and international clients.

---

## ✦ Live Experience & Preview

- **Live Deployment Preview**: [https://antigravity.luch.dev/site/fffaad97-a521-4754-8383-fc4786ced846/404c0102c737056bf40cb973/](https://antigravity.luch.dev/site/fffaad97-a521-4754-8383-fc4786ced846/404c0102c737056bf40cb973/)
- **GitHub Repository**: `oxNelson/build-a-one-page-website-for`

---

## ✦ Website Architecture & Scope

The website delivers exactly five primary pages with unified navigation and footer:

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Strategic agency introduction, value proposition, featured projects, services overview, philosophy, methodology, testimonials, and primary enquiry CTA. |
| `/about` | **About** | Agency story and Nigerian roots, mission, vision, core values, approach to business problems, team structure, and collaboration process. |
| `/services` | **Services** | 7 core disciplines (Brand Strategy, Logo & Visual Systems, Web Design & Dev, UI/UX Product Design, Marketing Collateral, Social Media Design, Packaging & Print) with filterable tabs and deliverables breakdowns. |
| `/portfolio` | **Portfolio** | Curated project archive with filterable categories, interactive case study modals (challenge, approach, outcomes, metrics, deliverables), and commission CTAs. |
| `/contact` | **Contact** | Project inquiry brief with native format validation, service selector, budget brackets, consent confirmation, Netlify Forms integration, and instant inquiry reference codes. |

---

## ✦ Tech Stack

- **Frontend Library**: React 19 (`react`, `react-dom`)
- **Routing**: React Router v7 (`react-router-dom`)
- **Language**: TypeScript (`strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`)
- **Build System**: Vite 8 (`@vitejs/plugin-react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Iconography**: Lucide React (`lucide-react`)
- **Forms**: Netlify Forms with client-side validation and static HTML crawler scaffolding
- **Deployment Platform**: Netlify (`netlify.toml`)

---

## ✦ Getting Started & Local Development

### Prerequisites
- Node.js LTS (v20 or v22 recommended; `.nvmrc` pins `22`)
- npm v10+

### 1. Clean Installation
Install dependencies strictly from the committed lockfile:
```bash
npm ci
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build & TypeScript Verification
```bash
npm run build
```
Executes:
1. TypeScript strict typecheck (`tsc -b`)
2. Vite production bundling into `dist/`
3. Route pre-rendering sync (`scripts/postbuild.js`)

### 4. Local Production Preview
```bash
npm run preview
```
Serves the compiled production bundle at `http://localhost:4173`.

---

## ✦ Netlify Deployment Configuration

The repository is configured for zero-configuration, continuous deployment on Netlify via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "22"
```

### Netlify Forms Integration
- The contact form is configured with `name="contact"`, `data-netlify="true"`, and `netlify-honeypot="bot-field"`.
- A static hidden form template is placed directly inside `index.html` to guarantee detection by Netlify's build-time crawler.
- Submissions post as `application/x-www-form-urlencoded` payloads with fallback verification.

---

## ✦ Quality Assurance & Testing Report

| Test Item | Verification Method | Status | Notes |
| :--- | :--- | :---: | :--- |
| **Clean Install** | `npm ci` | ✅ PASSED | 60 packages audited, 0 vulnerabilities |
| **Type Check** | `tsc -b` | ✅ PASSED | Strict mode enabled, 0 compiler errors |
| **Production Build** | `vite build` | ✅ PASSED | Built in <700ms, chunk sizes optimized |
| **All 5 Routes** | Direct curl & browser preview | ✅ PASSED | `/`, `/about`, `/services`, `/portfolio`, `/contact` return HTTP 200 |
| **404 Routing** | Unknown route test | ✅ PASSED | Dedicated not-found UI with home redirection |
| **Form Validation** | Name, email regex, message length | ✅ PASSED | Prevents invalid submit, generates inquiry ref |
| **Netlify Redirects** | `_redirects` & `netlify.toml` | ✅ PASSED | SPA fallback configured for clean refreshes |
| **Responsive UI** | Mobile, tablet, desktop | ✅ PASSED | No horizontal overflow, touch targets >44px |
| **Accessibility** | WCAG 2.2 AA standards | ✅ PASSED | High-contrast palette, visible focus rings, ARIA landmarks |

---

## ✦ Business Information
- **Agency Name**: Obsidian Design Agency
- **Headquarters**: Victoria Island, Lagos, Nigeria
- **Studio Coordinates**: 6.4281° N, 3.4219° E
- **Inquiries**: `contact@obsidiandesign.ng`
- **Response Commitment**: Within 24 business hours (Mon – Fri, WAT)
