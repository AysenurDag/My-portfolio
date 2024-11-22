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
              logoUrl={CardImage1}
              title="Subbi — The free subscriptions manager"
              description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the 'accidental' bill after a 14-day trial ends."
              imageUrl={PhoneImage}
              link="https://example.com"
            />
            <Card
              logoUrl={CardImage2}
              title="React Documentation"
              description="With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers."
              imageUrl={IpadImage}
              link="https://example.com"
            />
            <Card
              logoUrl={CardImage3}
              title="Storybook Documentation"
              description="This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available."
              imageUrl={PcImage}
              link="https://example.com"
            />
            <Card
              logoUrl={CardImage4}
              title="Parrotxt"
              description="Lorem Ipsum is not professional, use Parrotxt to generate real text for your design. This was my first product I launched on Product Hunt."
              imageUrl={TextImage}
              link="https://example.com"
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
