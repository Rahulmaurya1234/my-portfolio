import './App.css'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
