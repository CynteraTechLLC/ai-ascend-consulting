import { motion } from "framer-motion";
import { Brain, Workflow, BarChart3, Shield, Cpu, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmap",
    description: "We assess your operations, identify high-impact AI opportunities, and build a phased implementation roadmap.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Intelligent automation that eliminates bottlenecks, reduces manual effort, and scales with your business.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Turn your data into foresight. Custom ML models that forecast trends, risks, and opportunities.",
  },
  {
    icon: Cpu,
    title: "Custom AI Development",
    description: "Purpose-built AI solutions — from NLP engines to computer vision systems tailored to your industry.",
  },
  {
    icon: Shield,
    title: "AI Governance & Ethics",
    description: "Responsible AI frameworks ensuring compliance, fairness, and transparency across all deployments.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "From concept to working prototype in weeks. Validate AI ideas fast before committing to full builds.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            End-to-End AI Consulting
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We don't just advise — we architect, build, and deploy. Our services span the full 
            AI lifecycle from strategy through production.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-lg border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:glow-border"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <service.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
