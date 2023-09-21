import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

function Contact({ contactRef }) {
  return (
    <section id="contact" ref={contactRef}>
      <h1>Get In Touch</h1>
      <div className="contact-container">
        <div className="contact">
          <MdOutlineMail />
          <a href="mailto:cathrynngaosi@gmail.com">cathrynngaosi@gmail.com</a>
        </div>
        <div className="contact">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/cathrynngaosi/">
            cathrynngaosi@gmail.com
          </a>
        </div>
        <div className="contact">
          <FaSquareGithub />
          <a href="https://github.com/cathrynngaosi">
            github.com/cathrynngaosi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
