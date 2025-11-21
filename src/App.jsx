import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BackdropFX from './components/BackdropFX';

function App() {
  return (
    <div className="min-h-screen bg-[#070816] text-white relative">
      {/* Global animated graphic background */}
      <BackdropFX />

      {/* Floating nav */}
      <Navbar />

      {/* Soft color auras */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(40%_40%_at_80%_10%,rgba(236,72,153,0.12),transparent_60%)]" />

      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-12 text-center text-indigo-200/70 border-t border-white/10 bg-white/[0.02]">
        <p>© {new Date().getFullYear()} Kabir • Future-Focused, Business-Driven</p>
      </footer>
    </div>
  );
}

export default App;
