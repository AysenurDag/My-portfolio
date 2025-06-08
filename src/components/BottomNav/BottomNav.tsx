// components/BottomNav/BottomNav.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaPen,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import "./BottomNav.css";

const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <FaHome />
      </Link>
      <Link
        to="/about"
        className={location.pathname === "/about" ? "active" : ""}
      >
        <FaUser />
      </Link>
      <Link
        to="/work"
        className={location.pathname === "/work" ? "active" : ""}
      >
        <FaBriefcase />
      </Link>
      <Link
        to="/notebook"
        className={location.pathname === "/notebook" ? "active" : ""}
      >
        <FaPen />
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        <FaEnvelope />
      </Link>
      <Link
        to="/bookshelf"
        className={location.pathname === "/bookshelf" ? "active" : ""}
      >
        <FaBars />
      </Link>
    </nav>
  );
};

export default BottomNav;
