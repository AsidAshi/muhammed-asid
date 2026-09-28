import { Coffee, Code2, Globe2, Sparkles } from "lucide-react";

const stats = [
  { Icon: Code2, label: "Years experience", value: "4+" },
  { Icon: Globe2, label: "Projects completed", value: "9+" },
  { Icon: Sparkles, label: "Apps launched", value: "5+" },
  { Icon: Coffee, label: "Hours coding", value: "∞" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-15">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              01 — About
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Building apps with <span className="text-gradient">precision.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I specialize in developing high-quality mobile applications and scalable backend systems. 
                With 4 years of professional experience, I focus on creating smooth user experiences 
                using React Native and building efficient server-side logic with Node.js.
              </p>
              <p>
                My approach is centered around writeable code, performance optimization, and 
                user-centric design. I bridge the gap between complex backend architecture and 
                intuitive mobile interfaces.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-5 transition-all hover:border-primary/30 hover:bg-glass"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="mt-3 font-mono text-2xl font-semibold tracking-tight text-foreground">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
