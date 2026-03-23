import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 md:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">Last updated: March 19, 2026</p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>CynteraTech LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and other contact details you provide when reaching out to us or booking a consultation.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong className="text-foreground">Cookies:</strong> We may use cookies and similar tracking technologies to enhance your experience on our website.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Send you relevant communications about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our website and delivering our services, subject to confidentiality agreements.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. SMS and Text Messaging</h2>
            <p>All of the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at <a href="mailto:cyntera@cynteratech.com" className="text-primary hover:underline">cyntera@cynteratech.com</a>.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:cyntera@cynteratech.com" className="text-primary hover:underline">cyntera@cynteratech.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
