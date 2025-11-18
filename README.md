# 🌐 AppDost Pvt. Ltd. – Your Complete IT & Digital Solutions Partner
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Hosted: Vercel](https://img.shields.io/badge/Hosted-Vercel-brightgreen)](https://appdost-website.vercel.app)
[![Frontend: HTML/CSS/JS](https://img.shields.io/badge/Tech-HTML/CSS/JS-blue)](https://developer.mozilla.org/en-US/docs/Web)
[![GitHub Repo stars](https://img.shields.io/github/stars/vijayshikhare/appdost-website?style=social)](https://github.com/vijayshikhare/appdost-website)

Welcome to **AppDost Pvt. Ltd.** – a modern, responsive static website showcasing our expertise in IT services, web/mobile app development, cloud solutions, and digital marketing. Built for performance and user engagement, this site highlights our portfolio, services, and career opportunities, driving leads with seamless navigation, animations, and conversion-focused CTAs.

🚀 **Live Demo**:
- **Website**: [https://appdost-websites.vercel.app](https://appdost-websites.vercel.app)

📱 **Quick Access** (for testing/exploration):
- **Services**: Scroll to `#services` or click nav link.
- **Portfolio**: View highlights at `#portfolio`.
- **Contact Form**: Test submission at `/contact/contact.html` (client-side validation only; backend integration ready).

---

## 👨‍💻 About the Project
AppDost Pvt. Ltd. is a next-generation IT services company specializing in software, web, and mobile app development. This website serves as our digital storefront, helping startups and enterprises discover our solutions through intuitive design and compelling content. Key goals include:
- Highlighting services, technologies, and portfolio to attract clients.
- Providing easy access to careers and contact for talent/recruitment.
- Ensuring fast, SEO-optimized, mobile-responsive experience.
This project demonstrates modern static site development with clean code, animations, and efficient asset management.

---

## ✨ Features
- **Responsive Design**: Mobile-first layout with sticky header, collapsible nav, and adaptive grids.
- **Interactive Sections**:
  - Hero with CTAs and background overlay.
  - Services grid with icons and staggered animations.
  - Portfolio cards with tech tags and gradient thumbs.
  - Careers preview with role cards.
- **Contact Form**: Client-side validation (name/email/subject/message) with success/error messages.
- **Performance Optimizations**: Lazy-loading ready, minified assets, Font Awesome icons, Google Fonts.
- **Accessibility**: ARIA labels, semantic HTML, alt texts for images.
- **SEO-Friendly**: Meta tags, structured headings, anchor links for sections.
- **Shared Components**: Reusable header/footer for multi-page consistency.

| Feature | Description | Tech Used |
|---------|-------------|-----------|
| Navigation | Sticky header with mobile toggle | HTML/CSS/JS |
| Animations | Scroll-triggered reveals (data-delay) | CSS/JS |
| Form Validation | HTML5 + JS (minlength, required) | Vanilla JS |
| Portfolio | Dynamic cards with tech badges | CSS Grid |
| Contact | Form + info/social/map placeholder | HTML/CSS |

---

## 🛠️ Tech Stack
### Core Technologies
- **HTML5**: Semantic structure for sections (hero, about, services).
- **CSS3**: Responsive grids, animations (animate-on-scroll), gradients.
- **Vanilla JavaScript**: Mobile menu toggle, form handling, active nav.
### Libraries & Tools
- **Font Awesome 6.4**: Icons for services, social, forms.
- **Google Fonts (Poppins)**: Modern typography (400-700 weights).
- **Cloudinary**: Logo/image hosting.
### Deployment & Tools
- **Vercel**: Static hosting with auto-deploys from GitHub.
- **Git/GitHub**: Version control and collaboration.
- **Git Bash**: Local CLI for pushes.

---

## 📁 Project Structure
```
appdost-website/
├── index.html # Homepage with all sections
├── about/
│   └── about.html # Expanded about page
├── services/
│   └── services.html # Detailed services
├── portfolio/
│   └── portfolio.html # Full portfolio
├── careers/
│   └── careers.html # Job listings
├── contact/
│   └── contact.html # Form + info
├── shared/ # Reusable assets
│   ├── css/
│   │   └── style.css # Global styles (container, btn, animate-on-scroll)
│   ├── js/
│   │   └── script.js # Mobile toggle, nav active, form submit
│   └── header.html # Shared header (SSI include)
│   └── footer.html # Shared footer
├── .gitignore # Ignore temp files
└── README.md # This file
```

---

## 🚀 Quick Start (Local Development)
### Prerequisites
- Git
- Web browser (Chrome/Firefox for dev tools)
- Text editor (VS Code recommended)

### Setup
1. Clone repo:
   ```
   git clone https://github.com/vijayshikhare/appdost-website.git
   cd appdost-website
   ```
2. Open in browser:
   ```
   # Serve locally (use Live Server extension in VS Code)
   # Or open index.html directly
   ```
   - Expected: Site loads at `http://localhost:5500` (with Live Server).

3. Edit & Test:
   - Modify `shared/css/style.css` for styles.
   - Add JS to `shared/js/script.js` for interactions.
   - Test form: Submit in `/contact/contact.html` (logs to console).

### Local Testing
- Responsive: Resize browser or use dev tools.
- Animations: Scroll sections for `animate-on-scroll`.
- Nav: Click links; active class updates dynamically.

---

## 🌍 Deployment Guide
### Vercel (Free Static Hosting)
1. Connect GitHub repo to [Vercel](https://vercel.com).
2. Build settings:
   - Framework: **Other**.
   - Root directory: `./`.
   - Build command: Blank.
   - Output directory: Blank.
3. Env vars: None needed (static site).
4. Deploy: Auto on Git push to `main`.
**Live Link**:
- Website: [https://appdost-websites.vercel.app](https://appdost-websites.vercel.app)

### Alternatives
- **Netlify**: Drag-drop `public` folder or connect Git.
- **GitHub Pages**: Repo settings > Pages > Deploy from `main` branch.

---

## 📱 Usage Guide
1. **Homepage**: Scroll through hero → about → services → portfolio → careers → testimonials → CTA.
2. **Navigation**: Click "Services" for details; "Get a Quote" scrolls to contact.
3. **Contact**: Fill form (validate fields) → Success message shows.
4. **Mobile**: Toggle menu for nav; button visible on all screens.
5. **Portfolio**: Click "Explore" for project deep-dive.

---

## 🤝 Contributing
1. Fork the repo.
2. Create branch: `git checkout -b feature/your-feature`.
3. Commit: `git commit -m "Add feature: description"`.
4. Push: `git push origin feature/your-feature`.
5. Pull Request to `main`.
**Guidelines**: Semantic HTML, clean CSS (no inline), test responsiveness, update README.

---

## 📄 License
MIT License – see [LICENSE](LICENSE).

---

## 📞 Contact
**Vijay Shikhare**
- LinkedIn: [linkedin.com/in/vijayshikhare](https://linkedin.com/in/vijayshikhare)
- GitHub: [github.com/vijayshikhare](https://github.com/vijayshikhare)
Issues? Open a GitHub issue or email us.

---

## 🔑 SEO Keywords
`AppDost Pvt Ltd`, `IT services India`, `web development company`, `mobile app development`, `cloud DevOps`, `digital marketing agency`, `software development firm`, `Vercel static site`, `responsive website portfolio`, `careers in IT`, `Java Spring Boot React Native`.

---

## 🌐 Popular Tags
`#WebDevelopment` `#ITServices` `#StaticSite` `#HTMLCSSJS` `#Vercel` `#ResponsiveDesign` `#PortfolioSite` `#DigitalAgency` `#AppDevelopment` `#CloudSolutions` `#FreelanceIT`

---

✨ *Built with innovation – star the repo if it inspires your next project!* **AppDost Team**
