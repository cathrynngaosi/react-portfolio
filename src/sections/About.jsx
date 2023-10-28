import IDPhoto from "/public/ID Photo.jpg";

function About({ aboutRef }) {
  return (
    <section id="about" ref={aboutRef}>
      <div className="about-intro">
        <p>
          the idea of creating something from nothing has always been exciting
          to me, and that’s why I’m here ☀️
        </p>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I am an experienced developer with a track record of creating
            beautiful and functional user experiences. My journey in the
            industry, coupled with a bachelor’s degree in Information
            Technology, has enabled me to refine my skills in web development,
            UI/UX design, and more. Crafting beautiful websites has always been
            a personal goal, and I’m dedicated to further enhancing my skills.
          </p>

          <p>
            When I’m not glued to my laptop, you can find me in cafes, crafting,
            or exploring new places to eat as an avid foodie. I love exploring
            new places whenever I have the chance to travel, attending live
            concerts, and making countless memories with my family (🐶 counted!)
            and friends.
          </p>
        </div>
        <div className="about-photo">
          <img src={IDPhoto} alt="header" />
        </div>
      </div>
    </section>
  );
}

export default About;
