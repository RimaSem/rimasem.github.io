import "./scss/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h3>{"<Rima Šemetaitė />"}</h3>
        <nav>
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
