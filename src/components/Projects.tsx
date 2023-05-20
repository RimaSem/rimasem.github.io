import "./scss/Projects.scss";
import ShopImg from "../img/plant-shop.webp";
import TodoImg from "../img/todo-list.webp";
import WeatherImg from "../img/weather-app.webp";
import MemoryGameImg from "../img/memory-game.webp";
import QuizzicalImg from "../img/quizzical.webp";
import CVBuilderImg from "../img/cv-builder.webp";
import ColorImg from "../img/color-scheme-generator2.webp";
import DashboardImg from "../img/chrome-dashboard3.webp";
import CalcImg from "../img/calculator3.webp";
import Project from "./Project";

const Projects: React.FC = () => (
  <section className="projects-container" id="projects">
    <h1>PROJECTS</h1>
    <div className="project-wrapper">
      <Project name="Mock E-Shop" img={ShopImg} link="plant-shop" />
      <Project name="To-Do App" img={TodoImg} link="todo-list" />
      <Project
        name="Chrome Dashboard"
        img={DashboardImg}
        link="personal-dashboard"
      />
      <Project name="Weather App" img={WeatherImg} link="react-weather-app" />
      <Project name="Memory Game" img={MemoryGameImg} link="memory-game" />
      <Project name="Quiz App" img={QuizzicalImg} link="quizzical" />
      <Project
        name="Color Scheme Generator"
        img={ColorImg}
        link="color-scheme-generator"
      />
      <Project name="CV Builder" img={CVBuilderImg} link="cv-app" />
      <Project name="Calculator" img={CalcImg} link="calculator" />
    </div>
  </section>
);

export default Projects;
