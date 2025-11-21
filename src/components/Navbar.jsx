import { Menu, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-2 shadow-[0_10px_40px_rgba(80,60,200,0.2)]">
        <a href="#about" className="px-3 py-1.5 text-indigo-100 hover:text-white transition">About</a>
        <a href="#skills" className="px-3 py-1.5 text-indigo-100 hover:text-white transition">Skills</a>
        <a href="#journey" className="px-3 py-1.5 text-indigo-100 hover:text-white transition">Journey</a>
        <a href="#projects" className="px-3 py-1.5 text-indigo-100 hover:text-white transition">Projects</a>
        <a href="#contact" className="px-3 py-1.5 text-indigo-100 hover:text-white transition">Contact</a>
        <span className="mx-1 h-6 w-px bg-white/15" />
        <a
          href="https://www.linkedin.com/in/kabir-547259365/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition"
        >
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
