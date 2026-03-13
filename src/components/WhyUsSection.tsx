import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Deep Technical Expertise",
    description: "Our team includes PhDs, ex-FAANG engineers, and domain specialists who've shipped AI at scale.",
  },
  {
    title: "Industry-Specific Solutions",
    description: "We don't do generic. Every solution is purpose-built for your industry's unique challenges and regulations.",
  },
  {
    title: "Measurable ROI Focus",
    description: "Every engagement starts with clear KPIs. If it doesn't drive business value, we don't build it.",
  },
  {
    title: "Production-Grade Delivery",
    description: "We go beyond POCs. Our solutions are built for scale, security, and long-term maintainability.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Why Nexus AI
            </p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Not Another AI Vendor.
              <br />
              <span className="text-gradient">Your Strategic Partner.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We embed with your team, understand your business inside-out, and deliver AI solutions 
              that create lasting competitive advantage.
            </p>
          </motion.div>

          {/* Right */}
          <div className="space-y-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle2 size={20} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
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
