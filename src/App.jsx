import "./scss/main.scss";
import Navbar from "./layout/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import WorkExperience from "./sections/WorkExperience";
import RecentWork from "./sections/RecentWork";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <TechStack />
      <WorkExperience />
      <RecentWork />
      <Contact />
    </>
  );
}

export default App;
