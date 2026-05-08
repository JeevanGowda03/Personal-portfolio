import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { smoothScrollTo } from "@/lib/smoothScroll";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const sectionIds = links.map((l) => l.id);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds, 140);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    smoothScrollTo(e, href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" onClick={(e) => handleNav(e, "#top")} className="font-display text-2xl tracking-tight">
          jeevan<span className="text-primary">.</span>hs
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 transition-colors ${
                  isActive ? "text-foreground" : "hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#message-form" onClick={(e) => handleNav(e, "#message-form")}>Let's talk</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80"
                aria-label="Open menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[360px]">
              <div className="mt-12 flex flex-col gap-2">
                {links.map((l) => {
                  const isActive = active === l.id;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={(e) => handleNav(e, l.href)}
                      className={`text-2xl font-display py-3 border-b border-border/60 transition-colors ${
                        isActive ? "text-primary" : ""
                      }`}
                    >
                      {l.label}
                    </a>
                  );
                })}
                <Button asChild className="mt-6 rounded-full">
                  <a href="#message-form" onClick={(e) => handleNav(e, "#message-form")}>
                    Let's talk
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
