import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

function Intro() {
  return (
    <section id="intro">
      <div
        className="intro-container"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1>Hey there, I&apos;m Cathryn!</h1>
        <p>
          I am an experienced developer based in the Philippines with a drive
          for building (and occasionally designing) exceptional user
          experiences.
          <br />
          Currently, I&apos;m looking to grow further in my career as a Front
          End Developer 👩🏻‍💻 <br />
          Let&apos;s connect!
        </p>
        <div>
          <a href="mailto:cathrynngaosi@gmail.com">
            <button className="btn btn-secondary">Contact Me</button>
          </a>
          <button className="btn btn-secondary">View Resume</button>
        </div>
        <div className="icons-container">
          <a href="https://github.com/cathrynngaosi">
            <FaSquareGithub />
          </a>
          <a href="https://www.linkedin.com/in/cathrynngaosi/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
