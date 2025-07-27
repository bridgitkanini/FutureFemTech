# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# FutureFemTech

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

FutureFemTech is a comprehensive platform designed to empower women in technology by providing career guidance, mentorship opportunities, and scholarship information. Built with modern web technologies, the platform offers an intuitive interface for users to explore various career paths in tech.

## 🚀 Features

- **Career Path Exploration**: Discover suitable career paths in technology
- **Mentorship Program**: Connect with experienced mentors in the tech industry
- **Scholarship Opportunities**: Find and apply for tech-related scholarships
- **User Authentication**: Secure sign-up and login functionality
- **Responsive Design**: Optimized for both desktop and mobile devices

## 🛠️ Technologies Used

### Frontend
- React 18
- React Router v6 for navigation
- TailwindCSS for styling
- Vite as the build tool
- Axios for API requests

### Backend
- Node.js with Express
- [Google's Gemini API](https://ai.google.dev/gemini-api) for AI-powered features
  - Integration via @google/generative-ai package
  - Powers intelligent recommendations and content generation
- CORS for cross-origin requests

### Development Tools
- ESLint for code linting
- PostCSS for CSS processing
- Prettier for code formatting
- pnpm as package manager

## 📁 Project Structure

```
FutureFemTech/
├── src/
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── components/      # Reusable UI components
│   │   ├── Navbar/      # Navigation bar component
│   │   └── Footer/      # Footer component
│   ├── pages/           # Page components
│   │   ├── HomePage/    # Main dashboard
│   │   ├── LandingPage/ # Landing page
│   │   ├── LoginPage/   # User login
│   │   ├── SignUpPage/  # User registration
│   │   ├── CareersPage/ # Career exploration
│   │   ├── CareerForm/  # Career assessment form
│   │   ├── MentorshipPage/ # Mentorship program
│   │   └── ScholarshipsPage/ # Scholarship opportunities
│   ├── router/          # Application routes
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── public/              # Public assets
├── api/                 # Backend API code
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v8 or later)
- Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bridgitkanini/FutureFemTech.git
   cd FutureFemTech
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your Google API key:
   ```
   VITE_GOOGLE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🛠 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm preview` - Preview the production build locally
- `pnpm lint` - Run ESLint to check for code issues

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/gemini-api)
