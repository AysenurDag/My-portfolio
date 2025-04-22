import React from "react";
import "./HomePage.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

/* components */
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
/* Assets */
import DarkLogo from "../../assets/Mode=Dark.png";
import LightLogo from "../../assets/Mode=Light.png";
import AboutIcon from "../../assets/AboutIcon.png";
import NotebookIcon from "../../assets/Notebook.png";
import BookshelfIcon from "../../assets/Group-1984.png";
import TechStackIcon from "../../assets/TechStackIcon.png";
import ButtonIcon from "../../assets/ButtonIcon.png";
import PortfolioImage from "../../assets/PortfolioImage.png";
import KeyloggerImage from "../../assets/KeyloggerImage.png";
import KeyloggerLogo from "../../assets/KeyloggerLogo.png";

const HomePage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="main-section">
        <div className="content-wrapper">
          <div className="text-section">
            <h1 className="title">
              <span>I'm </span>
              <span className="highlight">Ayşenur Dağ</span>
            </h1>
            <p className="subtitle">
              Proficient in developing B2B platforms using React and TypeScript,
              and skilled in managing application state with Redux. Also
              experienced in full-stack development, including creating and
              integrating .NET APIs using C# and SQL. Eager to contribute to
              real-world software projects through a clean, scalable, and
              user-centered development approach.
            </p>
            <div className="button-group">
              <button
                className="button"
                onClick={() =>
                  window.open(
                    `${process.env.PUBLIC_URL}/AyşenurDağCVWP.pdf`,
                    "_blank"
                  )
                }
              >
                See my resume
              </button>

              <button
                className="button"
                onClick={() =>
                  (window.location.href = "mailto:1aysenurdag@gmail.com")
                }
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className="image-container">
            <img
              src={darkMode ? DarkLogo : LightLogo}
              alt="Mode Logo"
              className="mode-logo"
            />
          </div>
        </div>
      </main>

      <section className="selected-work">
        <h2>Selected Work</h2>
        <div className="card-wrapper">
          <Card
            logoUrl={KeyloggerLogo}
            title="InkSpy — Python-based KeyLogger for PDF Embedding"
            description="As part of my Information System Security coursework, I developed a keylogger using Python that can be embedded within a PDF file. This script records keystrokes in the background and sends them to a predefined attacker email address. The project demonstrates real-world cybersecurity threats, including social engineering and data exfiltration techniques."
            imageUrl={KeyloggerImage}
            link="https://example.com"
            buttonLabel="Learn More"
            orientation="horizontal-image-right"
          />

          <Card
            title="Personal Portfolio Website"
            description="I built a responsive portfolio site using React and TypeScript. The project is component-based and includes dynamic features powered by Redux for theme state management. It features reusable Card, Navbar, and Footer components, and supports both dark and light modes."
            imageUrl={PortfolioImage}
            link="https://example.com"
            buttonLabel="Learn More"
            orientation="horizontal-image-right"
          />
        </div>
      </section>

      <section className="get-to-know-me">
        <h2>Get to know me</h2>
        <div className="cards-grid-hp">
          <Card
            title="About me"
            description="Who I am and what I do"
            imageUrl={AboutIcon}
          />
          <Card
            title="Notebook"
            description="My thoughts, insights, and reflections"
            imageUrl={NotebookIcon}
          />
          <Card
            title="Bookshelf"
            description="Books and pieces of wisdom I've enjoyed reading"
            imageUrl={BookshelfIcon}
          />
          <Card
            title="Tech Stack"
            description="The dev tools, apps, devices, and games I use and play."
            imageUrl={TechStackIcon}
          />
        </div>
      </section>

      <section className="lets-work-together">
        <div>
          <h2>Let's work together</h2>
          <p>
            Want to discuss an opportunity to create something great? I'm ready
            when you are.
          </p>
        </div>
        <div className="get-in-touch-container">
          <button
            className="get-in-touch"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:1aysenurdag@gmail.com";
            }}
          >
            <img
              src={ButtonIcon}
              alt="Get in touch icon"
              className="button-icon"
            />
            Get in touch
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
