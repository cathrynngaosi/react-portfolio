function WorkExperience() {
  return (
    <section id="work-experience">
      <div className="work-exp-container">
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
              <p>HTML, CSS, JavaScript, C#, MySQL,</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
