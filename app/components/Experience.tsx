import { motion } from "framer-motion";
import Image from "next/image";

type Exp = {
  role: string;
  company: string;
  period: string;
  tags: string[];
  blurb?: string;
  bullets: string[];
  poster?: string;
};

const EXPS: Exp[] = [
  {
    role: "Software Developer",
    company: "FTD Bilisim",
    period: "Apr 2025 – Now",
    tags: ["Mendix", "Low-Code", "Project Management"],
    blurb: "Design, development, and maintenance of Mendix applications, plus project planning, client communication, and lead research.",
    bullets: [
      "Design, develop, and maintain Mendix applications",
      "Plan and manage projects from start to finish",
      "Build and maintain strong client relationships",
      "Research and analyze leads to identify new business opportunities",
      "Analyze requirements and provide tailored solutions",
      "Use low-code platform features to improve processes"
    ],
    poster: "/experience/ftd_logo.png",
  },
  {
    role: "Data Scientist",
    company: "veniture GmbH",
    period: "Sep 2023 – Aug 2024",
    tags: ["Data Science", "ML", "Pipelines"],
    blurb: "Designed and maintained databases, data pipelines, and analytics tools, working with large datasets to deliver insights.",
    bullets: [
      "Design, build, and maintain databases, pipelines, and analytics tools",
      "Collect, process, and analyze large datasets to uncover trends and insights",
      "Develop machine learning, statistical, and optimization models",
      "Clean and manage data to ensure quality",
      "Collaborate across teams to solve business problems",
      "Automate internal data processes to improve efficiency"
    ],
    poster: "/experience/veniture-ds.webp",
  },
  {
    role: "Working Student – Data Science & Internal Development",
    company: "veniture GmbH",
    period: "Aug 2022 – Sep 2023",
    tags: ["Working Student", "Automation"],
    blurb: "Built prototypes and automation solutions for internal data workflows.",
    bullets: [
      "Develop prototypes and automation scripts",
      "Support data science projects through research and model prototyping"
    ],
    poster: "/experience/veniture-ds.webp",
  },
  {
    role: "Intern – Data Science & Internal Development",
    company: "veniture GmbH",
    period: "Mar 2022 – Jul 2022",
    tags: ["Internship", "Data Science"],
    blurb: "Supported data analysis, prototyping, and tool development.",
    bullets: [
      "Assist in data analysis and modeling",
      "Contribute to prototype tool development and testing"
    ],
    poster: "/experience/veniture-ds.webp",
  },
  {
    role: "Frontend Developer – Working Student",
    company: "Valtech GmbH",
    period: "Jan 2021 – May 2021",
    tags: ["Frontend", "React"],
    blurb: "Built responsive web UIs, fixed bugs, and optimized performance.",
    bullets: [
      "Develop web interfaces using HTML, CSS, JavaScript, and React",
      "Troubleshoot and debug web applications",
      "Apply responsive design principles"
    ],
    poster: "/experience/valtech.jpg",
  },
  {
    role: "QA Working Student",
    company: "Appmatics GmbH",
    period: "Jan 2019 – Feb 2020",
    tags: ["QA", "Mobile/Web"],
    blurb: "Tested mobile apps and websites for quality assurance.",
    bullets: [
      "Perform manual and automated testing",
      "Report bugs and prepare test scenarios"
    ],
    poster: "/experience/appmatics.webp",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-zink-400 sm:text-5xl">Work Experience</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            A track record of building software, data solutions, and user-focused applications across different industries. Always with a hands-on approach and a focus on delivering results.
          </p>
        </div>
      </div>

      <div
        className="
          grid grid-cols-1 gap-6 md:grid-cols-2
          md:[&>article:nth-child(2n)]:mt-16
          lg:[&>article:nth-child(2n)]:mt-24
        "
      >
        {EXPS.map((e, i) => (
          <motion.article
            key={e.role + e.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="
              group relative overflow-hidden rounded-3xl border border-gray-300
              backdrop-blur-sm transition-transform hover:-translate-y-0.5
            "
          >
            {/* Media (optional) */}
            <div className="relative h-48 w-full overflow-hidden md:h-56">
              {e.poster ? (
                <Image
                  src={e.poster}
                  alt={`${e.company} – ${e.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03]"
                  priority={i < 2}
                />
              ) : (
                <div
                  className="h-full w-full"
                  style={{
                    background: `radial-gradient(80% 80% at 30% 10%, "#97CBD122", transparent),
                                 radial-gradient(60% 60% at 80% 70%, "#1e805422", transparent)`,
                  }}
                />
              )}
              {/* sanfte Rounded oben */}
              <div className="pointer-events-none absolute inset-0 rounded-t-3xl ring-1 ring-inset ring-white/10" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-zink-500">
                  {e.role} <span className="font-medium" style={{ color: "#97CBD1" }}>@ {e.company}</span>
                </h3>
                <span className="text-sm text-zinc-500">{e.period}</span>
              </div>

              {e.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gray-300 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {e.blurb && <p className="mt-3 text-sm leading-relaxed text-zinc-500">{e.blurb}</p>}

              <ul className="mt-4 space-y-1.5">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-zinc-500">
                    <span
                      className="mt-2 inline-block h-[3px] w-[3px] rounded-full"
                      style={{ background: "#97CBD1" }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
