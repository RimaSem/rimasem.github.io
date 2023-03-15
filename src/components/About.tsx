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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
          eligendi, odit commodi, quo totam tempora laboriosam unde eos beatae
          tenetur perferendis temporibus a! Necessitatibus consequuntur tenetur
          quaerat facilis dicta tempora.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
          necessitatibus optio fugiat aspernatur recusandae dolore nisi pariatur
          expedita quis maxime mollitia nulla officiis iste earum nobis eaque
          omnis laudantium, aperiam id perspiciatis! Exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam
          soluta adipisci molestias atque aliquid tempora nemo quibusdam
          inventore vel ullam debitis tempore nisi quisquam consequatur velit
          veniam harum, aperiam corporis fuga! Doloribus minus aperiam nostrum
          voluptatem, veritatis ipsum esse neque commodi?
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
