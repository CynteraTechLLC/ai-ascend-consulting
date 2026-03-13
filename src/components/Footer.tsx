const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a href="#" className="font-display text-lg font-bold tracking-tight">
              <span className="text-gradient">Nexus</span>AI
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              AI Consulting & Engineering
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NexusAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
