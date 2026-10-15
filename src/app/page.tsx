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
    <div className="min-h-screen bg-[#090A0F] text-[#F4F5F7] flex flex-col selection:bg-emerald-500 selection:text-black">
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
