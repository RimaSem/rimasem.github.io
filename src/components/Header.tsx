import "./scss/Header.scss";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Header() {
  const hamburgerIconRef = useRef<HTMLDivElement>(null);
  const slidingMenuRef = useRef<HTMLDivElement>(null);

  function displayMenu() {
    hamburgerIconRef.current?.classList.toggle("active");
    slidingMenuRef.current?.classList.toggle("active");
  }

  return (
    <header>
      <div className="header-container">
        <h3>
          {"<Rima "}
          <span className="surname-span">Šemetaitė </span>
          {"/>"}
        </h3>
        <div ref={slidingMenuRef} className="sliding-menu"></div>
        <div
          ref={hamburgerIconRef}
          className="hamburger-icon"
          onClick={displayMenu}
        >
          <div className="ham-bar bar-top"></div>
          <div className="ham-bar bar-mid"></div>
          <div className="ham-bar bar-bottom"></div>
        </div>
        <nav className="wide-screen-nav">
          <a id="about-link" href="#">
            About
          </a>
          <a id="projects-link" href="#">
            Projects
          </a>
          <a id="contact-link" href="#">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
