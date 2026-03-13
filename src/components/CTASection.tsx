import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-10 md:p-16 text-center"
        >
          {/* Glow bg */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Ready to Put AI
              <br />
              <span className="text-gradient">to Work?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Let's discuss how AI can transform your business. Book a free 30-minute strategy 
              session with one of our senior consultants.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="https://cal.com/cynteratechllc/30min" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-2">
                  Book Your Free Session
                  <ArrowRight size={16} />
                </Button>
              </a>
              <a href="mailto:cyntera@cynteratech.com">
                <Button variant="hero-outline" size="lg">
                  cyntera@cynteratech.com
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
