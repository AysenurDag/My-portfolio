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
import CardImage1 from "../../assets/SubiiLogo.png";
import CardImage2 from "../../assets/ReactIcon.png";
import CardImage3 from "../../assets/PinkIcon.png";
import PhoneImage from "../../assets/ProjectImage1.png";
import IpadImage from "../../assets/IpadPro.png";
import PcImage from "../../assets/screenShoot.png";
import AboutIcon from "../../assets/AboutIcon.png";
import NotebookIcon from "../../assets/Notebook.png";
import BookshelfIcon from "../../assets/Group-1984.png";
import TechStackIcon from "../../assets/TechStackIcon.png";
import ButtonIcon from "../../assets/ButtonIcon.png";

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
              Experienced in writing B2B applications using React, experienced
              in using state management tools such as Redux, and also has
              experience in end-to-end application development by writing .NET
              apis at a basic level. A young dynamic software engineer student
              with experience on modern applications.
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
            logoUrl={CardImage1}
            title="Subbi — The free subscriptions manager"
            description="Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the 'accidental' bill after a 14-day trial ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more."
            imageUrl={PhoneImage}
            link="https://example.com"
            buttonLabel="Download App"
            orientation="horizontal-image-right"
          />
          <Card
            logoUrl={CardImage2}
            title="React Documentation"
            description="With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers."
            imageUrl={IpadImage}
            link="https://example.com"
            buttonLabel="Learn More"
            orientation="horizontal-image-right"
          />
          <Card
            logoUrl={CardImage3}
            title="Storybook Documentation"
            description="This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available."
            imageUrl={PcImage}
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
