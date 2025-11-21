import { Cpu, Brain, LineChart, GraduationCap } from 'lucide-react';
import SectionShell from './SectionShell';

const milestones = [
  { year: '2025', title: 'Started B.Com at Delhi University', icon: GraduationCap, side: 'left' },
  { year: '2025', title: 'Enrolled for Company Secretary Course', icon: Brain, side: 'right' },
  { year: '2023', title: 'AI exploration & upskilling via certifications', icon: Cpu, side: 'left' },
  { year: '2024', title: 'Building personal brand & portfolio', icon: LineChart, side: 'right' },
];

const HyperloopPath = () => {
  /*
    Decorative SVG path that gives a futuristic "hyperloop" route vibe.
    We animate the dash offset for motion and a glowing orb that travels along the path.
  */
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="pathStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main curved path */}
      <path
        id="hyperPath"
        d="M 50 500 C 250 300, 400 550, 600 350 S 950 200, 1150 450"
        fill="none"
        stroke="url(#pathStroke)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
        filter="url(#glow)"
        strokeDasharray="14 10"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-160" dur="5s" repeatCount="indefinite" />
      </path>

      {/* Soft outer glow underline */}
      <path
        d="M 50 500 C 250 300, 400 550, 600 350 S 950 200, 1150 450"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.15"
        strokeWidth="18"
        filter="url(#glow)"
      />

      {/* Moving orb following the path */}
      <g filter="url(#glow)">
        <circle r="7" fill="#22d3ee" opacity="0.95">
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#hyperPath" />
          </animateMotion>
        </circle>
        <circle r="16" fill="#22d3ee" opacity="0.25">
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#hyperPath" />
          </animateMotion>
        </circle>
      </g>
    </svg>
  );
};

const MilestoneCard = ({ year, title, icon: Icon, side }) => {
  const alignLeft = side === 'left';
  return (
    <div className={`relative flex ${alignLeft ? 'justify-start' : 'justify-end'}`}>
      {/* connector dot */}
      <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -ml-1.5 hidden md:block h-3 w-3 rounded-full bg-gradient-to-tr from-fuchsia-400 via-indigo-500 to-cyan-400 shadow-[0_0_18px_rgba(99,102,241,0.6)]" />

      {/* card */}
      <div
        className={`group max-w-md w-full md:w-[44%] backdrop-blur-xl bg-white/8 border border-white/10 rounded-2xl p-5 md:p-6
        shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] relative overflow-hidden
        ${alignLeft ? 'md:mr-[8%]' : 'md:ml-[8%]'}`}
      >
        {/* ambient gradient glow */}
        <div className={`absolute -z-10 blur-2xl opacity-30 ${alignLeft ? '-left-10' : '-right-10'} -top-6 size-40 bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-cyan-400`} />

        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl p-2.5 bg-gradient-to-tr from-indigo-600/30 via-fuchsia-500/20 to-cyan-400/30 border border-white/10 shadow-inner">
            <Icon className="h-6 w-6 text-cyan-300" />
          </div>
          <div className="min-w-0">
            <div className="text-xs tracking-widest text-indigo-200/80 uppercase">{year}</div>
            <h3 className="mt-1 text-base md:text-lg text-white leading-snug">{title}</h3>
          </div>
        </div>

        {/* subtle hover sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-20 rotate-6 bg-gradient-to-r from-white/10 via-white/25 to-white/10" />
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <SectionShell
      id="journey"
      title="My Learning Journey"
      subtitle="A hyperloop path of milestones shaping the way forward"
      glowFrom="from-fuchsia-500"
      glowTo="to-cyan-400"
    >
      <div className="relative">
        {/* Hyperloop path background */}
        <div className="absolute inset-0 -z-10 opacity-70">
          <HyperloopPath />
        </div>

        {/* Structural two-column layout with a center axis on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-16 relative">
          {milestones.map((m, idx) => (
            <div key={idx} className={`relative md:col-span-2`}> 
              <MilestoneCard
                year={m.year}
                title={m.title}
                icon={m.icon}
                side={(idx % 2 === 0) ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>

        {/* center axis line for md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent" />
      </div>

      {/* subtle caption */}
      <p className="mt-10 text-center text-sm text-indigo-200/70">
        Visualized as a flowing route — each stop adds momentum to the next.
      </p>
    </SectionShell>
  );
};

export default Timeline;
