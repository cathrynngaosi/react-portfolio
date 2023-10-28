function About({ aboutRef }) {
  return (
    <section id="about" ref={aboutRef}>
      <div
        data-aos="fade-left"
        data-aos-duration="900"
        className="about-container"
      >
        <div className="about-text">
          <h1>ABOUT ME</h1>
          <p className="about-intro">
            The idea of creating something from nothing has always been exciting
            to me, and that’s why I’m here ☀️
          </p>

          <p>
            I am an experienced developer with a track record of creating
            beautiful and functional user experiences. My journey in the
            industry, coupled with a bachelor’s degree in Information
            Technology, has enabled me to refine my skills in web development,
            UI/UX design, and more. Crafting beautiful websites has always been
            a personal goal, and I’m dedicated to further enhancing my skills.
            I’m excited to connect with other professionals in the industry and
            continue to learn and grow together.
          </p>

          <p>
            When I’m not glued to my laptop, you can find me in cafes, crafting,
            or exploring new places to eat as an avid foodie. I love exploring
            new places whenever I have the chance to travel, attending live
            concerts, and making countless memories with my family (🐶 counted!)
            and friends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
