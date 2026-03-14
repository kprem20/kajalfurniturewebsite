import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Basic section heading since it might not be exported from home.tsx
function SectionHeading({ title, subtitle }: { title: string; subtitle: string; }) {
  return (
    <div className="text-center mb-16">
      <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
        {title}
      </h2>
      <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
    </div>
  );
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main className="pt-24 pb-12">
        <section id="terms" className="py-12 bg-background relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Terms of Service" subtitle="Using Our Platform" />
            <div className="text-muted-foreground mt-8 space-y-6 leading-relaxed">
              <p className="text-lg">Welcome to Kajal Furniture. By using our website and services, you agree to comply with and be bound by the following terms.</p>
              
              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Website Usage</h3>
              <p>Our website is intended to showcase our premium wooden furniture collections and allow you to submit inquiries. You agree to use this site only for lawful purposes.</p>

              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Product Information & Custom Variations</h3>
              <p>As our furniture is crafted from authentic wood and tailored to your needs, natural variations in grain, color, and finish may occur. These are characteristics of premium wood and not defects. Custom furniture designs may vary slightly from the representations shown on our website.</p>
              
              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pricing</h3>
              <p>Please note that final pricing may vary depending on the level of customization, chosen materials, and specific dimensions requested. All quotes provided during inquiries are estimates until finalized into a direct order.</p>

              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Order Confirmation</h3>
              <p>Submitting an inquiry through our website, WhatsApp, or phone does <strong>not</strong> guarantee order confirmation. Orders are only confirmed once a formal agreement and advance payment have been securely arranged with us directly.</p>

              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contact Information</h3>
              <p>For any clarification regarding these terms, please reach out to us:</p>
              <ul className="list-none space-y-3 mt-4 bg-secondary/30 p-6 rounded-xl border border-border shadow-sm">
                <li><strong className="text-foreground">Business Name:</strong> Kajal Furniture</li>
                <li><strong className="text-foreground">Owner:</strong> Dharmbir Sharma</li>
                <li><strong className="text-foreground">Phone:</strong> +91 9090169593</li>
                <li><strong className="text-foreground">Address:</strong> Shop No. 24, Sector-4, C.T. Market, Rourkela – 769002, Odisha, India</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
