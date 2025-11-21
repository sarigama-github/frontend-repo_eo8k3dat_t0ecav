import SectionShell from './SectionShell';

const About = () => {
  return (
    <SectionShell id="about" title="About Me" subtitle="Business × Technology × AI">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 text-indigo-50 leading-relaxed shadow-[0_20px_80px_rgba(99,102,241,0.15)]">
        <p className="mb-4">
          I’m a proactive and dedicated student currently pursuing a B.Com degree at Delhi University, with a parallel aspiration to become a Company Secretary. My passion lies at the intersection of business and technology.
        </p>
        <p className="mb-0">
          As an aspiring AI Generalist, I’m actively learning and applying concepts in artificial intelligence to explore how it can solve real-world problems and enhance business efficiency. My journey is fueled by a deep commitment to continuous learning and upskilling — combining traditional knowledge with cutting-edge innovation.
        </p>
      </div>
    </SectionShell>
  );
};

export default About;
