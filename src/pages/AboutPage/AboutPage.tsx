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
              I'm Ayşenur Dağ, a passionate front-end developer and UI/UX
              enthusiast based in Antalya, Turkey. I also have hands-on
              experience with back-end technologies such as .NET, C#, and Azure
              Functions, enabling me to contribute effectively across the full
              stack.
            </p>
            <h2>WHAT I DO</h2>
            <p>
              With hands-on experience in building B2B applications, I
              specialize in developing user-focused interfaces using React,
              TypeScript, TailwindCSS, and Redux for efficient state management.
              During my internship , I contributed to an energy reporting
              project for Turkey’s leading electricity distribution companies. I
              developed front-end features with React and implemented back-end
              functionality using .NET 8, Azure Functions, and SQL integrations.
            </p>
            <h2>WHAT I DID</h2>
            <p>
              contributed to an enterprise-level energy reporting project where
              I was responsible for both the frontend (React, TypeScript) and
              backend (.NET 8, Azure Functions, SQL) development. This
              experience gave me the opportunity to apply what I’ve learned in
              real-world scenarios and to collaborate in a professional
              engineering environment.
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
