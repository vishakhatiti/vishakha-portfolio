<<<<<<< HEAD
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
=======
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
>>>>>>> 239a400 (Initial portfolio setup)

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
=======
      <Hero />
>>>>>>> 239a400 (Initial portfolio setup)
    </>
  )
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> 239a400 (Initial portfolio setup)
