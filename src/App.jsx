import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/Divider';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
