import { useMemo, useState } from "react";
import { ArrowUpRight, Github, ExternalLink, X, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import expenseTrackerImg from "@/assets/projects/expense-tracker.jpg";
import ecommerceImg from "@/assets/projects/ecommerce.jpg";
import aiWorkflowImg from "@/assets/projects/ai-workflow.jpg";

type Category = "AI-Assisted" | "Web" | "App" | "Automation";

interface PromptTemplate {
  label: string;
  prompt: string;
}

interface WorkflowStep {
  title: string;
  tool: string;
  detail: string;
}

interface Project {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  stack: string[];
  outcomes: string[];
  image: string;
  categories: Category[];
  github?: string;
  demo?: string;
  workflow?: WorkflowStep[];
  prompts?: PromptTemplate[];
}

const projects: Project[] = [
  {
    title: "Expense Tracker Application",
    tagline: "Privacy-focused PWA & mobile app",
    description:
      "Privacy-focused expense tracker built as both a PWA and mobile app and currently in its prelaunch stage. Integrated data visualization, local notifications, and export functionality for PDF\nand Excel reports.",
    longDescription:
      "An offline-first personal finance tool designed around privacy: all data stays on the device. Built as a Progressive Web App and packaged for Android via Capacitor. Features include category budgeting, recurring transactions, multi-currency support, charts/analytics, and CSV export.",
    stack: ["JavaScript", "React", "Capacitor", "Local Storage", "Chart.js"],
    outcomes: [
      "100% offline functionality with zero backend dependency",
      "Installable on Android and as a PWA on desktop",
      "Intuitive analytics dashboard with category breakdowns",
    ],
    image: expenseTrackerImg,
    categories: ["App", "AI-Assisted"],
    github: "https://github.com/JeevanGowda03",
  },
  {
    title: "E-Commerce Platform",
    tagline: "Full-stack MERN marketplace",
    description:
      "Full-stack MERN e-commerce app with secure auth, integrated payments and an admin dashboard.",
    longDescription:
      "A complete e-commerce solution built collaboratively. Customers can browse products, manage carts, and check out securely with Stripe or Razorpay. Admins manage products, inventory and orders through a dedicated dashboard. JWT-based authentication and role-based access control throughout.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Razorpay"],
    outcomes: [
      "End-to-end checkout with Stripe & Razorpay integration",
      "Admin dashboard for products, orders and users",
      "Secure JWT auth with role-based permissions",
    ],
    image: ecommerceImg,
    categories: ["Web"],
    github: "https://github.com/JeevanGowda03/e-commerce-platform",
  },
  {
    title: "AI-Assisted Dev Workflow",
    tagline: "Claude + Cursor productivity pipeline",
    description:
      "A personal development workflow combining Claude and Cursor to plan, scaffold, refactor and ship features faster — from idea to PR.",
    longDescription:
      "An end-to-end AI-assisted coding workflow I built and refined while shipping real projects. Claude handles high-level planning, architecture decisions and long-form reasoning; Cursor drives in-editor edits, multi-file refactors and inline code generation, while GitHub Copilot fills in repetitive boilerplate. The workflow includes prompt templates, review checklists and guardrails to keep AI output reliable, reviewed and production-ready.",
    stack: ["Claude", "Cursor", "GitHub Copilot", "VS Code", "Git"],
    outcomes: [
      "Cut feature build time significantly via structured prompting",
      "Reusable prompt templates for planning, refactors and reviews",
      "Consistent code quality with AI-assisted review checklists",
    ],
    image: aiWorkflowImg,
    categories: ["AI-Assisted", "Automation"],
    github: "https://github.com/JeevanGowda03",
    workflow: [
      {
        title: "Plan & Scope",
        tool: "Claude",
        detail:
          "Draft requirements, break down the feature into atomic tasks and pick an architecture before any code is written.",
      },
      {
        title: "Implement & Refactor",
        tool: "Cursor",
        detail:
          "Multi-file edits, targeted refactors and inline generation directly in the editor with full repo context.",
      },
      {
        title: "Boilerplate & Tests",
        tool: "GitHub Copilot",
        detail:
          "Auto-complete repetitive code, type definitions and unit tests while keeping the human in the loop.",
      },
      {
        title: "Review & Ship",
        tool: "Claude",
        detail:
          "AI-assisted diff review against a checklist (security, a11y, perf), then commit and open a clean PR.",
      },
    ],
    prompts: [
      {
        label: "Planning prompt",
        prompt:
          "You are my senior engineering partner. Given this feature request: <X>, produce: 1) clarifying questions, 2) a minimal architecture, 3) an atomic task list with file paths, 4) risks and edge cases.",
      },
      {
        label: "Refactor prompt",
        prompt:
          "Refactor <file> for readability and reuse. Preserve behaviour, keep public API stable, extract pure helpers, and explain each non-trivial change in 1 line.",
      },
      {
        label: "Review prompt",
        prompt:
          "Review this diff as a strict reviewer. Flag: security, a11y, performance, dead code, naming, and missing tests. Reply as a checklist with severity (low/med/high).",
      },
    ],
  },
];

const FILTERS: ("All" | Category)[] = ["All", "AI-Assisted", "Web", "App", "Automation"];

export const Projects = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [filter, setFilter] = useState<"All" | Category>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  const active = activeKey ? projects.find((p) => p.title === activeKey) ?? null : null;
  const activeNumber = active ? projects.findIndex((p) => p.title === active.title) + 1 : 0;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">// Major Projects</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-2xl text-balance">
                Things I've <span className="italic text-primary">shipped</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="text-muted-foreground max-w-sm">
              A selection of side-projects and explorations — some polished, some experiments.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mt-10 flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(f)}
                  className={`text-xs md:text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-foreground/80 border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={120 + i * 70}>
              <article className="group h-full rounded-3xl border border-border bg-card overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-lift hover:border-primary/40">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-warm">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 text-xs font-medium text-foreground/70 px-3 py-1 rounded-full bg-card/80 backdrop-blur border border-border/60">
                    0{projects.findIndex((x) => x.title === p.title) + 1}
                  </div>
                  <div className="absolute top-4 right-4 flex flex-wrap gap-1.5 max-w-[60%] justify-end">
                    {p.categories.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-card/80 backdrop-blur border border-border/60 text-foreground/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center border border-border/60 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Button
                      type="button"
                      onClick={() => setActiveKey(p.title)}
                      variant="ghost"
                      size="sm"
                      className="rounded-full -ml-3 group/btn"
                    >
                      View Project
                      <ArrowUpRight className="ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActiveKey(null)}>
        <DialogContent className="max-w-2xl rounded-3xl border-border p-0 overflow-hidden gap-0 [&>button]:hidden">
          {active && (
            <>
              <div className="relative aspect-[16/8] bg-gradient-warm overflow-hidden">
                <img
                  src={active.image}
                  alt={`${active.title} preview`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <button
                  onClick={() => setActiveKey(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-card/80 backdrop-blur border border-border/60 flex items-center justify-center text-foreground hover:bg-card transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-6 text-xs font-medium text-foreground/80 px-3 py-1 rounded-full bg-card/80 backdrop-blur border border-border/60">
                  0{activeNumber} — {active.tagline}
                </div>
              </div>

              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
                <DialogHeader className="text-left space-y-2">
                  <DialogTitle className="font-display text-3xl md:text-4xl tracking-tight">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                    {active.longDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Tech stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {active.workflow && (
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Workflow timeline
                    </p>
                    <ol className="mt-4 relative border-l border-border/70 pl-6 space-y-5">
                      {active.workflow.map((step, idx) => (
                        <li key={step.title} className="relative">
                          <span className="absolute -left-[31px] top-0.5 h-6 w-6 rounded-full bg-primary text-primary-foreground text-[11px] font-medium flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <div className="flex flex-wrap items-baseline gap-2">
                            <h4 className="font-medium text-foreground">{step.title}</h4>
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                              {step.tool}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {step.detail}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {active.prompts && (
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      Prompt templates
                    </p>
                    <div className="mt-4 space-y-3">
                      {active.prompts.map((p) => (
                        <div
                          key={p.label}
                          className="rounded-2xl border border-border bg-accent/40 p-4"
                        >
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            <p className="text-xs font-medium tracking-wide text-foreground/80">
                              {p.label}
                            </p>
                          </div>
                          <pre className="mt-2 text-xs leading-relaxed text-foreground/80 whitespace-pre-wrap font-mono">
{p.prompt}
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Outcomes</p>
                  <ul className="mt-3 space-y-2">
                    {active.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {active.github && (
                    <Button asChild className="rounded-full">
                      <a href={active.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1" /> View on GitHub
                      </a>
                    </Button>
                  )}
                  {active.demo && (
                    <Button asChild variant="outline" className="rounded-full bg-card">
                      <a href={active.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
