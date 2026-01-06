import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import PersonalProjects from '@/components/PersonalProjects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <PersonalProjects />
      <TechStack />
      <Footer />
    </main>
  );
}
