import {
  Code2,
  Coffee,
  Braces,
  FileType,
  Palette,
  Atom,
  Server,
  Database,
  GitBranch,
  Github,
  Terminal,
  Smartphone,
  Cloud,
  Workflow,
  Sparkles,
  RefreshCw,
  Bot,
  Brain,
  MousePointer2,
  Wand2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const groups = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: Coffee },
      { name: "Python", icon: Code2 },
    ],
  },
  {
    title: "Web Technologies",
    items: [
      { name: "HTML", icon: FileType },
      { name: "CSS", icon: Palette },
      { name: "React.js", icon: Atom },
      { name: "JavaScript", icon: Braces },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: Terminal },
      { name: "Android Studio", icon: Smartphone },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "Claude", icon: Sparkles },
      { name: "Cursor", icon: MousePointer2 },
      { name: "ChatGPT", icon: Bot },
      { name: "GitHub Copilot", icon: Wand2 },
      { name: "Gemini", icon: Brain },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "REST APIs", icon: Workflow },
      { name: "SDLC", icon: RefreshCw },
      { name: "Agile / Scrum", icon: RefreshCw },
      { name: "Cloud Computing", icon: Cloud },
      { name: "AI-assisted Dev", icon: Sparkles },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">// Skills</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-2xl text-balance">
            Tools I reach for, <span className="italic text-primary">daily</span>.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {groups.map((group, gi) => (
            <div key={group.title}>
              <Reveal delay={120}>
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                  {group.title}
                </h3>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                {group.items.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.name} delay={160 + i * 50 + gi * 80}>
                      <div className="group rounded-2xl border border-border bg-card p-5 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary/40">
                        <div className="h-10 w-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium">{s.name}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
