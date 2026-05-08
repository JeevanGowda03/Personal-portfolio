import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";

const channels = [
  { icon: Mail, label: "Email", value: "g1hs030405@gmail.com", href: "mailto:g1hs030405@gmail.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jeevan-h-s-270a16266",
    href: "https://www.linkedin.com/in/jeevan-h-s-270a16266/",
  },
  { icon: Github, label: "GitHub", value: "github.com/JeevanGowda03", href: "https://github.com/JeevanGowda03" },
];

const MY_EMAIL = "g1hs030405@gmail.com";

// Force-navigate even when inside a preview iframe (which can block
// in-frame top-level navigations like mailto: and downloads).
const openExternal = (href: string) => {
  try {
    const win = window.open(href, "_blank", "noopener,noreferrer");
    if (!win) {
      // Popup blocked — fall back to top-level navigation.
      window.top ? (window.top.location.href = href) : (window.location.href = href);
    }
  } catch {
    window.location.href = href;
  }
};


export const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    // Build a mailto link — opens the user's email client instantly with the
    // message pre-filled. No backend, no loading state, no delay.
    const subject = `Portfolio enquiry from ${name || "a visitor"}`;
    const body = `Hi Jeevan,\n\n${message}\n\n— ${name}\n${email}`;
    const mailto = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Trigger navigation synchronously — this is what makes most browsers
    // hand the request straight to the OS email client without delay.
    window.location.href = mailto;

    // Copy the address as a graceful fallback in case no client is set up.
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(MY_EMAIL).catch(() => {});
    }

    toast.success("Opening your email app — your message is ready to send.");
    form.reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">// Contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-3xl text-balance">
            Have an idea? Let's <span className="italic text-primary">make it</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:gap-16 md:grid-cols-2">
          <div>
            <Reveal delay={120}>
              <p className="text-muted-foreground max-w-md">
                I'm always open to chats about projects, internships, or just trading ideas.
                Drop a line on any of the channels below — or send a message right here.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="mt-10 font-display text-2xl md:text-3xl tracking-tight">
                Connect with me
              </h3>
            </Reveal>

            <div className="mt-6 space-y-3">
              {channels.map((c, i) => {
                const Icon = c.icon;
                const isMail = c.href.startsWith("mailto:");
                return (
                  <Reveal key={c.label} delay={160 + i * 80}>
                    <a
                      href={c.href}
                      target={isMail ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={c.label}
                      onClick={(e) => {
                        // Guarantee navigation even when an ancestor
                        // (e.g. preview iframe) blocks the default action.
                        e.preventDefault();
                        e.stopPropagation();
                        openExternal(c.href);
                      }}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground">
                            {c.label}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-foreground" />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={200}>
            <form
              id="message-form"
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft scroll-mt-24"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Your name
                  </label>
                  <Input id="name" name="name" required placeholder="Ada Lovelace" className="mt-2 h-12 rounded-xl bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="you@domain.com" className="mt-2 h-12 rounded-xl bg-background" />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me a little about your idea…"
                    className="mt-2 min-h-[140px] rounded-xl bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full h-12 shadow-soft hover:shadow-lift transition-shadow"
                >
                  Send message <Send className="ml-1" />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
