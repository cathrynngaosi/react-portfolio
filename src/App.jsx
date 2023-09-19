import "./scss/main.scss";
import Navbar from "./layout/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <TechStack />
    </>
  );
}

export default App;
