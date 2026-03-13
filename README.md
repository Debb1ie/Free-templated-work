# 🚀 Modern Dev Portfolio | React + Tailwind CSS

A high-performance, responsive developer portfolio built with **React.js** and **Tailwind CSS**. This project features a sleek dark-mode aesthetic, glassmorphic UI elements, and a mobile-first grid system.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

* **Glassmorphism UI:** Modern frosted-glass navigation bar with blur effects.
* **Responsive Grid:** Dynamic project showcase that adapts from mobile to ultra-wide screens.
* **Optimized Performance:** Built using Vite for lightning-fast Hot Module Replacement (HMR).
* **Tailwind Architecture:** Utility-first styling for zero-runtime CSS overhead.
* **Semantic HTML:** Accessibility-focused structure for better SEO and screen readers.

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **React 18** | Frontend library for component-based UI. |
| **Tailwind CSS** | For rapid styling and responsive design. |
| **Vite** | Next-generation frontend tooling. |
| **Lucide React** | (Optional) For clean, lightweight iconography. |

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/yourusername/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Tailwind**
    Ensure your `tailwind.config.js` includes the source paths:
    ```javascript
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI pieces (Navbar, ProjectCard)
│   ├── App.jsx           # Main application logic and layout
│   ├── index.css         # Tailwind directives (@tailwind base...)
│   └── main.jsx          # React DOM entry point
├── public/               # Static assets (images, icons)
└── tailwind.config.js    # Tailwind customization
