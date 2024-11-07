// src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LandingPage from '../pages/LandingPage/LandingPage';
import Navbar from '../components/Navbar';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Footer from '../components/Footer';
import CareersPage from '../pages/CareersPage/CareersPage';
import MentorshipPage from '../pages/MentorshipPage/MentorshipPage';
import ScholarshipsPage from '../pages/ScholarshipsPage/ScholarshipsPage';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/mentorship" element={<MentorshipPage />} />
                <Route path="/scholarships" element={<ScholarshipsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;
