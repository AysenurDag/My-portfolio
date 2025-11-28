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
import EnerjisaLogo from "../../assets/enerjisa.png";
import LuportalImage from "../../assets/luportal.jpeg";

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
              A Software Developer graduated from Akdeniz University's English
              Computer Engineering department, specializing in C# and .NET
              technologies. Currently working on the Enerjisa project at Atolla
              Tech, where they joined in September. Has practical experience in
              ABP Framework, PostgreSQL/PgAdmin, and Visual Studio environments.
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
            logoUrl={EnerjisaLogo}
            title="LuPortal - Lisanssız Üreticiler Portalı"
            description="LuPortal is a critical, large-scale corporate application developed for the Enerjisa project at Atolla Tech, serving as the backend API for a producer portal. This project is built entirely on the ABP Framework and ASP.NET Core to ensure a robust and modular architecture. We utilized the standard ABP layered architecture—separating concerns into Domain, Application, and HttpApi layers—while employing C# and Visual Studio for implementation. Data management is handled via Entity Framework Core with PostgreSQL/PgAdmin, and the application is configured with Docker support for containerization and deployment flexibility."
            imageUrl={LuportalImage}
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
