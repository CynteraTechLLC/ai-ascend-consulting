import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, CheckCircle, Calendar, Bot, CalendarDays, Zap, Clock, Compass, MessageSquare } from "lucide-react";
import { z } from "zod";
import { getCalApi } from "@calcom/embed-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  website: z.string().trim().max(255).optional(),
  services: z.array(z.string()).min(1, "Select at least one service"),
  timeline: z.string().min(1, "Select a timeline"),
  challenge: z.string().trim().min(1, "Please describe your challenge").max(2000),
  budget: z.string().min(1, "Select an estimated budget"),
});

type ContactForm = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  { label: "24/7 Phone Agent", value: "phone_agent", icon: Bot },
  { label: "Automated Booking", value: "auto_booking", icon: CalendarDays },
  { label: "Alert Routing", value: "alert_routing", icon: Zap },
  { label: "Lead Follow-Up", value: "lead_followup", icon: MessageSquare },
];

const TIMELINE_OPTIONS = [
  { label: "ASAP", value: "asap", icon: Zap },
  { label: "1-3 months", value: "1_3_months", icon: Clock },
  { label: "3-6 months", value: "3_6_months", icon: CalendarDays },
  { label: "Exploring", value: "exploring", icon: Compass },
];

const BUDGET_OPTIONS = [
  { label: "Under $5k", value: "under_5k" },
  { label: "$5k - $15k", value: "5k_15k" },
  { label: "$15k - $30k", value: "15k_30k" },
  { label: "$30k+", value: "30k_plus" },
];

const CTASection = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "", email: "", website: "", services: [], timeline: "", challenge: "", budget: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#00B4D8"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleService = (service: string) => {
    setForm((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      if (errors.services && services.length > 0) setErrors((e) => ({ ...e, services: undefined }));
      return { ...prev, services };
    });
  };

  const selectSingle = (field: 'timeline' | 'budget', value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const subject = encodeURIComponent(`Consultation Request: ${result.data.name}`);
    const bodyText = `
Name: ${result.data.name}
Email: ${result.data.email}
Website: ${result.data.website || "N/A"}

Services: ${result.data.services.join(", ")}
Timeline: ${result.data.timeline}
Budget: ${result.data.budget}

Challenge:
${result.data.challenge}
    `.trim();

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:cyntera@cynteratech.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid gap-16 lg:grid-cols-12">
            
            {/* Left — CTA copy */}
            <div className="lg:col-span-4 flex flex-col justify-start pt-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Accepting New Clients
              </div>
              
              <h2 className="font-display text-4xl font-bold md:text-5xl text-foreground mb-6 leading-tight">
                Stop missing calls.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white text-glow">Start automating.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-body mb-10">
                Tell us about your biggest bottleneck, and we’ll show you exactly how an AI system can solve it.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="group relative w-full sm:w-auto">
                  <div className="absolute -inset-1 rounded-lg bg-primary/30 blur transition duration-500 group-hover:bg-primary/50"></div>
                  <Button 
                    data-cal-namespace=""
                    data-cal-link="cynteratechllc/30min"
                    data-cal-config='{"layout":"month_view"}'
                    size="lg" 
                    className="relative w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg font-semibold uppercase tracking-wide gap-2 border border-primary/50"
                  >
                    <Calendar size={18} />
                    Direct Booking
                  </Button>
                </div>
                <p className="text-sm text-center text-muted-foreground mt-2">Skip the form? Schedule directly.</p>
              </div>
            </div>

            {/* Right — Detailed Contact Form */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-white/10 bg-card/40 backdrop-blur-3xl p-8 md:p-12 shadow-2xl relative">
                {/* subtle border beam effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
                
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center text-center gap-4 py-20">
                    <CheckCircle className="h-16 w-16 text-primary" />
                    <h3 className="font-display text-3xl font-semibold text-foreground">
                      Request Received
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      Your comprehensive application has been formulated. Our intelligence architects will be in touch shortly.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", website: "", services: [], timeline: "", challenge: "", budget: "" });
                      }}
                      className="border-white/20 hover:bg-white/10"
                    >
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">Name <span className="text-primary">*</span></label>
                        <input
                          name="name" type="text" value={form.name} onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/80 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all"
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">Email <span className="text-primary">*</span></label>
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/80 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all"
                          placeholder="you@company.com"
                        />
                        {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Website URL <span className="text-muted-foreground font-normal">(optional)</span></label>
                      <input
                        name="website" type="text" value={form.website} onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/80 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all"
                        placeholder="https://yourcompany.com"
                      />
                    </div>

                    {/* Services */}
                    <div>
                      <label className="mb-3 block text-sm font-medium text-foreground">Services of Interest <span className="text-primary">*</span></label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SERVICE_OPTIONS.map((opt) => {
                          const isSelected = form.services.includes(opt.value);
                          return (
                            <button
                              key={opt.value} type="button" onClick={() => toggleService(opt.value)}
                              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all ${isSelected ? 'border-primary bg-primary/10 text-primary shadow-[0_0_10px_rgba(0,180,216,0.1)]' : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10'}`}
                            >
                              <opt.icon size={18} className={isSelected ? 'text-primary' : 'text-muted-foreground/70'} />
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                      {errors.services && <p className="mt-2 text-xs text-destructive">{errors.services}</p>}
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="mb-3 block text-sm font-medium text-foreground">Project Timeline <span className="text-primary">*</span></label>
                      <div className="flex flex-wrap gap-3">
                        {TIMELINE_OPTIONS.map((opt) => {
                          const isSelected = form.timeline === opt.value;
                          return (
                            <button
                              key={opt.value} type="button" onClick={() => selectSingle('timeline', opt.value)}
                              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${isSelected ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10'}`}
                            >
                              <opt.icon size={16} className={isSelected ? 'text-primary' : 'text-muted-foreground/70'} />
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                      {errors.timeline && <p className="mt-2 text-xs text-destructive">{errors.timeline}</p>}
                    </div>

                    {/* Challenge */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Primary Business Challenge <span className="text-primary">*</span></label>
                      <textarea
                        name="challenge" value={form.challenge} onChange={handleChange} rows={4}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-primary/80 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all resize-none"
                        placeholder="Tell us about the biggest challenge you'd like AI to solve..."
                      />
                      {errors.challenge && <p className="mt-1.5 text-xs text-destructive">{errors.challenge}</p>}
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="mb-3 block text-sm font-medium text-foreground">Estimated Budget <span className="text-primary">*</span></label>
                      <div className="flex flex-wrap gap-3">
                        {BUDGET_OPTIONS.map((opt) => {
                          const isSelected = form.budget === opt.value;
                          return (
                            <button
                              key={opt.value} type="button" onClick={() => selectSingle('budget', opt.value)}
                              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${isSelected ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10'}`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                      {errors.budget && <p className="mt-2 text-xs text-destructive">{errors.budget}</p>}
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full text-base font-semibold tracking-wide bg-[#C05621] hover:bg-[#9C4221] text-white h-14 rounded-xl shadow-lg border-none group transition-all">
                        Book Your Free Consultation
                        <Send size={18} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
