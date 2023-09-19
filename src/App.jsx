import "./scss/main.scss";
import Navbar from "./layout/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
    </>
  );
}

export default App;
