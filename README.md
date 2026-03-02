# 🚀 Personal Website Template – React + TypeScript + Vite

This repository is a ready-to-use **React + TypeScript + Vite** website template.

Anyone can clone this repository and deploy their own website using **GitHub Pages + GitHub Actions (CI/CD)**.

---

# 🌍 Live Example

If deployed correctly, your site will be available at:

```
https://your-username.github.io/website/
```

Or using custom domain if configured.

---

# 📦 Tech Stack

* ⚛️ React
* 🟦 TypeScript
* ⚡ Vite
* 🎨 Tailwind CSS
* 🚀 GitHub Pages
* 🔁 GitHub Actions (CI/CD)

---

# 🛠 Step 1 – Fork or Clone This Repository

## Option A – Fork (Recommended)

1. Click **Fork** (top-right of this repository)
2. It will create a copy in your GitHub account

## Option B – Clone Directly

```bash
git clone https://github.com/sohail-24/website.git
cd website
```

---

# 💻 Step 2 – Install Dependencies

Make sure you have **Node.js 18+ installed**

Check version:

```bash
node -v
```

Then install dependencies:

```bash
npm install
```

---

# ▶️ Step 3 – Run Locally (Development Mode)

```bash
npm run dev
```

Open browser:

```
http://localhost:5173
```

Now modify:

```
src/
```

You can edit:

* Navbar
* Hero section
* Projects
* Contact
* Styling (Tailwind)

---

# 🏗 Step 4 – Build Production Version

When your website is ready:

```bash
npm run build
```

This creates:

```
dist/
```

This folder contains optimized production files.

---

# 🚀 Step 5 – Deploy to GitHub Pages (Automatic CI/CD)

This repository already includes:

```
.github/workflows/deploy.yml
```

That means:

✅ Every push to `main` branch
✅ Automatically builds
✅ Automatically deploys to GitHub Pages

---

## Enable GitHub Pages

1. Go to your repository
2. Click **Settings**
3. Click **Pages**
4. Under **Source**, select:

```
GitHub Actions
```

That’s it.

Now push code:

```bash
git add .
git commit -m "deploy website"
git push origin main
```

GitHub will:

* Install dependencies
* Build project
* Deploy to GitHub Pages

You can check deployment in:

```
Actions → Deploy workflow
```

---

# 🌐 Step 6 – Access Your Live Website

Your website will be available at:

```
https://your-username.github.io/website/
```

⚠️ Replace `your-username` with your GitHub username.

---

# 🌍 Optional – Custom Domain Setup

If you own a domain:

1. Go to **Settings → Pages**
2. Add your custom domain
3. Enable **Enforce HTTPS**
4. Configure DNS:

   * Add CNAME record pointing to:

     ```
     your-username.github.io
     ```

---

# 🧹 Recommended Improvements (Best Practice)

* Do NOT push `node_modules`
* Add `.gitignore`
* Keep only source files
* Let GitHub Actions build automatically
* Treat this like a production CI/CD pipeline

---

# 📁 Project Structure

```
website/
 ├── .github/workflows/deploy.yml
 ├── src/
 ├── public/
 ├── index.html
 ├── package.json
 ├── vite.config.ts
 └── dist/ (generated after build)
```

---

# 🧠 DevOps Mindset

This project demonstrates:

* Frontend development
* Automated CI/CD
* Production deployment
* Infrastructure-free hosting
* GitHub Actions pipeline

---

# 🤝 Contributing

You can modify this template and build:

* Portfolio site
* Resume website
* Startup landing page
* DevOps dashboard
* Project showcase

---

# 📜 License

Free to use and modify.

---

# 👨‍💻 Author

Mohammed Sohail
DevOps Engineer

---

⭐ If this project helped you, consider starring the repository.

Happy Building 🚀
