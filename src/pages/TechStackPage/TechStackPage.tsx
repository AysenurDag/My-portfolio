import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./TechStackPage.css";

// Importing assets
import FigmaIcon from "../../assets/figmaIcon.png";
import GithubIcon from "../../assets/Github.png";
import VsCodeIcon from "../../assets/VsCode.png";
import TypeScript from "../../assets/TypeScript.png";
import ReactQuery from "../../assets/ReactQuery.png";
import Duolingo from "../../assets/Duolingo.png";
import ChatGPT from "../../assets/ChatGPT.png";
import Chrome from "../../assets/Chrome.png";
import AppleMusic from "../../assets/AppleMusic.png";

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
                imageUrl={GithubIcon}
                title="Github"
                description="Version Control"
              />
              <Card
                imageUrl={VsCodeIcon}
                title="VS Code"
                description="Editor"
              />
              <Card
                imageUrl={TypeScript}
                title="TypeScript"
                description="Language"
              />
              <Card
                imageUrl={ReactQuery}
                title="React Query"
                description="Server State "
              />
            </div>
          </section>

          <section className="tech-cards">
            <h2>Apps</h2>
            <div className="cards-grid-tsp">
              <Card
                imageUrl={Duolingo}
                title="Duolingo"
                description="Education"
              />
              <Card
                imageUrl={ChatGPT}
                title="ChatGPT"
                description="Productivity"
              />
              <Card imageUrl={Chrome} title="Chrome" description="Browser" />
              <Card
                imageUrl={AppleMusic}
                title="Apple Music"
                description="Music"
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
