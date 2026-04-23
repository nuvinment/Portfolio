# 🌐 Nuvin Amarasinghe — Personal Portfolio

A modern, responsive, bilingual (English / Japanese) personal portfolio website built with **Bootstrap 5.3** and custom CSS/JS. Designed to showcase my journey as an IT undergraduate and Japanese language student at Lanka Nippon BizTech Institute.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📑 Table of Contents

- [Features](#-features)
- [Bootstrap Features Used](#-bootstrap-features-used)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sections](#-sections)
- [License](#-license)

---

## ✨ Features

- 🌏 **Bilingual Support** — Full English / Japanese language toggle
- 🎨 **Glassmorphism Design** — Frosted-glass card components with blur effects
- ⌨️ **Typing Animation** — Dynamic hero text with auto-typed roles
- 🔍 **Project Filtering** — Filter projects by category (Python, Java, Web)
- 📱 **Fully Responsive** — Optimised layout for all screen sizes
- 🎬 **Scroll Reveal Animations** — Elements animate into view on scroll
- 📊 **Animated Skill Bars** — Progress bars that fill on viewport entry

---

## 🅱️ Bootstrap Features Used

This website extensively utilises **Bootstrap 5.3.3** (loaded via CDN). Below is a categorised breakdown of every Bootstrap feature integrated into the project.

### 1. Layout & Grid System

| Feature | Classes Used | Where |
|---|---|---|
| **Container** | `container` | Navbar, Hero, About, Skills, Projects, Education, Contact, Footer |
| **Row / Column Grid** | `row`, `col-lg-7`, `col-lg-5`, `col-md-6`, `col-lg-4`, `col-6`, `col-md-4`, `col-lg-3`, `col-lg-6` | Hero split layout, About section, Skills grid, Projects grid, Contact layout |
| **Gutters** | `g-4` | Skills cards grid, Projects grid, Contact row |
| **Responsive Breakpoints** | `col-6 col-md-4 col-lg-3` | Skills section — 2 columns on mobile, 3 on tablet, 4 on desktop |

### 2. Navbar Component

| Feature | Classes / Attributes Used | Description |
|---|---|---|
| **Responsive Navbar** | `navbar`, `navbar-expand-lg`, `fixed-top` | Collapses on screens below `lg` breakpoint, stays fixed at the top |
| **Navbar Brand** | `navbar-brand` | Site logo/brand link |
| **Navbar Toggler** | `navbar-toggler`, `navbar-toggler-icon` | Hamburger menu icon for mobile |
| **Collapse** | `collapse`, `navbar-collapse` | Collapsible navigation links container |
| **Data Attributes** | `data-bs-toggle="collapse"`, `data-bs-target="#navLinks"` | Controls the collapse behaviour of the mobile menu |
| **Nav Items / Links** | `navbar-nav`, `nav-item`, `nav-link` | Navigation link structure |

### 3. Scrollspy

| Feature | Attributes Used | Description |
|---|---|---|
| **Scrollspy** | `data-bs-spy="scroll"`, `data-bs-target="#mainNav"`, `data-bs-offset="80"` | Applied on `<body>` to automatically highlight active nav links as the user scrolls through sections |

### 4. Buttons

| Feature | Classes Used | Where |
|---|---|---|
| **Outline Button** | `btn`, `btn-outline-light` | Hero "Get in Touch" CTA |
| **Custom Glow Button** | `btn`, `btn-glow` | Hero "View My Work" CTA, Contact form submit |
| **Full-Width Button** | `w-100` | Contact form submit button |

### 5. Forms

| Feature | Classes Used | Where |
|---|---|---|
| **Form Labels** | `form-label` | Contact form (Name, Email, Subject, Message) |
| **Form Controls** | `form-control` | All input fields and textarea in the contact form |
| **Margin Bottom Spacing** | `mb-3` | Spacing between form groups |

### 6. Bootstrap Icons

| Feature | CDN / Classes | Description |
|---|---|---|
| **Icon Library** | `bootstrap-icons@1.11.3` | Full icon set loaded via CDN |
| **File Type Icons** | `bi-filetype-py`, `bi-filetype-java`, `bi-filetype-html`, `bi-filetype-css`, `bi-filetype-js` | Skills section — language/technology icons |
| **UI Icons** | `bi-translate`, `bi-database`, `bi-git`, `bi-car-front-fill`, `bi-airplane-fill`, `bi-globe2` | Skills & project card icons |
| **Social Icons** | `bi-github`, `bi-linkedin`, `bi-twitter-x` | Contact section social links |
| **Utility Icons** | `bi-geo-alt-fill`, `bi-envelope-fill`, `bi-mortarboard-fill`, `bi-send-fill`, `bi-heart-fill`, `bi-arrow-up-short`, `bi-box-arrow-up-right`, `bi-book-fill`, `bi-code-slash`, `bi-check-circle-fill` | Contact info, footer, education timeline, form feedback |

### 7. Utility Classes

| Category | Classes Used | Description |
|---|---|---|
| **Flexbox** | `d-flex`, `align-items-center` | Hero section vertical centering |
| **Display** | `d-none`, `d-lg-block` | Hero profile image hidden on mobile, shown on desktop |
| **Text Alignment** | `text-center` | Section headers, footer, about image |
| **Spacing** | `ms-auto`, `me-2`, `me-3`, `ms-lg-3`, `mt-4`, `mt-5`, `mb-3`, `mb-4`, `mb-lg-0` | Navbar alignment, button spacing, section gaps |
| **Positioning** | `position-relative` | Hero container (for z-index layering over background shapes) |
| **Width** | `w-100` | Full-width submit button |

### 8. Bootstrap JavaScript (Bundle)

| Feature | Usage | Description |
|---|---|---|
| **Collapse Plugin** | `bootstrap.Collapse` | Programmatically closes the mobile navbar after clicking an anchor link |
| **Scrollspy Plugin** | Via data attributes on `<body>` | Tracks scroll position and updates active nav link |
| **Bootstrap Bundle** | `bootstrap.bundle.min.js` | Includes Popper.js and all Bootstrap JS plugins |

### 9. Responsive Design

| Feature | Implementation | Description |
|---|---|---|
| **Viewport Meta** | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Ensures proper rendering on all devices |
| **Responsive Grid Breakpoints** | `col-6`, `col-md-4`, `col-lg-3` (Skills); `col-md-6`, `col-lg-4` (Projects) | Multi-breakpoint column layouts |
| **Responsive Navbar** | `navbar-expand-lg` | Collapses to hamburger menu below 992px |
| **Responsive Visibility** | `d-none d-lg-block` | Hero image only displayed on large screens |
| **Responsive Spacing** | `mb-4 mb-lg-0`, `ms-lg-3` | Conditional margins at different breakpoints |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **HTML5** | — | Semantic page structure |
| **CSS3** | — | Custom styling, glassmorphism, animations |
| **JavaScript** (Vanilla) | ES6+ | Interactivity, i18n, typing effect, filtering |
| **Bootstrap** | 5.3.3 | Responsive grid, components, utilities, icons |
| **Bootstrap Icons** | 1.11.3 | Scalable vector icon library |
| **Google Fonts** | — | Inter, Outfit, Noto Sans JP |

---

## 📁 Project Structure

```
Portfolio/
├── index.html      # Main HTML page
├── style.css       # Custom styles (glassmorphism, animations, theming)
├── script.js       # JavaScript (i18n, typing, scroll effects, filtering)
├── profile.png     # Profile image
└── README.md       # This file
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   Simply open `index.html` in any modern web browser — no build tools or server required.

3. **Or use Live Server**
   If you have VS Code, install the **Live Server** extension and click "Go Live" for hot-reloading.

---

## 📖 Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with typing animation and gradient CTAs |
| **About** | Bio, profile image, and key stats |
| **Skills** | 8 skill cards with animated progress bars |
| **Projects** | Filterable project cards (Car Rental System, Airline Reservation, Gido) |
| **Education** | Vertical timeline of academic journey |
| **Contact** | Contact info card + form with bilingual support |
| **Footer** | Back-to-top button and copyright |

---
## Project Screenshots

### Homepage
![Homepage Screenshot](screenshots/Screenshot%202026-04-23%20114707.png)

### Portfolio Section
![Portfolio Screenshot](screenshots/Screenshot%202026-04-23%20114823.png)

### Contact Page
![Contact Screenshot](screenshots/Screenshot%2026-04-23%115105.png)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Built with 💜 by **Nuvin Amarasinghe** — Sri Lanka 🇱🇰
