import Handoff from "/public/Handoff.png";
import ECP from "/public/ECP.png";
import DSDLink from "/public/DSDLink.png";

function WorkExperience({ workExpRef }) {
  return (
    <section id="work-experience" ref={workExpRef}>
      <div
        className="work-exp-container"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <div className="section-label">
          <h1>My Work Experience</h1>
        </div>
        <div className="section-content">
          <div className="exp-container">
            <div className="company">
              <h3>Giant International Software Station Inc.</h3>
              <p>May 2018 - May 2023 </p>
            </div>
            <div className="exp-positions">
              <ul>
                <li>
                  <p>Team Manager</p>
                  <p> Jan 2023 - May 2023</p>
                </li>
                <li>
                  <p>Development Team Lead</p>
                  <p> May 2021 - Jan 2023</p>
                </li>
                <li>
                  <p>Web Application Developer</p>
                  <p> May 2018 - May 2021</p>
                </li>
              </ul>
            </div>
            <div className="skills">
              <p>HTML, CSS, JavaScript, C#, MySQL, AWS Lambda</p>
            </div>
            <div className="exp-desc">
              <p>
                Having been in Giant for 5 years, I have crafted and been heavy
                involved in the development, testing, maintenance, and
                improvements of web applications widely used by clients of
                Encompass Technologies, DSDLink, and Handoff Technologies.
              </p>
              <div className="companies">
                <img src={ECP} alt="" />
                <img src={Handoff} alt="" />
                <img src={DSDLink} alt="" />
              </div>
            </div>
          </div>

          <div className="exp-container">
            <div className="company">
              <h3>
                Beijing Bangnishuo Internet Education Technology Limited -
                Philippines
              </h3>
              <p>July 2017 - May 2018</p>
            </div>
            <div className="exp-positions">
              <ul>
                <li>
                  <p>Junior Software Application Developer</p>
                  <p> May 2018 - May 2021</p>
                </li>
              </ul>
            </div>
            <div className="skills">
              <p>HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, MySQL</p>
            </div>
            <div className="exp-desc">
              <p>
                Beijing Bangnishuo, also known as Utalk Philippines, was an
                online ESL company. With my time here, I have worked in the IT
                department to design, develop, and test software applications
                used by both students and teachers of the company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
