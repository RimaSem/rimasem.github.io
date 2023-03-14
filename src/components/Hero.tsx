import "./scss/Hero.scss";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { Icon } from "@mdi/react";
import {
  mdiEmail,
  mdiGithub,
  mdiLinkedin,
  mdiFacebookMessenger,
} from "@mdi/js";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a Front-End Web Developer based in Klaipėda, Lithuania"],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero">
      <p className="intro">Hello! 👋 My name is</p>
      <h1>RIMA ŠEMETAITĖ</h1>
      <div className="hero-bottom-wrapper">
        <p>
          <span ref={el} className="headline"></span>
        </p>
        <div className="contact-icons">
          <Icon path={mdiEmail} size={1.7} />
          <Icon path={mdiGithub} size={1.7} />
          <Icon path={mdiLinkedin} size={1.7} />
          <Icon path={mdiFacebookMessenger} size={1.7} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
