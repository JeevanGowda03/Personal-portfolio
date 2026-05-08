import { Reveal } from "@/components/Reveal";

const items = [
  {
    date: "Internship",
    title: "RPA Intern",
    issuer: "Employability.life · Remote",
    note: "Built AI-enabled Intelligent RPA solutions with UiPath — automating invoice processing, email workflows and Excel-based business operations.",
  },
  {
    date: "Certification",
    title: "AI-Enabled Intelligent RPA",
    issuer: "Employability.life",
    note: "Hands-on training in designing intelligent automation workflows with UiPath.",
  },
  {
    date: "Certification",
    title: "Introduction to Machine Learning",
    issuer: "IBM",
    note: "Foundations of supervised, unsupervised learning and real-world ML applications.",
  },
  {
    date: "Certification",
    title: "Java Programming",
    issuer: "Infosys Springboard",
    note: "Core Java, OOP principles and collections of programming patterns.",
  },
  {
    date: "Certification",
    title: "Classical Cryptosystems",
    issuer: "University of Colorado · Coursera",
    note: "Studied historical ciphers and the building blocks of modern cryptography.",
  },
  {
    date: "Certification",
    title: "Introduction to Applied Cryptography",
    issuer: "University of Colorado · Coursera",
    note: "Practical cryptography — symmetric/asymmetric encryption, hashing and key exchange.",
  },
  {
    date: "Certification",
    title: "Google AI Essentials",
    issuer: "Google · Coursera",
    note: "Specialization covering practical AI skills, prompt design and responsible AI use in everyday workflows.",
  },
  {
    date: "Certification",
    title: "Google Prompting Essentials",
    issuer: "Google Skills",
    note: "Hands-on course on crafting effective prompts to get the best results from generative AI tools.",
  },
  {
    date: "Currently",
    title: "Currently Learning",
    issuer: "Self-directed",
    note: "DevOps & APIs, Cloud computing, AI models and AI integration in applications.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">// Experience</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight leading-[1.05] max-w-2xl text-balance">
            A <span className="italic text-primary">learning</span> timeline.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />

          <ol className="space-y-10 md:space-y-16">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={80 + i * 80} as="li">
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="text-sm text-primary font-medium">{it.date}</div>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl tracking-tight">{it.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{it.issuer}</div>
                    <p className="mt-3 text-muted-foreground max-w-md md:inline-block">{it.note}</p>
                  </div>
                  <div className="hidden md:block" />

                  <span className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
