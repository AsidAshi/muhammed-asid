import { ArrowUpRight } from "lucide-react";
import gplayBadge from "@/assets/gplay.webp";
import appstoreBadge from "@/assets/appstore.webp";

const assetImages = import.meta.glob<{ default: string }>(
  "/src/assets/*.{png,svg,webp,jpg,jpeg}",
  { eager: true }
);

function getAssetUrl(filename?: string): string | null {
  if (!filename) return null;
  const cleanName = filename.trim();
  for (const path in assetImages) {
    if (path.endsWith(`/${cleanName}`)) {
      return assetImages[path].default;
    }
  }
  return null;
}

const projects = [
  {
    name: "ZENLER",
    tag: "Mobile App · React Native",
    desc: "A comprehensive course app for online learning platforms. Includes real-time sync, video streaming, and course management.",
    accent: "from-primary/30 to-accent/20",
    appIcon: "zenler_app.png",
    siteIcon: "zenler_site.svg",
    siteLink: "https://www.newzenler.com/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.dop.zenler&hl=en_IN",
    appstoreLink: "https://apps.apple.com/in/app/zenler/id1570752421",
  },
  {
    name: "PDF to MP3",
    tag: "Convertor App - Ionic (Capacitor)",
    desc: "Convertor App for pdf to speech. read PDF text, images, and even handwritten notes aloud to you.Free and Pro with subscription model with inapp purchase.",
    accent: "from-accent/30 to-primary/20",
    appIcon: "pdf_to_mp3.png",
    siteIcon: "dop_site.svg",
    siteLink: "https://digitalofficepro.com/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.dop.pdftomp3&hl=en_IN",
    appstoreLink:
      "https://apps.apple.com/in/app/pdf-to-mp3-turn-pdf-to-audio/id6754752696",
  },
  {
    name: "FILE CONVERTOR",
    tag: "Mobile App - React Native",
    desc: "A file conversion utility for various formats , PDF, JPG, PNG, PPT, PPTX, DOC, DOCX, TXT, and more.",
    accent: "from-primary/20 to-accent/30",
    appIcon: "file_convertor_app.png",
    siteIcon: "file_convertor_site.png",
    siteLink: "https://fileconvertor.ai/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.dopconverterall&hl=en_IN",
    appstoreLink:
      "https://play.google.com/store/apps/details?id=com.dopconverterall&hl=en_IN",
  },
  {
    name: "Branded Mobile Apps of Zenler Clients",
    tag: "Civilera , Be With Laura, Englishka and many more",
    desc: "Zenler clieant applications for learning, business, and personal development. devlped by auto build process using fastlanand publishing from customised with app template",
    accent: "from-accent/20 to-primary/30",
    appIcon: "branded_apps.png",
    siteIcon: "branded_apps_site.png",
    siteLink: "https://www.zenler.com/",
    playstoreLink: "https://play.google.com/store/apps/details?id=com.civilera",
    appstoreLink: "https://play.google.com/store/apps/details?id=com.civilera",
  },
  {
    name: "iManager Office Tool",
    tag: "Web App - React",
    desc: "Application used to Human Resource Management , Project and tasks Management , with kanban board, time sheet & tracking, attendance for multi user roles .",
    accent: "from-primary/10 to-accent/30",
    siteIcon: "imanger_site.png",
    siteLink: "https://imanger.zenler.com/",
  },
  {
    name: "iMapp , iCare",
    tag: "Mobile App - React Native",
    desc: "official mobile application for Indus Towers Limited to manage site information and maintenance",
    accent: "from-accent/10 to-primary/30",
    appIcon: "imapp_icare.png",
    siteIcon: "imapp_icare_site.png",
    siteLink: "https://www.indusltd.com/",
    playstoreLink: "https://play.google.com/store/apps/details?id=com.civilera",
    appstoreLink: "https://play.google.com/store/apps/details?id=com.civilera",
  },
  {
    name: "Cezcon CRM ",
    tag: "Mobile App - React Native Expo",
    desc: "To manage customer relationships and comprehensive set of features designed to empower sales teams and enhance customer interactions",
    accent: "from-primary/0 to-accent/30",
    appIcon: " Cezcon.png",
    siteIcon: " Cezcon_site.png",
    siteLink: "https://www.cezconsolutions.com/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.crm.app.master.crm_app",
    appstoreLink:
      "https://play.google.com/store/apps/details?id=com.crm.app.master.crm_app",
  },
  {
    name: "Cezcon HRM",
    tag: "Mobile App - React Native expo",
    desc: "To securely edit, manage and update any kind of personal information of an employee and used to take attendance from mobile",
    accent: "from-accent/0 to-primary/30",
    appIcon: " Cezcon HRM.png",
    siteIcon: " Cezcon_site.png",
    siteLink: "https://www.cezconsolutions.com/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.crm.app.master.crm_app",
    appstoreLink:
      "https://play.google.com/store/apps/details?id=com.crm.app.master.crm_app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              04 — Selected work
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Things I've built that I'm{" "}
              <span className="text-gradient">proud of.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-elegant"
            >
              {/* gradient sheen on hover */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              {/* shine */}
              <div className="pointer-events-none absolute -inset-x-1/2 -top-1/2 h-full w-full -translate-y-full bg-gradient-to-b from-foreground/5 to-transparent transition-transform duration-700 group-hover:translate-y-full" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {p.tag}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      {(() => {
                        const iconUrl = getAssetUrl(p.appIcon);
                        return iconUrl ? (
                          <img
                            src={iconUrl}
                            alt={`${p.name} app icon`}
                            className="h-8 w-8 rounded object-cover"
                          />
                        ) : null;
                      })()}
                      <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  {p.siteLink ? (
                    <a
                      href={p.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass transition-all hover:bg-primary hover:text-primary-foreground group-hover:bg-primary/10"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    </a>
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass transition-all group-hover:bg-primary/10">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    </div>
                  )}
                </div>
                <p className="mt-6 mb-8 flex-1 max-w-md text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-auto flex flex-wrap items-end gap-6">
                  {p.siteLink && (() => {
                    const siteIconUrl = getAssetUrl(p.siteIcon);
                    return siteIconUrl ? (
                      <a
                        href={p.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                        title="Visit Website"
                      >
                        <img
                          src={siteIconUrl}
                          alt="Website"
                          className="h-7 w-auto rounded object-cover border border-border/30"
                        />
                      </a>
                    ) : null;
                  })()}
                  {p.playstoreLink && (
                    <a
                      href={p.playstoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105"
                      title="Get it on Google Play"
                    >
                      <img
                        src={gplayBadge}
                        alt="Play Store"
                        className="h-5 w-auto object-contain"
                      />
                    </a>
                  )}
                  {p.appstoreLink && (
                    <a
                      href={p.appstoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105"
                      title="Download on the App Store"
                    >
                      <img
                        src={appstoreBadge}
                        alt="App Store"
                        className="h-5 w-auto object-contain"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
