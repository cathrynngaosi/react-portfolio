import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-container">
        <h1>Hey there, I&apos;m Cathryn!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem,
          quam numquam tempore deserunt temporibus quas porro ut ducimus quae,
          repellendus accusantium atque! Saepe non, possimus nulla vel quibusdam
          repellendus.
        </p>

        <button className="btn">Download Resume</button>
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

export default Intro;
