import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Footer />
    </main>
  );
}
