import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { smoothScrollTo } from "@/lib/smoothScroll";

export const Hero = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const canDownloadSecurely =
    typeof window !== "undefined" &&
    (window.location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(window.location.hostname));

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
      {/* gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-gradient-blob blur-3xl animate-blob-drift" />
        <div
          className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-blob blur-3xl animate-blob-drift"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="container">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for collaborations & internships
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-balance text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tight">
            Jeevan <span className="italic text-primary">H S</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 font-display text-2xl md:text-4xl text-foreground/80 tracking-tight">
            Aspiring Software Engineer
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground text-balance">
            Turning ideas into practical applications while constantly learning and improving.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-7 h-12 shadow-soft hover:shadow-lift transition-shadow">
              <a href="#projects" onClick={(e) => smoothScrollTo(e, "#projects")}>
                View Projects
                <ArrowUpRight className="ml-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7 h-12 bg-card/60 backdrop-blur">
              <a href="#message-form" onClick={(e) => smoothScrollTo(e, "#message-form")}>Contact Me</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="rounded-full px-7 h-12 shadow-soft hover:shadow-lift transition-shadow">
              <a
                href={resumeUrl}
                target={canDownloadSecurely ? undefined : "_blank"}
                rel={canDownloadSecurely ? undefined : "noopener noreferrer"}
                download={canDownloadSecurely ? "Jeevan-HS-Resume.pdf" : undefined}
                aria-label={canDownloadSecurely ? "Download resume PDF" : "Open resume PDF"}
              >
                <Download className="mr-1" />
                Download Resume
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <a
            href="#about"
            onClick={(e) => smoothScrollTo(e, "#about")}
            className="mt-20 md:mt-28 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="h-px w-10 bg-current" />
            Scroll to explore
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
