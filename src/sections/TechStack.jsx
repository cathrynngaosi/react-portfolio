import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaSass,
} from "react-icons/fa6";
import {
  SiCanva,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";

function TechStack({ techStackRef }) {
  const techLabels = [
    { label: "HTML5", icon: <FaHtml5 /> },
    { label: "CSS", icon: <FaCss3Alt /> },
    { label: "Javascript", icon: <SiJavascript /> },
    { label: "ReactJS", icon: <RiReactjsFill /> },
    { label: "Node.js", icon: <FaNodeJs /> },
    { label: "jQuery", icon: <SiJquery /> },
    { label: "C#", icon: <img src="public/c.png" /> },
    { label: "PHP", icon: <BiLogoPhp /> },
    { label: "Bootstrap", icon: <FaBootstrap /> },
    { label: "TailwindCSS", icon: <SiTailwindcss /> },
    { label: "Sass", icon: <FaSass /> },
    { label: "SQL", icon: <SiMysql /> },
    { label: "Supabase", icon: <SiSupabase /> },
    { label: "Figma", icon: <FaFigma /> },
    { label: "Canva", icon: <SiCanva /> },
  ];

  return (
    <section id="tech-stack" ref={techStackRef}>
      <div
        className="box-container"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h1>My Tech Stack</h1>
        <div className="all-tech-container">
          {techLabels.map((tech) => {
            return (
              <div className="tech-container" key={tech.label}>
                <span className="icon">{tech.icon}</span>
                <p className="icon-label">{tech.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
