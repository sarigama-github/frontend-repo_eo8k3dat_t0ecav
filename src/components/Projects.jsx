import SectionShell from './SectionShell';

const projects = [
  { title: 'AI-Powered Financial Planner', status: 'Coming Soon', emoji: '✨' },
  { title: 'Prompt Engineering Case Studies', status: 'Under Development', emoji: '🔍' },
  { title: 'Business + AI Playbooks', status: 'In Ideation', emoji: '📘' },
];

const Projects = () => {
  return (
    <SectionShell id="projects" title="What I'm Building Next" subtitle="A peek into upcoming experiments and tools">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-white/5 to-transparent" />
            <div className="relative">
              <div className="text-3xl mb-2">{p.emoji}</div>
              <h3 className="text-white text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-indigo-200/80">{p.status}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default Projects;
