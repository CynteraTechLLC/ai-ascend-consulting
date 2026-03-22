import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a href="/" className="font-display text-lg font-bold tracking-tight text-foreground">
              Cyntera<span className="text-primary">Tech</span>
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              AI Consulting &amp; Engineering
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="/#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="/#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms &amp; Conditions</a>
          </div>
          
          <p className="order-last md:order-none text-xs">© {new Date().getFullYear()} CynteraTech LLC. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="https://x.com/CynteraTech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
              <span>Follow on X</span>
            </a>
            <a href="https://www.linkedin.com/in/cynteratech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
              <Linkedin size={16} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
