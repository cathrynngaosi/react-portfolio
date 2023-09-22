import "./scss/main.scss";
import { useRef } from "react";
import Navbar from "./layout/Navbar";
import MobileMenu from "./components/MobileMenu";
import NavLinks from "./components/NavLinks";
import Intro from "./sections/Intro";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import WorkExperience from "./sections/WorkExperience";
import RecentWork from "./sections/RecentWork";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const workExpRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar>
        <NavLinks
          aboutRef={aboutRef}
          techStackRef={techStackRef}
          workExpRef={workExpRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
      </Navbar>

      <MobileMenu>
        <NavLinks
          aboutRef={aboutRef}
          techStackRef={techStackRef}
          workExpRef={workExpRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
      </MobileMenu>

      <Intro />
      <About aboutRef={aboutRef} />
      <TechStack techStackRef={techStackRef} />
      <WorkExperience workExpRef={workExpRef} />
      <RecentWork portfolioRef={portfolioRef} />
      <Contact contactRef={contactRef} />

      <Footer>
        <NavLinks
          aboutRef={aboutRef}
          techStackRef={techStackRef}
          workExpRef={workExpRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
      </Footer>

      <ScrollToTopBtn />
    </>
  );
}

export default App;
