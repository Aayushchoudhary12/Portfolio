import "./app.scss";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/about/About";

const App = () => {
  return (
  <div>
      <Cursor /> 
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="About">
      <Parallax type="services" />
    </section>
    <section>
      <About />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
    </section>
      <Portfolio />
    <section id="Contact">
      <Contact />
    </section>
  </div>
  )
};

export default App;
