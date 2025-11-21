const projects = [
  { title: 'AI-Powered Financial Planner', status: 'Coming Soon', emoji: '✨' },
  { title: 'Prompt Engineering Case Studies', status: 'Under Development', emoji: '🔍' },
  { title: 'Business + AI Playbooks', status: 'In Ideation', emoji: '📘' },
];

const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">What I'm Building Next</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="text-3xl mb-2">{p.emoji}</div>
              <h3 className="text-white text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-indigo-200/80">{p.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
