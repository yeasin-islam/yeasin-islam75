# 💼 Yeasin Islam | Portfolio

A modern, interactive portfolio website built with **React**, **Tailwind CSS**, and **Firebase Hosting** - designed to showcase personal projects, skills, and contact details in a smooth single-page experience.

> 🎉 I’m super happy and excited to finally share this with the world! This is more than a project - it’s a piece of me. 😊

---

## 🌍 Live Website

🌐 [https://yeasinislam08.web.app](https://yeasinislam08.web.app)

---

## 📌 Overview

This project is a single-page application (SPA) developed to highlight my technical background, education, project work, and provide a way to get in touch. It uses component-based architecture with optimized build tools and interactive scroll-based animations.

---

## 🧹 Features

* 💅 Fully responsive React SPA
* 🎯 Smooth scroll-triggered animations using AOS
* 📁 Projects displayed via Swiper carousel
* 🧠 Skills with animated progress counters
* 📬 Integrated EmailJS for contact form
* 🔒 Firebase Hosting with HTTPS
* 🔼 Scroll-to-top button
* 🎨 Modern design with Tailwind CSS + DaisyUI

---

## 🧱 Tech Stack

| Category     | Technology                           | Purpose                           |
| ------------ | ------------------------------------ | --------------------------------- |
| Frontend     | React 19.1.0                         | UI & component logic              |
| Build Tool   | Vite 7.0.0                           | Fast build and development server |
| Styling      | Tailwind CSS 4.1.11 + DaisyUI 5.0.43 | Styling & prebuilt UI components  |
| Animations   | AOS 2.3.4                            | Animate elements on scroll        |
| Icons        | React Icons 5.5.0                    | Scalable icon support             |
| Contact Form | EmailJS 3.2.0                        | Send form data to email           |
| Hosting      | Firebase Hosting                     | Deploy portfolio with CDN & HTTPS |
| Linting      | ESLint 9.29.0                        | Code formatting & linting         |

---

## 🧯 Application Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── GetInTouch.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   └── ScrollToTop.jsx
├── data/
│   └── ProjectsData.json
├── App.jsx
└── main.jsx
public/
├── index.html
├── images/
└── resume.pdf
```

---

## 🚀 Application Flow

1. **Loader** appears on page load for 2 seconds
2. **App** renders structured sections:

   * Hero → About → Skills → Education → Projects → Contact → Footer
3. Scroll-based animations powered by AOS
4. **Scroll-to-top** button appears on scroll
5. EmailJS form collects user info and sends mail

---

## 🚁 Deployment

Deployed via Firebase Hosting using:

```bash
npm run build
firebase deploy
```

Firebase config:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

---

## 👨‍💼 Author

**Md. Yeasin Islam**
MERN Stack Web Developer
🔗 [LinkedIn Profile](https://www.linkedin.com/in/yeasin-islam75/)
🌐 [yeasinislam08.web.app](https://yeasinislam08.web.app)

---

## 📬 Contact

If you’d like to collaborate or have any questions:

📧 Email: [info.yeasinislam@gmail.com](mailto:info.yeasinislam@gmail.com)
📱 Phone: [+880 1318 181198](tel:+8801318181198)
🚸 WhatsApp: [Chat Now](https://wa.me/8801318181198)

---

> Thank you for visiting my portfolio! I’m genuinely happy you’re here! 🙌🙂