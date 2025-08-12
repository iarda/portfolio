'use client';
import Navbar from "./NavBar";
import Hero from "./Hero";
import AboutMe from "./About";
import Work from "./Work";
import TechSection from "./Tech";
import ExperienceSection from "./Experience";
import Contact from "./Contact";

export default function PortfolioLanding() {
  return (
    <main className="min-h-screen md:ml-24 bg-[rgba(221, 221, 221, 1)] text-gray-800 antialiased selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <AboutMe />
      <Work /> 
      <TechSection />
      <ExperienceSection />
      <Contact />
      <footer className="bg-gray-100">
        <div className="mt-10 pb-5 border-t border-white/10 pt-6 text-sm text-zinc-500">
            <center>© {new Date().getFullYear()} Ismail Arda - built with passion.</center>
        </div>
      </footer>
    </main>
  );
}
