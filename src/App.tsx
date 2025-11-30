import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import TechStackPage from "./pages/TechStackPage/TechStackPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import BottomNav from "./components/BottomNav/BottomNav";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <BottomNav />
    </Router>
  );
};

export default App;
