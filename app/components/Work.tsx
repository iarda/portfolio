import Image from "next/image";

function ShowcaseTile({
  title,
  kicker,
  poster,
}: {
  title: string;
  kicker: string;
  poster?: string;
}) {

  return (
    <li
      className="group relative aspect-square overflow-hidden border-r border-b border-gray-300"
    >
      {/* Hover-Media */}
      <div className="absolute inset-0 z-0 opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
        {poster && (
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Dot */}
      <span
        className="absolute bg-[#97CBD1] left-3 top-3 z-10 inline-block h-4 w-4 rounded-full ring-1 ring-white/50"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <div className="text-white md:text-zinc-700 transition md:group-hover:text-white text-2xl font-semibold">
          {title}
        </div>
        <div className="mt-1 max-w-sm text-zinc-200 md:text-zinc-400 text-xs">
          {kicker}
        </div>
      </div>

      {/* Subtiles Kanten-Highlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(0,0,0,0.35)" }}
        aria-hidden
      />
    </li>
  );
}

function Work() {
  // Mischgrid: echte Projekte + Schlüssel-Skills (mit Beispielen)
  const items = [
    // — PROJECTS —
    {
      title: "Anomaly Watch",
      kicker: "Real-time anomaly detection with alerts to Teams (GCP/BigQuery).",
      poster: "/work/anomaly.jpg",
    },
    {
      title: "Sales Forecast",
      kicker: "Time-series models for sales and demand, with dashboard & API.",
      poster: "/work/forecast.jpg",
    },
    {
      title: "Auto-Billing",
      kicker: "Automated invoice creation with DB matching & PDF generation.",
      poster: "/work/auto-billing.jpg",
    },
    {
      title: "Dashboards",
      kicker: "Real-time KPIs, error monitoring, and incidents for several stakeholders.",
      poster: "/work/dashboard.jpg",
    },

    // — SKILLS IN ACTION —
    {
      title: "Data Engineering",
      kicker: "Scalable pipelines, warehouse design, and robust ETL/ELT processes.",
      poster: "/skills/dataeng.jpg",
    },
    {
      title: "Machine Learning",
      kicker: "Forecasting, classification, and anomaly detection – deployed to production.",
      poster: "/skills/ml.jpg",
    },
    {
      title: "Web Development",
      kicker: "React/Next.js UIs, authentication, SSR/ISR, and API integrations.",
      poster: "/skills/web.jpg",
    },
    {
      title: "Automation & APIs",
      kicker: "Bots, integrations (Python/Node.js), and clean REST/GraphQL APIs.",
      poster: "/skills/automation.jpg",
    },
  ];

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* super clean: kein SectionBG hier */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-700 text-white sm:text-5xl">
            Projects <span className="text-zinc-400">&</span> <span style={{ color: "#97CBD1" }}>Skills</span>
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            A selection of projects and core skills that show how I solve problems, build solutions, and deliver results.
          </p>
        </div>
      </div>

      {/* Grid mit Linien */}
      <ul className="mt-10 grid grid-cols-1 border-t border-l border-gray-300 md:grid-cols-2">
        {items.map((it) => (
          <ShowcaseTile key={it.title} {...it} />
        ))}
      </ul>
    </section>
  );
}

export default Work;
