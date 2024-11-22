import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./NotebookDetailsPage.css";
import NotebookDetailsImage from "../../assets/Notebookdetailspage.png";

const NotebookDetailsPage: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`notebook-details-container ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="background-top" />
      <div className="background-bottom" />
      <Navbar />
      <main className="notebook-details-main">
        <h1>Ultimate guide to the App Router in Next.js 13</h1>
        <p>17th Jul 2023 — 7 min read</p>
        <div>
          <img
            src={NotebookDetailsImage}
            alt="Notebook Details"
            style={{
              width: "100%",
              maxWidth: "1024px",
              height: "504px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="notebook-details-content">
          <p>
            The App Router in Next.js is responsible for handling client-side
            routing within your application. It provides a declarative and
            intuitive way to define routes, handle navigation, and manage
            dynamic URLs. Here are some key features of the Next.js App Router:
          </p>
          <ol>
            <li>
              <strong>File-based Routing:</strong> Next.js uses a file-based
              routing system, where each page of your application is represented
              by a file in the "pages" directory. The name of the file
              determines the corresponding URL path. For example, a file named
              "about.js" in the "pages" directory will be accessible at the
              "/about" URL path.
            </li>
            <li>
              <strong>Dynamic Routes:</strong> Next.js allows you to create
              dynamic routes by using brackets ([ ]) in the file name or
              directory structure. For example, a file named "[id].js" can match
              routes like "/posts/1" or "/users/john". The dynamic segments are
              accessible as parameters in the page component and can be used to
              fetch data or customize the content.
            </li>
            <li>
              <strong>Link Component:</strong> Next.js provides the{" "}
              <code>&lt;Link&gt;</code> component, which enables client-side
              navigation between pages. It ensures that the page transition is
              handled gracefully, without full page reloads. You can use the{" "}
              <code>&lt;Link&gt;</code> component to create anchor tags (
              <code>&lt;a&gt;</code>) with client-side routing behavior.
            </li>
            <li>
              <strong>Programmatic Navigation:</strong> Next.js also offers
              programmatic navigation through the <code>useRouter</code> hook.
              It allows you to access the router object, which provides methods
              like
              <code>push()</code>, <code>replace()</code>, and{" "}
              <code>back()</code> to navigate programmatically within your
              application.
            </li>
            <li>
              <strong>Code Splitting:</strong> Next.js automatically performs
              code splitting, which means that only the JavaScript and CSS
              needed for the current page are loaded. This helps optimize the
              initial page load time and improves performance.
            </li>
          </ol>
          <p>
            These are some of the fundamental features and concepts of the App
            Router in Next.js. However, it's important to note that newer
            versions of Next.js may introduce additional enhancements or changes
            to the App Router. To stay updated on the latest features and
            changes, I recommend referring to the official Next.js documentation
            or the Next.js GitHub repository.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotebookDetailsPage;
