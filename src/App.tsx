import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import NotebookPage from "./pages/NotebookPage/NotebookPage";
import TechStackPage from "./pages/TechStackPage/TechStackPage";
import BookShelfPage from "./pages/BookShelfPage/BookShelfPage";
import NotebookDetailsPage from "./pages/NotebookPage/NotebookDetailsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import BottomNav from "./components/BottomNav/BottomNav";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/notebook" element={<NotebookPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/bookshelf" element={<BookShelfPage />} />
        <Route path="/notebook-details" element={<NotebookDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <BottomNav />
    </Router>
  );
};

export default App;
