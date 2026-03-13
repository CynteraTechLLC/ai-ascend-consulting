import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary"
          >
            <Sparkles size={14} className="animate-pulse-glow" />
            AI-Powered Business Transformation
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            We Build the{" "}
            <span className="text-gradient">Intelligence</span>
            <br />
            Behind Your Business
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            From strategy to deployment — we help enterprises harness AI to drive revenue, 
            reduce costs, and outpace the competition.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://cal.com/cynteratechllc/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="gap-2">
                Schedule a Consultation
                <ArrowRight size={16} />
              </Button>
            </a>
            <Button variant="hero-outline" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-border/50 pt-10"
          >
            {[
              { value: "150+", label: "AI Solutions Deployed" },
              { value: "$2B+", label: "Client Revenue Impact" },
              { value: "98%", label: "Client Retention Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
