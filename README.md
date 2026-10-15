# Arya Patle — Developer Portfolio

A personal developer portfolio built for **Arya Patle**, showcasing verified Machine Learning projects, NLP classification pipelines, and academic software engineering.

---

## 🚀 Live Preview & Running Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9+

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
To test the production build locally:
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture & Clean Maintenance

All portfolio content is decoupled from layout components and centralized in a single configuration file:

```
src/
├── app/
│   ├── globals.css         # Dark charcoal theme, hair-line borders & custom scrollbars
│   ├── layout.tsx          # SEO metadata, OpenGraph tags, and Geist typography
│   └── page.tsx            # Main page assembly
├── components/
│   ├── Navbar.tsx          # Sticky navigation with active-section tracking & mobile drawer
│   ├── Hero.tsx            # Headline, quick metrics, and verified NLP code pipeline preview
│   ├── NeuralCanvas.tsx    # Lightweight interactive canvas neural network visualizer
│   ├── About.tsx           # Authentic background narrative & CS focus areas
│   ├── Projects.tsx        # Project showcase with category filters
│   ├── ProjectCard.tsx     # Rich cards with problem definitions, methodology, & accuracy metrics
│   ├── InteractiveDemoModal.tsx # Live simulated client-side ML inference testing
│   ├── Skills.tsx          # Categorized skill badges (Python, Scikit-Learn, NLP, Tools)
│   ├── Experience.tsx      # CodSoft Machine Learning Internship timeline
│   ├── Education.tsx       # B.Tech CSE details & core coursework
│   ├── Entrepreneurship.tsx# Handcrafted craft business initiative
│   ├── Contact.tsx         # Verified GitHub profile card & message preparer
│   └── Footer.tsx          # Dynamic year, navigation links, and copyright
└── data/
    └── portfolioData.ts    # Centralized source of truth for all text, links, and projects
```

---

## ✏️ How to Update Your Information

You do not need to edit complex HTML/CSS to update your portfolio. Simply open:
[`src/data/portfolioData.ts`](file:///c:/Users/hp/OneDrive/Desktop/Arya%20Portfolio/src/data/portfolioData.ts)

You can update:
- **Email, LinkedIn, or Resume links**: Add your links under `socials` and they will automatically appear across the site.
- **Projects & Accuracy Benchmarks**: Add new projects or update existing ones under `projects`.
- **College Name & Graduation Year**: When confirmed, update `education.details` and `education.note`.

---

## 🌐 Deploying to Vercel

1. Push this directory to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete developer portfolio for Arya Patle"
   git branch -M main
   git remote add origin https://github.com/aryapatle123/<your-portfolio-repo>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Next.js App Router will be auto-detected with zero configuration needed.
4. Click **Deploy**. Your portfolio will be live with high-speed global CDN delivery.
