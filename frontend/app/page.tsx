import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen text-white bg-gradient-to-br from-black via-slate-900 to-black">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Achievements />

        <Education />

        <Contact />

        <Footer />

      </main>
    </>
  );
}