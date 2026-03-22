import { Search, Map, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Strategic Discovery",
    description: "We invest time in deeply understanding your organization's unique workflows, bottlenecks, and objectives to identify high-ROI automation opportunities.",
    icon: Search,
    className: "md:col-span-2 md:row-span-2",
    features: ["Deep-dive business analysis", "Identifying operational friction", "ROI forecasting and feasibility"],
    visual: (
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-[0.03] pointer-events-none transition-opacity duration-700 group-hover:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tl from-primary to-transparent" />
        <div className="w-full h-full border-t border-l border-primary/40 rounded-tl-[100px]" />
      </div>
    ),
  },
  {
    title: "AI Strategy & Roadmap",
    description: "Developing a comprehensive, phased plan for integrating AI into your company without disrupting critical daily operations.",
    icon: Map,
    className: "md:col-span-1",
    features: ["Phased implementation planning", "Technology stack evaluation"],
  },
  {
    title: "Systems Integration",
    description: "Seamlessly engineering and embedding AI models, agents, and automations directly into your existing infrastructure and business systems.",
    icon: Cpu,
    className: "md:col-span-1",
    features: ["Custom automation pipelines", "Secure architectural design"],
  },
  {
    title: "Ongoing Maintenance & Partnership",
    description: "A continuous partnership to monitor performance, optimize algorithms, and adapt your AI infrastructure as your business scales and technology evolves.",
    icon: ShieldCheck,
    className: "md:col-span-3",
    features: ["Performance monitoring", "Continuous optimizations", "Structural support & scaling"],
    visual: (
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none overflow-hidden transition-opacity duration-700 group-hover:opacity-10">
         <div className="w-full h-full grid-pattern" />
      </div>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Our Methodology
            </p>
            <h2 className="font-display text-4xl font-semibold md:text-5xl text-foreground mb-6">
              The Four Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Integration.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              We approach AI not as a novelty, but as a critical business infrastructure. Our four-pillar methodology ensures that every solution we integrate drives measurable, bottom-line results.
            </p>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-8 group relative overflow-hidden flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors duration-500 bg-white/[0.02] ${item.className}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-primary/20">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                
                <h3 className="mb-3 font-display text-2xl font-semibold text-foreground tracking-tight">
                  {item.title}
                </h3>
                
                <p className="mb-6 text-muted-foreground leading-relaxed font-body flex-grow text-sm md:text-base">
                  {item.description}
                </p>

                {item.features && (
                  <ul className="space-y-2 mt-auto">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              {/* Subtle inset hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              
              {item.visual}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
