
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#97CBD1]/20 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />
        </div>
        <div className="rounded-3xl border border-gray-300 bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] p-8 sm:p-10">
        
        <h2 className="text-4xl font-semibold tracking-tight text-zink-600 sm:text-5xl">Let’s build something</h2>
        <p className="mt-2 max-w-2xl text-zinc-500">Open to remote projects & collaborations.</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-zinc-400">
            <a href="mailto:i-arda95@hotmail.de" className="inline-flex items-center rounded-full border border-[#97CBD1] bg-transparent px-7 py-3 text-base font-semibold text-zinc-800 shadow transition hover:bg-[#97CBD1] hover:text-white">
            <FaEnvelope className="mr-2" /> i-arda95@hotmail.de
            </a>
            <a href="https://www.linkedin./in/ismail-arda/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[#97CBD1] bg-transparent px-7 py-3 text-base font-semibold text-zinc-800 shadow transition hover:bg-[#97CBD1] hover:text-white">
            <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/iarda/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[#97CBD1] bg-transparent px-7 py-3 text-base font-semibold text-zinc-800 shadow transition hover:bg-[#97CBD1] hover:text-white">
            <FaGithub className="mr-2" /> GitHub
            </a>
        </div>
        </div>
    </section>
  );
}

export default Contact;
