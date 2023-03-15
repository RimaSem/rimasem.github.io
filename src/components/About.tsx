import "./scss/About.scss";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about-container">
      <div className="hidden about-wrapper">
        <h1>ABOUT ME</h1>
        <p>
          I’m a Frontend Developer based in Marrakech, Who likes to provide
          solutions for people's projects and businesses which it is a challenge
          that I enjoy overcoming.
        </p>
        <p>
          I am a passionate person who pursues his dreams, who works hard and
          who is results oriented. As a matter of fact, I constantly work on
          improving myself seeking to achieve the best version of myself.
        </p>
        <p>
          I build websites using HTML, CSS, JavaScript, and a other frameworks
          and libraries. I spend most days learning and building up, either
          start it from scratch or adding some customized features and
          functionality for outdated websites to make them shine again.
        </p>
      </div>
      <div className="hidden skills-wrapper">
        <h1>SKILLS</h1>
        <div className="all-skills">
          <div className="col">
            <div className="skill">
              <img src="TypeScript.svg" alt="typescript" />
              <span>TypeScript</span>
            </div>
            <div className="skill">
              <img src="React-Dark.svg" alt="react" />
              <span>React</span>
            </div>
            <div className="skill">
              <img src="HTML.svg" alt="html" />
              <span>HTML</span>
            </div>
            <div className="skill">
              <img src="Vite-Dark.svg" alt="vite" />
              <span>Vite</span>
            </div>
            <div className="skill">
              <img src="Github-Dark.svg" alt="github" />
              <span>GitHub</span>
            </div>
          </div>

          <div className="col">
            <div className="skill">
              <img src="JavaScript.svg" alt="javascript" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img src="CSS.svg" alt="css" />
              <span>CSS</span>
            </div>
            <div className="skill">
              <img src="Sass.svg" alt="sass" />
              <span>SASS/SCSS</span>
            </div>
            <div className="skill">
              <img src="Git.svg" alt="git" />
              <span>Git</span>
            </div>
            <div className="skill">
              <img src="VSCode-Dark.svg" alt="vs code" />
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
