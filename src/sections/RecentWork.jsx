import Project from "../components/Project";
import { projects } from "../data/recentWork";

function RecentWork({ portfolioRef }) {
  return (
    <section
      id="recent-works"
      ref={portfolioRef}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div className="works-header">
        <h1>My Recent Work</h1>
        <p>Learning and leveling up, one git commit at a time 👩🏻‍💻</p>
      </div>
      <div className="works-container">
        {projects.map(({ title, description, thumbnail, tech, links }, num) => {
          return (
            <Project
              title={title}
              key={title}
              description={description}
              thumbnail={thumbnail}
              tech={tech}
              links={links}
              num={num}
            />
          );
        })}
      </div>
    </section>
  );
}

export default RecentWork;
