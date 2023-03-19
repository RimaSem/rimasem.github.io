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
          I am a self-taught front-end web developer with a passion for creating
          visually appealing, user-friendly, and efficient websites. My interest
          in programming began as a hobby, which quickly turned into an
          aspiration to pursue web development as a career. I am constantly
          learning new things, expanding my skill set, and exploring different
          technologies.
        </p>
        <p>
          Google ninja – my ability to quickly dig out information from the
          deepest corners of the internet is basically my superpower at this
          point. Whether it's a specific code snippet, documentation, a video,
          or a meme - if it's somewhere out there on the interwebs, I will find
          it!
        </p>
        <p>
          Positive mindset enthusiast – I tend to focus on the good in any given
          situation, and approach challenges or awkward situations in an
          optimistic and productive way.
        </p>
        <p>
          Time management whizz – properly planning things out ahead of time is
          a lifestyle for me. I am pretty anal about being punctual, creating
          todo-lists and schedules for myself, as well as finishing my tasks
          within the set deadlines.
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
