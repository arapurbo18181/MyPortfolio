import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />

        <SocialLinks />
      </div>
    </BrowserRouter>
  );
}

export default App;
