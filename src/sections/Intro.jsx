import DisplayPhoto from "/public/DSC06388.png";
import NameHeader from "/public/Name Header.svg";

function Intro() {
  return (
    <section id="intro">
      <h1 id="name-header">
        <img src={NameHeader} alt="header" />
      </h1>
      <div className="intro-container">
        <div>
          <img src={DisplayPhoto} alt="" />
        </div>
        <div className="intro-content">
          <div>
            <h1>Web Developer based in Baguio City, Philippines</h1>
            <p>
              An experienced web developer with expertise in front-end
              technologies and UI/UX design, I thrive on the art of aesthetics
              and functionality in the digital realm.
            </p>

            <div className="intro-links">
              <a href="mailto:cathrynngaosi@gmail.com">Contact Me</a>
              <a
                href="https://drive.google.com/file/d/16AJ-dCjDBFJiBoOxgfu2t7dtO1bpXgCy/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a
                href="https://www.linkedin.com/in/cathrynngaosi/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/cathrynngaosi"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {/* <div>
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
          </div> */}
        {/* <div className="icons-container">
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
          </div> */}
      </div>
      {/* 
      <div className="intro-container">
        <div className="intro-photo">
          <img src={DisplayPhoto} alt="" />
        </div> */}

      {/* <div className="intro-content">
          <div className="intro-text">
            <h1>Web Developer | Front-End Developer | UI/UX Design</h1>

            <p>
              I am an experienced developer based in the Philippines with a
              passion for crafting elegant and efficient websites. I am now
              eagerly seeking opportunities to advance my career by applying my
              proven development skills to a web development role where I can
              contribute to the success of impactful projects.
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
        </div> */}
      {/* </div> */}
    </section>
  );
}

export default Intro;
