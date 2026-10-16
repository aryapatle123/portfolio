import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Entrepreneurship from "@/components/Entrepreneurship";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000133] text-[#FCF1D1] flex flex-col selection:bg-[#1C3670] selection:text-[#FCF1D1]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Entrepreneurship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
