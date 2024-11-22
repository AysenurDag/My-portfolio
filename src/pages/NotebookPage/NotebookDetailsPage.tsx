import React from "react";
import "./NotebookDetailsPage.css"; // Stil dosyanı da ekle
import RouterImage from "../../assets/RouterImage.png"; // Görselin dosya yolu

const AppRouterGuide: React.FC = () => {
  return (
    <div className="notebook-details">
      <h1>Ultimate guide to the App Router in Next.js 13</h1>
      <p>17th Jul 2023 — 7 min read</p>
      <img
        src={RouterImage}
        alt="notebook-details"
        className="notebook-details-image"
      />
      <p>
        The App Router in Next.js is responsible for handling client-side
        routing within your application. It provides a declarative and intuitive
        way to define routes, handle navigation, and manage dynamic URLs. Here
        are some key features of the Next.js App Router:
      </p>
      <h2>1. File-based Routing</h2>
      <p>
        Next.js uses a file-based routing system, where each page of your
        application is represented by a file in the "pages" directory...
      </p>
      {/* Diğer başlık ve paragrafları ekleyerek devam et */}
    </div>
  );
};

export default AppRouterGuide;
