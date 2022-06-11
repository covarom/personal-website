import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
