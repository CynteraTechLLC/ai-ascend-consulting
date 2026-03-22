import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Decades of Business Consulting",
    description: "We bring a deep understanding of corporate strategy. We don't just build software; we architect solutions that align with your overarching business objectives.",
  },
  {
    title: "High-ROI Implementations",
    description: "Technology should drive profitability, not drain it. We meticulously analyze your operations to ensure our integrations deliver massive structural ROI.",
  },
  {
    title: "We Learn Your Business First",
    description: "Effective AI requires context. By immersing ourselves in your daily workflows, we ensure seamless integrations with near-zero learning curves for your team.",
  },
  {
    title: "Production-Grade Engineering",
    description: "We move past the prototype phase, delivering secure, scalable, and maintainable systems designed to handle enterprise-level demands without breaking a sweat.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Why Partner With Us
            </p>
            <h2 className="font-display text-4xl font-semibold md:text-5xl leading-tight">
              Deep Business Insight. <br />
              <span className="text-primary font-normal">Technical Precision.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              We understand that adopting AI isn't an IT initiative—it's a critical business transformation. We leverage decades of hands-on business consulting experience to ensure that every integration we deliver fundamentally improves the way your organization operates.
            </p>
          </motion.div>

          {/* Right */}
          <div className="space-y-8">
            {differentiators.map((item, i) => (
               <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 group"
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CheckCircle2 size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
