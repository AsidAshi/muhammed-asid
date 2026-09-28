import { useState, type FormEvent } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative px-6 py-15">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              05 — Contact
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Let's build something <span className="text-gradient">remarkable.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              I’m always open to interesting projects and collaborations. Whether you want to bounce around ideas, I’d love to hear you.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9656422678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>asidashi98@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kerala, India</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7">
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
              </div>
              <div className="mt-5">
                <Field label="phone" name="phone" placeholder="+91 9656 422 678" />
              </div>
              <div className="mt-5">
                <Field label="Company" name="company" placeholder="Acme Inc." />
              </div>
              <div className="mt-5">
                <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about what you're building…"
                  className="w-full resize-none rounded-xl border border-border bg-background/30 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-all hover:shadow-glow disabled:opacity-70"
              >
                {sent ? (
                  "Message sent — talk soon."
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/30 px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/50 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
