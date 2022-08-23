import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavSidebar from "./components/NavSidebar";
import Projects from "./components/Projects";
import Setup from "./components/Setup";

function App() {
  return (
    <>
      <NavSidebar />
      <div className="flex flex-row flex-wrap">
        <div className="w-screen md:w-1/2">
          <Home />
        </div>
        <div className="w-screen md:w-1/2">
          {" "}
          <Setup />
        </div>
        <About/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
