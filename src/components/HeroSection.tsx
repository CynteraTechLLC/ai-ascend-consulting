import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#00B4D8"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom polished easing
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Aurora Ambient Glow - Sophisticated, not overwheming */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-primary/10 blur-[130px] rounded-full mix-blend-screen pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />

      {/* Grid Vignette / Fade out edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground shadow-[0_0_15px_rgba(0,180,216,0.1)] glass-panel backdrop-blur-md">
              <Cpu size={14} className="text-primary" />
              <span className="opacity-90 tracking-wide uppercase text-xs">Decades of Strategy & IT Experience</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl text-foreground drop-shadow-sm" 
          >
            AI Consulting & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-primary to-gray-200 pb-2 inline-block">Systems Integration</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body"
          >
            We learn the intricacies of your business to design and implement high-ROI AI solutions. We bridge the gap between complex technology and measurable corporate outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <div className="group relative w-full sm:w-auto">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/60 to-primary/20 opacity-30 blur transition duration-500 group-hover:opacity-60"></div>
              <Button 
                data-cal-namespace=""
                data-cal-link="cynteratechllc/30min"
                data-cal-config='{"layout":"month_view"}'
                size="lg" 
                className="relative w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent h-14 px-8 text-base font-medium tracking-wide transition-all"
              >
                Schedule Consultation
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <a href="/#services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto glass-panel border-white/10 hover:border-white/20 text-foreground hover:bg-white/5 h-14 px-8 text-base font-medium tracking-wide transition-colors duration-300">
                Explore Our Process
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
