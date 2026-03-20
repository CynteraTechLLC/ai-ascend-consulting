import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary"
          >
            <Zap size={14} />
            AI Consulting &amp; Engineering
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            We Build the{" "}
            <span className="text-primary">Intelligence</span>
            <br />
            Behind Your Business
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl leading-relaxed">
            From strategy to deployment — we help enterprises harness AI to drive revenue,
            reduce costs, and outpace the competition.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://cal.com/cynteratechllc/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="gap-2">
                Schedule a Consultation
                <ArrowRight size={16} />
              </Button>
            </a>
            <a href="/#services">
              <Button variant="outline" size="lg">
                See Our Services
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
