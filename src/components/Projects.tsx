import "./scss/Projects.scss";
import ShopImg from "../img/plant-shop.jpg";
import TodoImg from "../img/todo-list.jpg";
import WeatherImg from "../img/weather-app.jpg";
import MemoryGameImg from "../img/memory-game.jpg";
import QuizzicalImg from "../img/quizzical.jpg";
import CVBuilderImg from "../img/cv-builder.jpg";

function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h1>PROJECTS</h1>
      <div className="project-wrapper">
        <div className="project">
          <p>Mock E-Shop</p>
          <img src={ShopImg} alt="e-shop project" />
          <div className="link-wrapper">
            <a href="https://rimasem.github.io/plant-shop/" target="_blank">
              Demo
            </a>
            <a href="https://github.com/RimaSem/plant-shop/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="project">
          <p>To-Do App</p>
          <img src={TodoImg} alt="to-do app" />
          <div className="link-wrapper">
            <a href="https://rimasem.github.io/todo-list/" target="_blank">
              Demo
            </a>
            <a href="https://github.com/RimaSem/todo-list/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="project">
          <p>Weather App</p>
          <img src={WeatherImg} alt="weather app" />
          <div className="link-wrapper">
            <a
              href="https://rimasem.github.io/react-weather-app/"
              target="_blank"
            >
              Demo
            </a>
            <a
              href="https://github.com/RimaSem/react-weather-app/"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project">
          <p>Memory Game</p>
          <img src={MemoryGameImg} alt="memory game" />
          <div className="link-wrapper">
            <a href="https://rimasem.github.io/memory-game/" target="_blank">
              Demo
            </a>
            <a href="https://github.com/RimaSem/memory-game/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="project">
          <p>Quiz App</p>
          <img src={QuizzicalImg} alt="quiz app" />
          <div className="link-wrapper">
            <a href="https://rimasem.github.io/quizzical/" target="_blank">
              Demo
            </a>
            <a href="https://github.com/RimaSem/quizzical/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="project">
          <p>CV Builder</p>
          <img src={CVBuilderImg} alt="cv builder" />
          <div className="link-wrapper">
            <a href="https://rimasem.github.io/cv-app/" target="_blank">
              Demo
            </a>
            <a href="https://github.com/RimaSem/cv-app/" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
