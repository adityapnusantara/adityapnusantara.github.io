import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import PersonalProjects from '@/components/PersonalProjects';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import AgentChat from '@/components/AgentChat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <PersonalProjects />
      <AgentChat />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
