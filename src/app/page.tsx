"use client";

import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import AWS from "@/components/aws/AWS";
import Education from "@/components/education/Education";
import Hackathons from "@/components/hackathons/Hackathons";
import CurrentLearning from "@/components/current-learning/CurrentLearning";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <AWS />
        <div className="section-divider" />
        <Hackathons />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <CurrentLearning />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
