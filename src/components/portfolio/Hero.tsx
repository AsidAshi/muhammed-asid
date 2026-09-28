import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { GlitchText } from "./GlitchText";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-20 pb-8"
    >
      {/* ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">
          Let’s build something iconic. Ready for the next challenge.          </span>
        </div>

        <h1
          className="text-balance text-6xl font-semibold leading-[1.05] tracking-tight md:text-8xl lg:text-7xl"
          style={{ animation: "fade-up 0.8s ease-out 0.1s both" }}
        >
          <span className="block text-shimmer">Mobile Application Developer</span>
          <span className="block text-gradient">
            <GlitchText text="Crafting seamless mobile experiences." />
          </span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}
        >
          I'm Muhammed Asid — a specialist building high-performance cross-platform apps with React Native 
          and robust backends with Node.js. 4 years of shipping production-ready products.
        </p>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.8s ease-out 0.5s both" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:shadow-glow"
          >
            View selected work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40"
          >
            Get in touch
          </a>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-6"
          style={{ animation: "fade-up 0.8s ease-out 0.7s both" }}
        >
          {[
            { Icon: Github, href: "https://github.com/AsidAshi/" },
            { Icon: Linkedin, href: "https://in.linkedin.com/in/muhammedasidpa" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
