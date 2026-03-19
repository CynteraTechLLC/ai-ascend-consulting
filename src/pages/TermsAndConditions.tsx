import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 md:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-8">
          Terms &amp; Conditions
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">Last updated: March 19, 2026</p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
            <p>By accessing or using the services provided by CynteraTech LLC ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
            <p>CynteraTech LLC provides AI consulting, engineering, and related technology services. The specific scope, deliverables, and timelines for any engagement will be outlined in a separate Statement of Work or service agreement.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Intellectual Property</h2>
            <p>Unless otherwise agreed upon in writing, all intellectual property created during an engagement will be assigned to the client upon full payment. CynteraTech LLC retains the right to use general knowledge, skills, and experience gained during the engagement.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of an engagement. This obligation survives the termination of any agreement.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Payment Terms</h2>
            <p>Payment terms will be specified in the applicable Statement of Work or service agreement. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may be subject to interest charges.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, CynteraTech LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Termination</h2>
            <p>Either party may terminate a service engagement with 30 days' written notice. Upon termination, the client shall pay for all services rendered up to the date of termination.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Governing Law</h2>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the state in which CynteraTech LLC is registered, without regard to conflict of law principles.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of the updated terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
            <p>If you have questions about these Terms and Conditions, please contact us at <a href="mailto:cyntera@cynteratech.com" className="text-primary hover:underline">cyntera@cynteratech.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
