import "../Styles/HomePage.css";
import NavBar from "./Components/NavBar";

export default function HomePage() {
  return (
    <div className="HomePage-wrapper">
      <NavBar />

      <main className="HomePage-mainContainer">
        <h2 className="HomePage-mainContainer-title HomePage-mainContainer-title1">Welcome to Math Magicians <span className="star-icon">✨</span>!</h2>

        <section className="HomePage-mainContainer-description">
          <p className="HomePagedesc-p HomePagedesc-p1">
            <strong>Math Magicians</strong> is a modern, interactive website designed for all fans of mathematics. 
            This Single Page Application (SPA) is built with React and offers a seamless and engaging user experience.
          </p>

          <h3 className="HomePagedesc-title HomePagedesc-title2">Features</h3>
          <ul className="HomePagedesc-lists HomePagedesc-lists1">
            <li className="HomePagedesc-lists-list">
              <strong>Calculator </strong> – Perform basic arithmetic operations like addition, subtraction, 
              multiplication, and division with an intuitive, easy-to-use interface.
            </li>
            <li className="HomePagedesc-lists-list">
              <strong>Random Math Quotes </strong> – Discover inspiring and thought-provoking math-related quotes 
              that refresh every time you visit the page.
            </li>
            <li className="HomePagedesc-lists-list">
              <strong>Single Page Navigation </strong> – Move between different sections of the site without page 
              reloads, thanks to smooth SPA navigation.
            </li>
          </ul>

          <h3 className="HomePagedesc-title HomePagedesc-title3">Purpose</h3>
          <p className="HomePagedesc-p HomePagedesc-p2">
            The project demonstrates how to build a React-based web app using:
          </p>
          <ul className="HomePagedesc-lists HomePagedesc-lists2">
            <li className="HomePagedesc-lists-list">Component-based architecture</li>
            <li className="HomePagedesc-lists-list">State management for interactive features</li>
            <li className="HomePagedesc-lists-list">Styling with CSS and SCSS</li>
            <li className="HomePagedesc-lists-list">SPA routing for seamless navigation</li>
          </ul>

          <h3 className="HomePagedesc-title HomePagedesc-title4">Why Math Magicians?</h3>
          <p className="HomePagedesc-p HomePagedesc-p3"> 
            This app is perfect for anyone who loves mathematics and wants a simple tool to perform calculations 
            while enjoying motivational math quotes. It also serves as a learning project to practice React, modern 
            JavaScript, and web development best practices.
          </p>
        </section>
      </main>
    </div>
  );
}
