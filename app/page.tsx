import Nav from "@/components/nav";
import Hero from "@/components/hero";
import { Marquee, Stats } from "@/components/stats";
import Dashboard from "@/components/dashboard";
import Work from "@/components/work";
import Workflow from "@/components/workflow";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Dashboard />
        <Work />
        <Workflow />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
