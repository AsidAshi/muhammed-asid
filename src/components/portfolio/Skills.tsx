const groups = [
  {
    title: "Application Development",
    items: [
      "React Native",
      "Expo",
      "React",
      "Ionic",
      "Capacitor",
      "Kotlin",
      "Redux",
    ],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express", "Mysql", "MongoDB", "GraphQL", "typeOrm"],
  },
  {
    title: "Frontend & Languages",
    items: ["React", "TypeScript", "JavaScript", "CSS", "HTML", "CSS"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Firebase", "GitHub Actions"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            02 — Stack
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Tools I reach for,{" "}
            <span className="text-gradient">unprompted.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className="glass rounded-3xl p-8 transition-all hover:border-primary/30"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {g.title}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-sm text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
