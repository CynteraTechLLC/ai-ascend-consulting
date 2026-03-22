import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Mapping Your Workflow",
    description: "We map out exactly how your phones ring, how leads come in, and where time is wasted in your daily operations.",
  },
  {
    number: "02",
    title: "Building the Engine",
    description: "We configure the custom AI agents to handle your specific booking rules, pricing, and emergency protocols.",
  },
  {
    number: "03",
    title: "Connecting the Systems",
    description: "We connect the new automation directly to your existing phone numbers, dispatch software, and team calendars.",
  },
  {
    number: "04",
    title: "Monitoring & Scaling",
    description: "We monitor every call and message to ensure the AI sounds professional, captures every lead, and handles emergencies flawlessly.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-background border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[50vh] bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="h-[1px] w-8 bg-primary"></div>
             <p className="text-sm font-semibold uppercase tracking-widest text-primary">
               Methodology
             </p>
             <div className="h-[1px] w-8 bg-primary"></div>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl text-foreground">
            Precision Execution
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed font-body">
            A proven, pragmatic approach to AI integration. We move from theory to production systems in weeks, not years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Continuous connecting line (desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-[2px] bg-border z-0">
             <div className="h-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 w-full"></div>
          </div>

          <div className="grid gap-10 md:gap-6 md:grid-cols-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col md:items-center md:text-center group"
              >
                {/* Step indicator */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-card border border-border/50 shadow-xl group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,180,216,0.2)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                  <span className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors z-10">{step.number}</span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed font-body max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
