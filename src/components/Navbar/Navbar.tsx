import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import "./Navbar.css";
const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        𝓐
      </Link>

      <ul className="menu">
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/work">Work</Link>
        </li>
        <li className="menu-item">
          <Link to="/notebook">Notebook</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
        <div className="dropdown">
          <li className="menu-item">More ▾</li>
          <div className="dropdown-content">
            <div className="dropdown-item">
              <Link to="/bookshelf">Bookshelf</Link>
            </div>
            <div className="dropdown-item">
              <Link to="/tech-stack">Tech Stack</Link>
            </div>
          </div>
        </div>
      </ul>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/ay%C5%9Fenur-da%C4%9F-169a271b8/"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AysenurDag"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <span onClick={handleThemeToggle} className="icon theme-toggle">
          <BsSun />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
