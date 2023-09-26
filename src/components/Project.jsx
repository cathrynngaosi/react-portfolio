import { MdOutlineOpenInNew } from "react-icons/md";
import { FiGithub, FiFigma } from "react-icons/fi";

function Project({ title, description, tech, links, thumbnail, num }) {
  return (
    <div
      className={`${num % 2 === 0 ? "flex-reverse" : ""} project-container`}
      data-aos={num % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-duration="700"
    >
      <div className="project-img">
        <img src={thumbnail} alt="" />
      </div>
      <div className="project-content">
        <h2> {title}</h2>
        <p>{description}</p>

        <div>
          {tech.map((tech) => (
            <p key={title + tech} className="pill">
              {tech}
            </p>
          ))}
        </div>

        <div>
          {links.map(({ link, linkTitle, linkClass }) => (
            <a
              key={linkTitle}
              href={link}
              className={`${linkClass}`}
              target="_blank"
              rel="noreferrer"
            >
              {linkTitle}
              {linkClass === "live" ? (
                <MdOutlineOpenInNew />
              ) : linkClass === "github" ? (
                <FiGithub />
              ) : (
                linkClass === "figma" && <FiFigma />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
