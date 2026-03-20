import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
