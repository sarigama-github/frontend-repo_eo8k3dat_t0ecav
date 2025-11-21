import SectionShell from './SectionShell';

const Contact = () => {
  return (
    <SectionShell id="contact" title="Let’s Create Impact Together" subtitle="Reach out for collaborations, mentorship, or opportunities">
      <div className="text-center">
        <p className="text-indigo-100/90 mb-8 max-w-2xl mx-auto">
          I’m looking to connect with professionals, mentors, and innovators in the fields of business, technology, and AI. If you have an opportunity, collaboration idea, or just want to chat — I’d love to hear from you.
        </p>
        <a href="https://www.linkedin.com/in/kabir-547259365/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-transform duration-200 hover:-translate-y-0.5">
          <span>Connect with me on LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.863-3.058-1.865 0-2.151 1.455-2.151 2.959v5.703h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.836-1.562 3.034 0 3.596 2.005 3.596 4.613v5.582z"/></svg>
        </a>
      </div>
    </SectionShell>
  );
};

export default Contact;
