import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0f1020] via-[#0b0f2a] to-[#0a0b1e]">
      {/* Animated gradient aura overlay - doesn't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.25),rgba(59,130,246,0.15)_40%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-24 w-24 rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.35)] flex items-center justify-center">
              {/* Futuristic avatar placeholder - abstract ring */}
              <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 blur-[1px]" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow mb-4">
            Hi, I’m Kabir — Future-Focused, Business-Driven.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-indigo-100/90 mb-8">
            B.Com Student | Aspiring Company Secretary | AI Generalist
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#about" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-transform duration-200 hover:-translate-y-0.5">
              <span>Explore My Journey</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="https://www.linkedin.com/in/kabir-547259365/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/15 backdrop-blur hover:bg-white/15 transition-colors">
              <span>Connect on LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.863-3.058-1.865 0-2.151 1.455-2.151 2.959v5.703h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.836-1.562 3.034 0 3.596 2.005 3.596 4.613v5.582z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
