import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

function Intro() {
  return (
    <section id="intro">
      <div
        className="intro-container"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1>Hey there, I’m Cathryn!</h1>
        <p>
          I am an experienced developer based in the Philippines with a passion
          for crafting elegant and efficient websites. I am now eagerly seeking
          opportunities to advance my career by applying my proven development
          skills to a web development role where I can contribute to the success
          of impactful projects.
          <br />
          Let’s connect!
        </p>
        <div>
          <a href="mailto:cathrynngaosi@gmail.com">
            <button className="btn btn-secondary">Contact Me</button>
          </a>
          <a
            href="https://drive.google.com/file/d/16AJ-dCjDBFJiBoOxgfu2t7dtO1bpXgCy/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-secondary">View Resume</button>
          </a>
        </div>
        <div className="icons-container">
          <a
            href="https://github.com/cathrynngaosi"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/cathrynngaosi/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
