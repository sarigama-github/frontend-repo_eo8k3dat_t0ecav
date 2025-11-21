const SectionShell = ({ id, title, subtitle, children, glow = 'from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10' }) => {
  return (
    <section id={id} className="relative py-24">
      <div className={`pointer-events-none absolute -inset-x-10 -top-40 h-72 bg-gradient-to-b ${glow} blur-3xl`} />
      <div className="container mx-auto px-6 max-w-6xl relative">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-indigo-200/80">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionShell;
