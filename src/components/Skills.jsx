import SectionShell from './SectionShell';
import { LineChart, Cpu, Brain } from 'lucide-react';

const skills = [
  {
    title: 'Business & Finance',
    icon: LineChart,
    items: ['B.Com (DU)', 'Company Secretary (CS)', 'Corporate Law Basics'],
    gradient: 'from-fuchsia-500/20 via-purple-500/20 to-indigo-500/20',
  },
  {
    title: 'Technology & AI',
    icon: Cpu,
    items: ['Prompt Engineering', 'No-Code AI Tools', 'AI for Business Use'],
    gradient: 'from-cyan-400/20 via-sky-500/20 to-indigo-500/20',
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    items: ['Analytical Thinking', 'Continuous Learning', 'Growth Mindset'],
    gradient: 'from-emerald-400/20 via-teal-400/20 to-cyan-400/20',
  },
];

const Skills = () => {
  return (
    <SectionShell id="skills" title="My Skills" subtitle="A balanced stack across business and AI">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((col) => (
          <div key={col.title} className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6`}> 
            <div className={`pointer-events-none absolute -inset-10 bg-gradient-to-br ${col.gradient} blur-3xl`} />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3 text-white">
                <col.icon size={18} className="opacity-80" />
                <h3 className="text-xl font-semibold">{col.title}</h3>
              </div>
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
    </SectionShell>
  );
};

export default Skills;
