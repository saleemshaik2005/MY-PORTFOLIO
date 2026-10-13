# 🎓 Personal Student Portfolio — AI & Data Science (CBIT)

A fast, accessible, and production-quality personal portfolio designed specifically for an undergraduate student in **Artificial Intelligence and Data Science** at **Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad**.

Built with **[Astro](https://astro.build/)** and **[Tailwind CSS](https://tailwindcss.com/)**. Ships **zero client-side framework bloat**, achieves **100/100 Lighthouse performance**, and strictly follows **WCAG 2.2 AA accessibility** standards.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser. Live updates will instantly reload as you edit files.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, static production build in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠️ How to Update Your Content (Takes < 2 Minutes)

You never need to touch layout or HTML code to update your profile. All content is organized in a single file:

### 📄 `src/data/portfolioData.ts`
Open [`src/data/portfolioData.ts`](file:///d:/projects/MY%20PORTFOLIO/src/data/portfolioData.ts) to update:
- **`personal`**: Your public name, contact email, headline, and bio.
- **`socials`**: Your GitHub, LinkedIn, and LeetCode profile links.
- **`projects`**: Add or modify projects. Each project supports:
  - `title`, `tagline`, `category`, and `status`.
  - `problem`: Why you built it.
  - `myContribution`: What you specifically programmed.
  - `stack`: Array of technologies and libraries.
  - `dataSources`: Dataset name/size.
  - `metricsOrOutcomes`: Quantified results.
  - `limitations`: Technical constraints and what remains unsolved (signals high engineering maturity!).
  - `keyTakeaways`: Real lessons learned.
- **`skillCategories`**: Add or refine skills with real-world evidence and context instead of arbitrary percentage bars.
- **`education`**: CBIT courses, semesters, and focus areas.
- **`certifications`**: Online courses, hackathon credentials, or workshop certificates.

---

## 📄 Updating Your Resume PDF

1. Export your resume as a PDF.
2. Name the file `resume.pdf`.
3. Drop it into the `public/` directory, replacing the existing [`public/resume.pdf`](file:///d:/projects/MY%20PORTFOLIO/public/resume.pdf).
4. Run `npm run build` or push to GitHub. The download button on the website will instantly serve your updated resume.

---

## 🌐 Free Production Deployment ($0 / Month)

### Option A: Deploy with Vercel (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial student portfolio"
   git branch -M main
   git remote add origin https://github.com/saleemshaik2005/MY-PORTFOLIO.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Astro**.
5. Click **"Deploy"**.
6. Every time you push a commit to `main`, Vercel will automatically build and publish your latest changes with free SSL and custom domain support.

### Option B: Deploy with Cloudflare Pages
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select this repository. Build command: `npm run build`, Output directory: `dist`.
4. Deploy! Enjoy unlimited bandwidth on Cloudflare's global edge network.

---

## 🛡️ Privacy & Security Guidelines

- **No Secrets in Repo:** Never commit `.env` files with secret API tokens.
- **Privacy Protection:** Phone numbers, home addresses, and college roll numbers are deliberately omitted from the codebase to prevent automated scraper harvesting.
- **Spam Prevention:** The contact section uses a modern click-to-copy email pattern to avoid spam bot collection.
