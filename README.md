# 🌐 Somil Kumar's 3D Portfolio Website 🚀

Welcome to my interactive 3D portfolio website! This project showcases my skills in software development, 3D rendering, and responsive web design. It combines creative visuals with technical prowess to present my projects, experience, and contact options in an engaging manner.

---

## 📌 Features

- 🎨 **3D Canvas Integration** powered by Three.js (React Three Fiber)
- 💻 **Responsive Design** for all screen sizes
- 🔥 **Smooth Animations** with Framer Motion
- 📩 **Functional Contact Form** using EmailJS (no backend required)
- 🌟 **Modern UI/UX** with Tailwind CSS
- 🌍 Interactive Earth model & creative visual elements

---

## 🛠️ Tech Stack

| Technology        | Usage                                    |
|-------------------|------------------------------------------|
| **React.js**      | Frontend framework                       |
| **Vite**          | Build tool and development server        |
| **Three.js (React Three Fiber)** | 3D rendering framework    |
| **Framer Motion** | Animations                               |
| **Tailwind CSS**  | Styling framework                        |
| **EmailJS**       | Contact form email service               |

---

## 📂 Project Structure Overview

```bash
3D_Portfolio/
├── public/
│   └── assets/               # Static assets
├── src/
│   ├── components/           # Navbar, Hero, Contact, etc.
│   ├── canvas/               # 3D Canvas components (EarthCanvas, etc.)
│   ├── hoc/                  # Higher-Order Components
│   ├── utils/                # Motion variants & constants
│   └── styles.js             # Custom styling variables
├── .env                      # EmailJS environment variables
├── README.md                 # Project documentation
└── package.json
```

---

## 📩 Contact Form Functionality

- Users fill in **Name**, **Email**, and **Message** fields.
- The form sends messages directly to my inbox via **EmailJS** (without backend).
- Validates fields before sending.
- Auto-reply configured to confirm receipt to users.

---

## 🕹️ Getting Started Locally

1. **Clone the repo:**

```bash
git clone https://github.com/Somil1608/3D_Portfolio.git
cd 3D_Portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure Environment Variables:**

Create a `.env` file:

```bash
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run the development server:**

```bash
npm run dev
```

---

## 📄 Documentation

- **Contact Form Full Documentation:** Available in `/docs/Contact_Form_Documentation.md`

---

## 🌟 Future Enhancements

- Integrate ReCAPTCHA to prevent spam
- Add dark/light theme toggle
- Deploy using Vercel or Netlify
- Include multi-language support

---

## 👨‍💻 About Me

Hi, I'm **Somil Kumar**, a passionate software engineer currently working at Ivy Comptech with experience in Java, React.js, Spring, and database technologies. My aim is to creatively blend web development and 3D rendering to produce dynamic and impactful user experiences.

**Contact Me:**

- 📧 Email: kg.somil@gmail.com
- 🔗 LinkedIn: [linkedin.com/in/somil1608](https://linkedin.com/in/somil1608)
- 🔗 GitHub: [github.com/Somil1608](https://github.com/Somil1608)

---

## 📃 License

This project is licensed under the MIT License.

---

## 📢 Acknowledgments

- Thanks to the communities of React Three Fiber, EmailJS, and Tailwind CSS for providing amazing tools.
- Design inspiration taken from modern creative developer portfolios.

