const jobs = [
  {
    role: "Mobile Application Developer - Full Stack",
    company: "eSynergy Software Technologies Pvt Ltd",
    period: "2023 — Present",
    summary:
      "Leading LMS mobile app Zenler , also into other client branded apps , using React Native, nodejs and mysql & mongodb. Optimized performance  Implemented secure payment gateways and real-time notifications and automatic build and release process using fastlane .",
    tags: ["React Native", "Node.js", "TypeScript"],
  },
  {
    role: "Associate software engineer",
    company: "LetMeDoIt Technologies Pvt Ltd",
    period: "2022 — 2023",
    summary:
      "Developed and maintained various cross-platform and web applications. Built scalable React Application.",
    tags: ["React.js", "Node.js", "graphql"],
  },
  {
    role: "Mobile App Developer - Trainee",
    company: "Cezcon Solutions",
    period: "2021 — 2022",
    summary: "Developed CRM , HRM mobile applications in react-native and expo",
    tags: ["react-native", "expo"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-15">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            03 — Experience
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Focusing on{" "}
            <span className="text-gradient">mobile excellence.</span>
          </h2>
        </div>

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {jobs.map((job, i) => (
              <div
                key={job.company}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow md:left-1/2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
                </div>

                <div
                  className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                >
                  <p className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-primary">{job.company}</p>
                </div>

                <div
                  className={`glass ml-10 rounded-2xl p-6 md:ml-0 ${
                    i % 2 === 0 ? "md:ml-12" : "md:mr-12"
                  }`}
                >
                  <p className="text-muted-foreground">{job.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
