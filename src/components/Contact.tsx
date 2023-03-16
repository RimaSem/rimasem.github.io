import "./scss/Contact.scss";
import { Icon } from "@mdi/react";
import {
  mdiCellphone,
  mdiEmail,
  mdiFacebook,
  mdiGithub,
  mdiLinkedin,
  mdiMapMarker,
} from "@mdi/js";

function Contact() {
  return (
    <>
      <h1 id="contact">CONTACT ME</h1>
      <section className="contact-container">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Email"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            aria-label="Message"
          />
          <button type="button">Send Message</button>
        </form>
        <div className="contacts">
          <div className="contact-info">
            <h3>Contact Info:</h3>
            <div className="wrapper">
              <Icon className="contact-icon" path={mdiEmail} />
              <p>rima.semetaite@gmail.com</p>
            </div>
            <div className="wrapper">
              <Icon className="contact-icon" path={mdiCellphone} />
              <p>+370 608 00903</p>
            </div>
            <div className="wrapper">
              <Icon className="contact-icon" path={mdiMapMarker} />
              <p>Klaipėda, Lithuania</p>
            </div>
          </div>
          <div className="social-networks">
            <h3>Social Networks:</h3>
            <div className="icons">
              <Icon className="social-icon" path={mdiGithub} size={1.3} />
              <Icon className="social-icon" path={mdiFacebook} size={1.3} />
              <Icon className="social-icon" path={mdiLinkedin} size={1.3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
