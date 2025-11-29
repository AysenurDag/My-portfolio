import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./WorkPage.css";

/* importing assets */
import Stars from "../../assets/Stars.png";
import ButtonIcon from "../../assets/ButtonIcon.png";
import EnerjisaLogo from "../../assets/enerjisa.png";
import LuportalImage from "../../assets/luportal.jpeg";
import KayaboyaUygulamaImage from "../../assets/Kayaboyauygulama.jpg";

const WorkPage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`work-container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="work-main-section">
        <div className="work-content">
          <h1>Projects</h1>
          <p>Projects and ideas I've worked on</p>
        </div>
        <div className="separator"></div>

        <section className="projects">
          <div className="projects-wrapper">
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
              title="Kaya Boya Uygulama - Professional Painting Services Website"
              description="A modern, SEO-optimized business website for a professional painting company in Antalya, Turkey. Built with Next.js 15, React 19, and TypeScript, featuring a responsive design with Tailwind CSS, dynamic image/video gallery with lightbox functionality, WhatsApp integration for instant customer contact, and comprehensive SEO implementation including sitemap generation, Open Graph tags, and JSON-LD structured data (LocalBusiness schema) for local search visibility."
              imageUrl={KayaboyaUygulamaImage}
              link="https://www.kayaboyauygulama.com"
              buttonLabel="Visit Website"
              orientation="horizontal-image-right"
            />
          </div>
        </section>

        <section className="your-project">
          <img src={Stars} alt="Stars" className="stars-icon" />
          <h2>Your Project Goes Here</h2>
          <p>Let's turn your idea into a visual reality</p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;
