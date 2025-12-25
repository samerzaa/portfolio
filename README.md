# 🚀 Samer Magtouf - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills, projects, and professional experience. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, a contact form with email functionality, and a beautiful UI/UX design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?logo=vite)

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme**: Beautiful dark color scheme with gradient accents
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Animation**: Custom loading page with animated elements
- **Snowfall Effect**: Interactive snowfall animation on hero section

### 📱 **Sections**
1. **Hero Section**: Eye-catching introduction with typewriter effect, profile image, and floating tech icons
2. **About Section**: Personal introduction with video background
3. **Skills Section**: Interactive skill showcase with progress bars and categories
4. **Projects Section**: Portfolio projects with images, descriptions, and links
5. **Contact Section**: Functional contact form with email integration
6. **Footer**: Social links and copyright information

### 🔧 **Functionality**
- **Contact Form**: Serverless backend with Nodemailer for email delivery
- **Honeypot Protection**: Spam prevention for contact form
- **Form Validation**: Client and server-side validation
- **Toast Notifications**: User feedback for form submissions
- **Resume Download**: Direct download link for resume
- **Smooth Navigation**: Anchor links with smooth scrolling

### 🛡️ **Security**
- Honeypot field to prevent bot submissions
- Input sanitization and validation
- Secure email handling via SMTP

## 🛠️ Tech Stack

### **Frontend**
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 7.3.0** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.26** - Animation library
- **React Router DOM 6.30.1** - Client-side routing
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### **Backend**
- **Node.js** - Runtime environment
- **Nodemailer 7.0.12** - Email sending
- **Vercel Serverless Functions** - API endpoints

### **UI Components**
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Re-usable component library
- **Custom Components** - Tailored UI elements

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
portfolio/
├── api/                    # Serverless functions
│   └── contact.ts         # Contact form API endpoint
├── public/                 # Static assets
│   └── assets/             # Images, videos, etc.
├── src/
│   ├── components/         # React components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LoadingPage.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ui/             # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   │   ├── useLoading.ts
│   │   └── useTypewriter.ts
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   ├── pages/              # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── .env.example            # Environment variables template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samerzaa/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   RECIPIENT_EMAIL=example@gmail.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8081` or 8080

## 📧 Contact Form Setup

### Gmail App Password

To enable the contact form, you need a Gmail App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select **Mail** and **Other (Custom name)**
5. Enter "Portfolio Contact Form"
6. Click **Generate** and copy the 16-character password
7. Use this password as `SMTP_PASS` in your `.env` file

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | Your email address | `your-email@gmail.com` |
| `SMTP_PASS` | App password (16 characters) | `abcd efgh ijkl mnop` |
| `RECIPIENT_EMAIL` | Where to send contact form emails | `example@gmail.com` |

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Environment Variables in Vercel**
   - Go to **Settings** → **Environment Variables**
   - Add all variables from `.env.example`
   - Redeploy after adding variables

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Add environment variables** in Netlify dashboard
4. **Deploy**

### Other Platforms

The project can be deployed on any platform that supports:
- Node.js 22.x
- Static site hosting
- Serverless functions (for contact form)

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 8081 |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  'gray-dark': '#1a1a1a',
  'gray-medium': '#2a2a2a',
  'gray-light': '#e5e7eb',
  // Add your custom colors
}
```

### Content

- **Personal Information**: Update `src/components/HeroSection.tsx`
- **About Section**: Edit `src/components/AboutSection.tsx`
- **Projects**: Modify `src/components/ProjectsSection.tsx`
- **Skills**: Update `src/components/SkillsSection.tsx`
- **Contact Info**: Change `src/components/ContactSection.tsx`

### Images & Assets

Replace files in `public/assets/`:
- `hero-image.webp` - Profile image
- `seo.webm` - About section video
- `load.webm` - Loading animation
- `portfolio.webp`, `craft.webp` - Project images

## 🔒 Security Features

- **Honeypot Field**: Hidden field that bots fill but humans don't see
- **Input Validation**: Client and server-side validation
- **Email Sanitization**: Prevents email injection attacks
- **CORS Protection**: API endpoints are protected
- **Environment Variables**: Sensitive data stored securely

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Samer Magtouf**

- Portfolio: [https://portfolio-samerza.vercel.app](https://portfolio-samerza.vercel.app)
- GitHub: [@samerzaa](https://github.com/samerzaa)
- Email: samereya428@gmail.com

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide](https://lucide.dev/) for icons
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Support

If you have any questions or suggestions, feel free to:
- Open an issue on GitHub
- Contact via email: samereya428@gmail.com
- Connect on social media

---

⭐ **Star this repo if you find it helpful!**

