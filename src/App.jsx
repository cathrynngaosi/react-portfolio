import "./scss/main.scss";
import Navbar from "./layout/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import WorkExperience from "./sections/WorkExperience";
import RecentWork from "./sections/RecentWork";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const workExpRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        techStackRef={techStackRef}
        workExpRef={workExpRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      <Intro />
      <About aboutRef={aboutRef} />
      <TechStack techStackRef={techStackRef} />
      <WorkExperience workExpRef={workExpRef} />
      <RecentWork portfolioRef={portfolioRef} />
      <Contact contactRef={contactRef} />

      <Footer
        aboutRef={aboutRef}
        techStackRef={techStackRef}
        workExpRef={workExpRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      <ScrollToTopBtn />
    </>
  );
}

export default App;
