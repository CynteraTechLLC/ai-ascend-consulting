import { Search, Hammer, RefreshCw, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "We learn your business inside and out, uncovering hidden bottlenecks and identifying precisely where AI can solve your biggest pain points.",
    icon: Search,
  },
  {
    title: "Build & Iterate",
    description: "We build your custom AI solutions in rapid, transparent cycles, allowing you to easily see progress and guide development.",
    icon: Hammer,
  },
  {
    title: "Revise",
    description: "A solution isn't finished until it performs perfectly in the real world. We rigorously test, gather feedback, and refine the system.",
    icon: RefreshCw,
  },
  {
    title: "Maintain & Grow",
    description: "Launching is just the beginning. We provide ongoing support to ensure your infrastructure scales and drives compounding growth.",
    icon: TrendingUp,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Our Methodology
          </p>
          <h2 className="font-display text-4xl font-semibold md:text-5xl text-foreground mb-6">
            From Idea to Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">4 Steps.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            A structured, transparent pathway ensuring every AI integration is fundamentally tethered to your core business objectives and bottom line.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Only visible on large screens) */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

          {/* Uniform Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center group px-4"
              >
                {/* Visual Icon Box */}
                <div className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-secondary/80 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(0,180,216,0.15)]">
                   {/* Step Number Badge */}
                   <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-lg border border-background">
                     {index + 1}
                   </div>
                   <item.icon size={36} className="text-primary/70 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h3 className="mb-4 font-display text-xl font-semibold text-foreground tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-body text-base">
                  {item.description}
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
