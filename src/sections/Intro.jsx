import DisplayPhoto from "/public/DSC06388.png";
import NameHeader from "/public/Name Header.svg";

function Intro() {
  return (
    <section id="intro">
      <h1
        id="name-header"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600"
      >
        <img src={NameHeader} alt="header" />
      </h1>
      <div className="intro-container">
        <div
          className="intro-photo"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-easing="ease-in-sine"
        >
          <img src={DisplayPhoto} alt="" />
        </div>
        <div
          className="intro-content"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-easing="ease-in-sine"
        >
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
      </div>
      <div className="quote-intro">
        <p data-aos="fade-up" data-aos-duration="800">
          the idea of creating something from nothing has always been exciting
          to me, and that’s why I’m here ☀️
        </p>
      </div>
    </section>
  );
}

export default Intro;
