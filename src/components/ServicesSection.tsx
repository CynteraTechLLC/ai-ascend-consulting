import { Bot, Network, Database, Compass } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Agents",
    description: "Custom autonomous agents that handle your busywork — from lead gen to customer support — so you can focus on massive growth without adding headcount.",
    icon: Bot,
  },
  {
    title: "Automated Workflows",
    description: "Intelligent workflows connecting 400+ apps that save hours every single week. No more manual data entry or relentless copy-pasting between your software tools.",
    icon: Network,
  },
  {
    title: "RAG Systems",
    description: "AI that actually knows your business data. Custom knowledge bases, intelligent search, and secure document Q&A that provide definitive, real answers instead of guesses.",
    icon: Database,
  },
  {
    title: "AI Strategy",
    description: "Clear, structural roadmaps for AI adoption. We deeply audit your existing tech stack, identify high-impact integration opportunities, and build a highly precise implementation plan.",
    icon: Compass,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-secondary/10 overflow-hidden border-t border-white/5">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Core Capabilities
            </p>
            <h2 className="font-display text-4xl font-semibold md:text-5xl text-foreground mb-6">
              AI Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Scale.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-body">
              We replace fragmented manual tasks with cohesive, autonomous systems. Stop paying thousands for software that requires your team to do all the heavy lifting.
            </p>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col border border-white/5 hover:border-white/10 transition-colors duration-500 bg-white/[0.02]"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                
                <h3 className="mb-3 font-display text-2xl font-semibold text-foreground tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-body text-base">
                  {item.description}
                </p>
              </div>
              
              {/* Subtle inset hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
