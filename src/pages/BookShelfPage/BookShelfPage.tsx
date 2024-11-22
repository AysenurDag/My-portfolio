import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./BookShelfPage.css";

// Import book images
import Book1 from "../../assets/Book1.png";
import Book2 from "../../assets/Book2.png";
import Book3 from "../../assets/Book3.png";
import Book4 from "../../assets/Book4.png";
import Book5 from "../../assets/Book5.png";
import Book6 from "../../assets/Book6.png";
import Book7 from "../../assets/Book7.png";
import Book8 from "../../assets/Book8.png";

const BookShelfPage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`bookshelf-container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="bookshelf-main-section">
        <div className="bookshelf-header">
          <h1>Bookshelf</h1>
          <p>Books and pieces of wisdom I’ve enjoyed reading.</p>
        </div>
        <div className="separator"></div>
        <div className="bookshelf-grid">
          <Card imageUrl={Book1} />
          <Card imageUrl={Book2} />
          <Card imageUrl={Book3} />
          <Card imageUrl={Book4} />
          <Card imageUrl={Book5} />
          <Card imageUrl={Book6} />
          <Card imageUrl={Book7} />
          <Card imageUrl={Book8} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookShelfPage;
