const skills = [
  {
    title: 'Business & Finance',
    items: ['B.Com (DU)', 'Company Secretary (CS)', 'Corporate Law Basics'],
    gradient: 'from-fuchsia-500/20 via-purple-500/20 to-indigo-500/20',
  },
  {
    title: 'Technology & AI',
    items: ['Prompt Engineering', 'No-Code AI Tools', 'AI for Business Use'],
    gradient: 'from-cyan-400/20 via-sky-500/20 to-indigo-500/20',
  },
  {
    title: 'Soft Skills',
    items: ['Analytical Thinking', 'Continuous Learning', 'Growth Mindset'],
    gradient: 'from-emerald-400/20 via-teal-400/20 to-cyan-400/20',
  },
];

const Skills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((col) => (
            <div key={col.title} className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 relative overflow-hidden`}> 
              <div className={`pointer-events-none absolute -inset-10 bg-gradient-to-br ${col.gradient} blur-3xl`} />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
                  {col.title}
                </h3>
                <ul className="space-y-2 text-indigo-100/90">
                  {col.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/80" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
