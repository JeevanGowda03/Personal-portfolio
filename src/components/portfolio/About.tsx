import { Reveal } from "@/components/Reveal";
import avatarImg from "@/assets/avatar.png";

const stats = [
  { value: "7+", label: "Certifications" },
  { value: "2+", label: "Major projects" },
  { value: "10+", label: "Technologies" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">// About</p>
        </Reveal>

        <div className="mt-6 grid gap-12 md:gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-balance">
                A curious mind, learning by <span className="italic text-primary">building</span>.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 space-y-5 text-lg text-muted-foreground max-w-xl">
                <p>
                  I'm a Computer Science Engineering student with a strong foundation in software
                  development and hands-on experience building web and mobile applications using
                  AI-assisted approaches. I'm currently developing a privacy-focused Expense
                  Tracker using modern technologies.
                </p>
                <p>
                  My interests include AI-driven systems, cloud computing, DevOps, and Android
                  development. I enjoy exploring new tools, experimenting with ideas, and
                  continuously improving my skills.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={240}>
              <div className="group relative aspect-square rounded-[2rem] shadow-soft overflow-hidden transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                <img
                  src={avatarImg}
                  alt="Illustrated avatar of Jeevan H S"
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={300 + i * 80}>
                  <div className="rounded-2xl border border-border bg-card p-4 text-center">
                    <div className="font-display text-3xl text-primary">{s.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
