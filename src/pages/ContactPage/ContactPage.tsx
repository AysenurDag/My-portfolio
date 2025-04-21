import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`contact-container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="contact-main">
        <div className="contact-header">
          <h1>Get in touch</h1>
          <p>Let's build something awesome.</p>
        </div>
        <div className="separator"></div>
        <div className="email-form">
          <div className="form-header">
            <div className="form-indicators">
              <span className="indicator red"></span>
              <span className="indicator yellow"></span>
              <span className="indicator green"></span>
            </div>
            <div className="message-header">New message</div>
          </div>
          <div className="separator"></div>
          <form className="form-body">
            <label>
              <span>Email:</span>
              <input type="email" placeholder="Enter your email address" />
            </label>

            <label>
              <span>Name:</span>
              <input type="text" placeholder="Enter your name" />
            </label>

            <label>
              <span>Subject:</span>
              <input type="text" placeholder="Enter subject" />
            </label>
            <label>
              <textarea placeholder="Write your message here"></textarea>
            </label>

            <button type="submit">Send</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
