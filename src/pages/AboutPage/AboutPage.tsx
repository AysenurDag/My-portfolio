import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AboutPage.css";
import SignatureLight from "../../assets/signature.png";
import SignatureDark from "../../assets/signatureDark.png";
import AboutImage from "../../assets/AboutImage.png";

const AboutPage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`about-container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="about-main-section">
        <div className="about-content">
          <h1>A little bit about me</h1>
          <p>Who I am and what I do.</p>
        </div>
        <div className="separator"></div>

        <div className="about-description">
          <div className="about-text">
            <h2>WHO I AM</h2>
            <p>
              I'm Ayşenur Dağ, a Junior Software Engineer with a degree in
              English Computer Engineering from Akdeniz University. My primary
              focus is on robust backend development, specializing in the C#
              and .NET ecosystem. I currently work at Atolla Tech and possess
              hands-on experience in full-stack contribution, including
              front-end technologies like React and TypeScript.
            </p>
            <h2>WHAT I DO</h2>
            <p>
              I actively contribute to the large-scale Enerjisa project, where I
              specialize in developing corporate applications and backend APIs
              using the ABP Framework. I manage data persistence with PostgreSQL
              and apply architectural principles like Domain Driven Design to
              ensure scalability. I am dedicated to writing clean, maintainable
              code and optimizing system performance, leveraging Visual Studio
              as my core development environment.
            </p>
            <h2>WHAT I DID</h2>
            <p>
              My professional experience began in September with Atolla Tech,
              where I was responsible for redeveloping existing APIs from
              scratch using modern .NET technologies. Prior to this, my project
              experience includes building a Hotel Booking System utilizing a
              Microservices architecture with Docker Compose and integrating
              authentication via Microsoft Entra ID (Azure AD), demonstrating my
              proficiency in enterprise-level system design.
            </p>
            <p>
              Feel free to reach out via e-mail, or follow me on Twitter. Want
              to see where I’ve worked? Check out my Resume, or Connect with me
              on LinkedIn.
            </p>
            <p>Let’s build something great,</p>
            <img
              src={darkMode ? SignatureDark : SignatureLight}
              alt="Signature"
              className="signature"
            />
          </div>
          <div className="about-image">
            <img src={AboutImage} alt="Rectangle" className="rectangle" />
            <button className="get-in-touch-button">Get in touch</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
