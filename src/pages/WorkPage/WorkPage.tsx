import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./WorkPage.css";

/* importing assets */
import CardImage1 from "../../assets/SubiiLogo.png";
import CardImage2 from "../../assets/ReactIcon.png";
import CardImage3 from "../../assets/PinkIcon.png";
import CardImage4 from "../../assets/ParrotxtLogo.png";
import PhoneImage from "../../assets/ProjectImage1.png";
import IpadImage from "../../assets/IpadPro.png";
import PcImage from "../../assets/screenShoot.png";
import TextImage from "../../assets/TextImage.png";
import Stars from "../../assets/Stars.png";
import ButtonIcon from "../../assets/ButtonIcon.png";
import PortfolioImage from "../../assets/PortfolioImage.png";
import PortfolioLogo from "../../assets/PortfolioLogo.png";
import KeyloggerImage from "../../assets/KeyloggerImage.png";
import KeyloggerLogo from "../../assets/KeyloggerLogo.png";

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
              logoUrl={KeyloggerLogo}
              title="InkSpy — Python-based KeyLogger for PDF Embedding"
              description="As part of my Information System Security coursework, I developed a keylogger using Python that can be embedded within a PDF file. This script records keystrokes in the background and sends them to a predefined attacker email address. The project demonstrates real-world cybersecurity threats, including social engineering and data exfiltration techniques."
              imageUrl={KeyloggerImage}
              link="https://example.com"
              buttonLabel="Learn More"
              orientation="horizontal-image-right"
            />

            <Card
              logoUrl={PortfolioLogo}
              title="Personal Portfolio Website"
              description="I built a responsive portfolio site using React and TypeScript. The project is component-based and includes dynamic features powered by Redux for theme state management. It features reusable Card, Navbar, and Footer components, and supports both dark and light modes."
              imageUrl={PortfolioImage}
              link="https://example.com"
              buttonLabel="Learn More"
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
