import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Entrepreneurship from "@/components/Entrepreneurship";
import VisitorActivity from "@/components/VisitorActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8DF] text-[#0A1329] flex flex-col selection:bg-[#ABC5F5] selection:text-[#0A1329]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Entrepreneurship />
        <VisitorActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
