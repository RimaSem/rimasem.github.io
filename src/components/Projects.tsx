import "./scss/Projects.scss";
import CookPal from "../img/cook_pal_app.webp";
import ShopImg from "../img/plant-shop.webp";
import TodoImg from "../img/todo-list.webp";
import WeatherImg from "../img/weather-app.webp";
import MemoryGameImg from "../img/memory-game.webp";
import QuizzicalImg from "../img/quizzical.webp";
import Project from "./Project";

const Projects: React.FC = () => (
  <section className="projects-container" id="projects">
    <h1>PROJECTS</h1>
    <div className="project-wrapper">
      <Project name="Cook-Pal Recipe App" img={CookPal} link="cook-pal" />
      <Project name="Mock E-Shop" img={ShopImg} link="plant-shop" />
      <Project name="Weather App" img={WeatherImg} link="react-weather-app" />
      <Project name="To-Do App" img={TodoImg} link="todo-list" />
      <Project name="Memory Game" img={MemoryGameImg} link="memory-game" />
      <Project name="Quiz App" img={QuizzicalImg} link="quizzical" />
    </div>
  </section>
);

export default Projects;
