import { motion } from "framer-motion";
import Image from "next/image";

function AboutMe() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[.14] blur-3xl"
        style={{
          background: `radial-gradient(60% 40% at 15% 10%, #97CBD1, transparent 70%),
                       radial-gradient(50% 40% at 95% 30%, #1e8054, transparent 70%)`,
        }}
      />

      <div className="grid items-center gap-10 md:grid-cols-12">
            <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="md:col-span-6"
            >
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    Hi, <span className="text-[#97CBD1]">I’m Ismail.</span>
                </h2>
                <p className="mt-4 max-w-xl text-zinc-600 leading-relaxed">
                    Data Scientist & Data Engineer creating clean data pipelines and production-grade ML features. Skilled in automation, forecasting, and building scalable web apps.
                </p>

                <div className="mt-6 flex gap-3">
                    <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-[#97CBD1] bg-[#97CBD1] px-7 py-3 text-base font-semibold text-white shadow transition hover:bg-transparent hover:text-zinc-800"
                    >
                    Contact
                    </a>
                    <a 
                    href="./CV_Ismail_ARDA_english.pdf"
                    download
                    className="inline-flex items-center rounded-full border border-[#97CBD1] bg-transparent px-7 py-3 text-base font-semibold text-zinc-800 shadow hover:bg-[#97CBD1] hover:text-white transition">
                    Download CV
                    </a>
                </div>
                <motion.ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Fokusthemen"
                >
                    {["Automation", "Forecasting", "Web‑Apps"].map((t) => (
                    <li key={t} className="rounded-full border border-gray-300 bg-white/50 px-3 py-1 text-sm text-zinc-700 backdrop-blur-md">
                        {t}
                    </li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className="md:col-span-6"
            >
                <div className="relative mx-auto aspect-[4/5] border-t border-l border-gray-300 w-full max-w-md overflow-hidden rounded-3xl">
                    <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-35 blur-2xl"
                    style={{ background: `radial-gradient(55% 55% at 35% 20%, #97CBD1, transparent 60%)` }}
                    />
                    <Image
                    src="/profile.png"
                    alt="Ismail Arda – Portrait"
                    fill
                    sizes="(max-width: 768px) 80vw, 480px"
                    className="object-cover"
                    priority={false}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]" />
                </div>
            </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
