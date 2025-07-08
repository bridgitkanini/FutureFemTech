// src/routes/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LandingPage from "../pages/LandingPage/LandingPage";
import Navbar from "../components/Navbar";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Footer from "../components/Footer";
import CareersPage from "../pages/CareersPage/CareersPage";
import MentorshipPage from "../pages/MentorshipPage/MentorshipPage";
import ScholarshipsPage from "../pages/ScholarshipsPage/ScholarshipsPage";
import CareerForm from "../pages/CareerForm/CareerForm";

const AppRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/career-form" element={<CareerForm />} />
            <Route
              path="/career-path/:suitableCareerPath"
              element={<CareersPage />}
            />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default AppRoutes;
