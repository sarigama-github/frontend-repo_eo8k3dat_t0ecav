import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white relative">
      {/* Background subtle grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.2),transparent_60%),radial-gradient(40%_40%_at_80%_10%,rgba(236,72,153,0.12),transparent_60%)]" />

      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-10 text-center text-indigo-200/60">
        <p>© {new Date().getFullYear()} Kabir • Future-Focused, Business-Driven</p>
      </footer>
    </div>
  );
}

export default App;
