# Mehruf P. — Portfolio Website

React + Vite personal portfolio. It describes who I am, what I can do, and what I have done. It is not written for any one role.
Content follows the resume plus the clarifications recorded in `Portfolio_Audit_Mehruf.md`.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```
The site is generated in `dist/`. Dependency versions are pinned in `package.json`.

## Deploy
- **Netlify / Vercel:** build command `npm run build`, output directory `dist`.
- **GitHub Pages (sub-path):** set `base: '/your-repo-name/'` in `vite.config.js`. The favicon follow `base` automatically.

## Content rules
- Every number comes from the resume or from Mehruf's written answers. Do not add figures (time saved, accuracy gains) without data.
- Project pictures are **illustrative concepts**, labelled on each card. They contain no real data.
- Do not add real screenshots of Ditto systems unless (1) a manager has OK'd it in writing and (2) the screen shows demo data only, with no real advisor names, scores, customer details or internal documents.

## Still open before publishing
1. QA score 77% → 86%+: add the scale, period and how it was measured when known (shown in "Impact at Ditto").
3. Add to the resume's Ditto Assist entry: declaration help, specific illness check, Product Assist (Gemini API chatbot), Coverage Projection Studio, quality and coaching tools, daily learning tips.
4. Confirm the Senior Associate dates (Jul 2024 – Sep 2025) and the "AI-assisted development" skill line.
5. Optional: add a short, anonymised case study of the QA data pipeline using made-up sample data.
