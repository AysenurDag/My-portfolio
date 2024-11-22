import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import NotebookPage from "./pages/NotebookPage/NotebookPage";
import TechStackPage from "./pages/TechStackPage/TechStackPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/notebook" element={<NotebookPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
      </Routes>
    </Router>
  );
};

export default App;
