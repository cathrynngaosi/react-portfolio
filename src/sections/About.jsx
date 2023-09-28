import ResumePhoto from "/public/Resume Photo.jpeg";

function About({ aboutRef }) {
  return (
    <section id="about" ref={aboutRef}>
      <div
        data-aos="fade-left"
        data-aos-duration="900"
        className="about-container"
      >
        <div className="about-photo">
          <img src={ResumePhoto} alt="" />
        </div>
        <div className="about-text">
          <h1>ABOUT ME</h1>
          <p className="about-intro">
            The idea of creating something from nothing has always been exciting
            to me, and that’s why I’m here ☀️
          </p>
          <p>
            A bachelor’s degree in Information Technology and my years of
            experience in the industry have enabled me to hone my skills in web
            development, UI/UX design, and everything in between. Being able to
            create beautiful websites has always been a goal of mine, and I’m
            determined to grow and enhance my skills further.
          </p>
          <p>
            When I&apos;m not glued to my laptop, you can find me in cafes,
            crafting, or exploring new places to eat as an avid foodie. I love
            exploring new places whenever I have the chance to travel, attending
            live concerts, and making countless memories with my family (🐶
            counted!) and friends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
