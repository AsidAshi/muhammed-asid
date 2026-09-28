const education = [
  {
    degree: "M.Voc in Mobile Application Development",
    school: "CUSAT - Cochin University of Science and Technology",
    period: "2019 — 2021",
    detail:
      "Focused on mobile application development, Android and iOS development.",
  },
  {
    degree: "BSc Electronics",
    school: "Government College, Mananthavady,Kannur University",
    period: "2016 — 2019",
  },
  {
    degree: "Plus Two",
    school: "WMO Higher Secondary School, Pinangode",
    period: "2014 — 2016",
  },
];

const certificates = [
  {
    name: "Internship - Android Kotlin",
    issuer: "Knowledge Avatar",
    year: "2021",
  },
  {
    name: "Internship - Android",
    issuer: "Knowledge Avatar",
    year: "2020",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            04 — Education & certificates
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Credentials that back the <span className="text-gradient">craft.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {education.map((item) => (
              <article key={item.degree} className="glass rounded-3xl p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-mono text-xs text-primary">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{item.school}</p>
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                Certifications
              </h3>
              <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                Active
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate.name}
                  className="rounded-2xl border border-border bg-secondary/20 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-medium text-foreground">
                        {certificate.name}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {certificate.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-primary">{certificate.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}