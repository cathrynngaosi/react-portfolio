import "./scss/main.scss";
import Navbar from "./layout/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import WorkExperience from "./sections/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <TechStack />
      <WorkExperience />
    </>
  );
}

export default App;
