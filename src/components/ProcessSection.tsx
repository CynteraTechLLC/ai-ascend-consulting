import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", description: "Deep-dive into your business, data, and goals to identify the highest-impact AI opportunities." },
  { number: "02", title: "Strategy", description: "A tailored AI roadmap with clear milestones, KPIs, and a phased implementation plan." },
  { number: "03", title: "Build & Iterate", description: "Rapid development cycles with continuous stakeholder feedback and rigorous testing." },
  { number: "04", title: "Deploy & Scale", description: "Production deployment with monitoring, optimization, and ongoing support." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Our Process
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            From Insight to Impact
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="font-display text-5xl font-bold text-primary/10">{step.number}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-8 bg-border lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
