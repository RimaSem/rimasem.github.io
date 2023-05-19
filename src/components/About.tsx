import Skill from "./Skill";
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
          I am a self-taught front-end developer who loves solving technical
          challenges and is always excited to learn new things. My interest in
          programming began as a hobby, which quickly turned into an aspiration
          to pursue web development as a career. For the first time in my life,
          I finally understand what it feels like to truly love your work
          without counting the hours!
        </p>
        <p>
          <b>Eager and quick learner</b> – being self-taught and slightly
          obsessed with improving my skills has its own perks, and the ability
          to learn something new quickly is one of them. No explaining
          documentation or hand-holding required here, just point me at what I
          need to learn next and I will do the rest.
        </p>
        <p>
          <b>Time management whizz</b> – one thing I learned from my 9 years of
          being self-employed and working remotely is how to be a punctual and
          accountable worker with iron discipline and strong time-management
          skills. Working both independently and collaboratively is not a
          problem for me.
        </p>
        <p>
          <b>Positive mindset enthusiast</b> – I tend to focus on the good in
          any given situation, however this does not mean that I am unrealistic,
          I just have an optimistic perspective of life. There are no failures,
          just opportunities to learn and grow.
        </p>
        <p>
          <b>Google ninja</b> – my ability to quickly dig out information from
          the deepest corners of the internet is basically my superpower at this
          point. Whether it's a specific code snippet, documentation, a video,
          or a meme - if it's somewhere out there on the interwebs, I will find
          it!
        </p>
      </div>
      <div className="hidden skills-wrapper">
        <h1>SKILLS</h1>
        <div className="main-skills">
          <div className="col">
            <Skill img="TypeScript.svg" name="TypeScript" />
            <Skill img="JavaScript.svg" name="JavaScript" />
            <Skill img="React-Dark.svg" name="React" />
            <Skill img="Redux.svg" name="Redux" />
            <Skill img="Firebase-Dark.svg" name="Firebase" />
            <Skill img="Vite-Dark.svg" name="Vite" />
          </div>
          <div className="col">
            <Skill img="HTML.svg" name="HTML" />
            <Skill img="CSS.svg" name="CSS" />
            <Skill img="Sass.svg" name="SASS/SCSS" />
            <Skill img="StyledComponents.svg" name="Styled-components" />
            <Skill img="Git.svg" name="Git" />
            <Skill img="Github-Dark.svg" name="GitHub" />
          </div>
        </div>
        <h2 className="additional-skills-title">I am also familiar with:</h2>
        <div className="additional-skills">
          <img src="MySQL.svg" alt="MySQL" />
          <img src="Java.svg" alt="Java" />
          <img src="Spring.svg" alt="Spring" />
          <img src="Python.svg" alt="Python" />
          <img src="Django.svg" alt="Django" />
          <img src="Jest.svg" alt="Jest" />
          <img src="WebPack.svg" alt="Webpack" />
        </div>
      </div>
    </section>
  );
}

export default About;
