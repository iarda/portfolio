import { CSSProperties } from "react";
import {
  SiPython, SiNodedotjs, SiReact, SiNextdotjs, SiGooglecloud,
  SiGooglebigquery, SiTailwindcss, SiDocker, SiGraphql, SiMariadb, SiTensorflow,
  SiGoogledatastudio,
  SiKubernetes,
  SiGit
} from "react-icons/si";

function TechSection() {
  return (
    <section id="tech" className="relative mx-auto max-w-6xl px-6 py-24">
      <h2 className="sr-only">Technologies</h2>

      <div className="grid grid-cols-1 border-t border-l border-gray-300 md:grid-cols-4">
        <div className="relative flex min-h-[220px] flex-col justify-center gap-4 border-b border-r border-gray-300 p-8 md:col-span-1 md:row-span-2 md:min-h-[520px]">
          <div className="text-4xl font-semibold leading-tight text-zink-300 sm:text-5xl">
            <span style={{ color: "#97CBD1" }}>Tech</span> I work
            <br /> with
          </div>
          <p className="max-w-xs text-sm text-zinc-400">
            Tools, frameworks, and platforms I use to design, build, and deliver modern digital solutions.
          </p>

          <span
            aria-hidden
            className="pointer-events-none absolute -z-10 inset-0 opacity-30 blur-2xl"
            style={{ background: `radial-gradient(40% 40% at 20% 20%, "#1e805422", transparent)` }}
          />
        </div>
        {TECH.slice(0, 3).map((t) => (
          <TechTile key={t.name} {...t} />
        ))}
        {TECH.slice(3, 7).map((t) => (
          <TechTile key={t.name} {...t} />
        ))}
        {TECH.slice(7, 14).map((t) => (
          <TechTile key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: CSSProperties }>;
  subtitle?: string;
};

const TECH: Tech[] = [
  { name: "Python",      Icon: SiPython,       subtitle: "Pipelines, machine learning, automation" },
  { name: "Node.js",     Icon: SiNodedotjs,    subtitle: "APIs and integrations" },
  { name: "React",       Icon: SiReact,        subtitle: "Frontends and dashboards" },
  { name: "Next.js",     Icon: SiNextdotjs,    subtitle: "SSR/ISR and web apps" },
  { name: "Tailwind",    Icon: SiTailwindcss,  subtitle: "Modern design system" },
  { name: "GCP",         Icon: SiGooglecloud,  subtitle: "Cloud workloads and services" },
  { name: "BigQuery",    Icon: SiGooglebigquery, subtitle: "Data warehouse and SQL" },
  { name: "Looker",      Icon: SiGoogledatastudio, subtitle: "Data visualization and dashboards" },
  { name: "Docker",      Icon: SiDocker,       subtitle: "Containerized deployments" },
  { name: "GraphQL",     Icon: SiGraphql,      subtitle: "Flexible APIs" },
  { name: "MariaDB",     Icon: SiMariadb,      subtitle: "Relational databases" },
  { name: "TensorFlow",  Icon: SiTensorflow,   subtitle: "ML and deep learning" },
  { name: "Kubernetes",  Icon: SiKubernetes,   subtitle: "Container orchestration" },
  { name: "Git",         Icon: SiGit,          subtitle: "Version control" },
];

function TechTile({ name, Icon, subtitle }: Tech) {
  return (
    <div className="group relative flex aspect-square items-center justify-center overflow-hidden border-b border-r border-gray-300 p-6">
      <span
        aria-hidden
        className="absolute left-3 top-3 inline-block h-2 w-2 rounded-full ring-1 ring-gray-300"
        style={{ background: "#1e8054" }}
      />
      <div className="relative z-10 flex w-full max-w-[82%] flex-col items-start justify-end gap-2">
        <Icon className="h-10 w-10 text-zinc-600 opacity-90 transition group-hover:opacity-100" style={{ color: "#97CBD1" }} />
        <div className="text-xl font-semibold text-zinc-600">{name}</div>
        {subtitle && <div className="text-xs text-zinc-400">{subtitle}</div>}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-gray-100/10 to-gray-200/80" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(0,0,0,0.35)" }}
      />
    </div>
  );
}

export default TechSection;
