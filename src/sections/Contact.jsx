import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <div>
          <p>
            <span>
              <MdOutlineMail />
            </span>
            cathrynngaosi@gmail.com
          </p>
        </div>
        <div className="icons-container">
          <span>
            <FaSquareGithub />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
