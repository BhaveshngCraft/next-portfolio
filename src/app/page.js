import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-mandatory snap-y">
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <About />
      </section>
      <section className="snap-start">
        <Projects />
      </section>
      <section className="snap-start">
        <Contact />
      </section>
      
    </div>
  );
}
