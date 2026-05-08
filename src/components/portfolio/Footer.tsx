import { Github, Linkedin, Mail } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

const socials = [
  { icon: Github, href: "https://github.com/JeevanGowda03", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jeevan-h-s-270a16266/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:g1hs030405@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <a href="#top" onClick={(e) => smoothScrollTo(e, "#top")} className="font-display text-2xl tracking-tight">
            jeevan<span className="text-primary">.</span>hs
          </a>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Aspiring Software Engineer.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-5 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Jeevan H S. All rights reserved.</span>
          <span>Designed & built with care.</span>
        </div>
      </div>
    </footer>
  );
};
