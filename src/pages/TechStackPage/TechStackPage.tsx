import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./TechStackPage.css";

// Importing assets
import FigmaIcon from "../../assets/AboutIcon.png";
import NextJsIcon from "../../assets/ButtonIcon.png";
import TailwindIcon from "../../assets/PinkIcon.png";

const TechStackPage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`tech-stack-container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="tech-stack-main-section">
        <div className="techstack-content">
          <h1>Tech Stack</h1>
          <p>The dev tools, apps, and devices I use.</p>
        </div>
        <div className="separator"></div>

        <div className="tech-cards-container">
          <section className="tech-cards">
            <h2>Dev & Design</h2>
            <div className="cards-grid-tsp">
              <Card imageUrl={FigmaIcon} title="Figma" description="Design" />
              <Card
                imageUrl={NextJsIcon}
                title="Next.js"
                description="Web Framework"
              />
              <Card
                imageUrl={TailwindIcon}
                title="TailwindCSS"
                description="CSS"
              />
            </div>
          </section>

          <section className="tech-cards">
            <h2>Apps</h2>
            <div className="cards-grid-tsp">
              <Card imageUrl={FigmaIcon} title="Figma" description="Design" />
              <Card
                imageUrl={NextJsIcon}
                title="Next.js"
                description="Web Framework"
              />
              <Card
                imageUrl={TailwindIcon}
                title="TailwindCSS"
                description="CSS"
              />
            </div>
          </section>

          <section className="tech-cards">
            <h2>Hardware</h2>
            <div className="cards-grid-tsp">
              <Card imageUrl={FigmaIcon} title="Figma" description="Design" />
              <Card
                imageUrl={NextJsIcon}
                title="Next.js"
                description="Web Framework"
              />
              <Card
                imageUrl={TailwindIcon}
                title="TailwindCSS"
                description="CSS"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechStackPage;
