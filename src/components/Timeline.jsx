import SectionShell from './SectionShell';

const milestones = [
  { year: '2025', text: 'Started B.Com at Delhi University', icon: '🎓' },
  { year: '2025', text: 'Enrolled for Company Secretary Course', icon: '🧠' },
  { year: '2023', text: 'Started AI exploration & upskilling via certifications', icon: '⚙️' },
  { year: '2024', text: 'Building personal brand & portfolio', icon: '🌐' },
];

const Timeline = () => {
  return (
    <SectionShell id="journey" title="My Learning Journey" subtitle="Milestones that shaped my path">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
        <div className="space-y-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative grid sm:grid-cols-2 gap-6 items-center">
              <div className={`${idx % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12'}`}>
                <div className="inline-flex items-center gap-2 text-indigo-200/90">
                  <span className="text-2xl">{m.icon}</span>
                  <span className="text-sm uppercase tracking-wider">{m.year}</span>
                </div>
                <h3 className="text-white text-lg mt-2">{m.text}</h3>
              </div>
              <div className={`hidden sm:block ${idx % 2 === 0 ? '' : 'order-1'}`}> 
                <div className="h-3 w-3 rounded-full bg-gradient-to-tr from-fuchsia-400 via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.7)] mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

export default Timeline;
