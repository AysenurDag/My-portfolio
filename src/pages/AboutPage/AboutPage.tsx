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
              I'm Ayşenur Dağ, a multi-disciplinary front-end engineer and UI/UX
              designer based in Antalya.
            </p>
            <h2>WHAT I DO</h2>
            <p>
              With two years of invaluable experience in my role at Harmony
              Technology –– a tech company based here in Rabat, I have honed my
              skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing
              me to craft seamless and interactive user experiences. During my
              time at Harmony Technology, I had the privilege of collaborating
              on projects for esteemed clients such as the Ministry of Health,
              Ministry of Education, and Ministry of Justice. It was an
              incredibly rewarding experience to develop applications that
              directly impact the lives of Moroccan citizens.
            </p>
            <h2>WHAT I DID</h2>
            <p>
              Before delving into the realm of front end engineering, I spent
              five years as a graphic designer. This background has equipped me
              with a keen eye for aesthetics and a deep understanding of
              user-centered design principles. It enables me to seamlessly blend
              functionality and visual appeal in every project I undertake.
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
