import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./NotebookPage.css";
import CardImage from "../../assets/NotebookImage.png";

const NotebookPage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <div
      className={`notebook-container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="notebook-main-section">
        <div className="notebook-content">
          <h1>Notebook</h1>
          <p>My thoughts, insights, and reflections.</p>
        </div>
        <div className="separator"></div>

        <section className="notebook-cards">
          <div className="cards-grid-nb">
            <Card
              imageUrl={CardImage}
              title="Ultimate guide to the App Router in Next.js 13"
              description="17th Jul 2023 — 7 min read"
            />
            <Card
              imageUrl={CardImage}
              title="Ultimate guide to the App Router in Next.js 13"
              description="17th Jul 2023 — 7 min read"
            />
            <Card
              imageUrl={CardImage}
              title="Ultimate guide to the App Router in Next.js 13"
              description="17th Jul 2023 — 7 min read"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotebookPage;
