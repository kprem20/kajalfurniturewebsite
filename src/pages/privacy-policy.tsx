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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main className="pt-24 pb-12">
        <section id="privacy" className="py-12 bg-secondary/30 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Privacy Policy" subtitle="Your Data Matters" />
            <div className="text-muted-foreground mt-8 space-y-6 leading-relaxed">
              <p className="text-lg">At Kajal Furniture, we value your privacy and are committed to protecting your personal information.</p>
              
              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Information We Collect</h3>
              <p>We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products. This includes your name, phone number, and any inquiry messages you submit through our contact forms or direct communications.</p>
              
              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">How We Use Your Information</h3>
              <p>The information we collect is used strictly to respond to your customer inquiries, provide quotes, and facilitate your custom furniture orders. We do not use your information for unsolicited marketing.</p>
              
              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Data Sharing and Protection</h3>
              <p><strong>Kajal Furniture does not sell, rent, or share your personal data with third parties.</strong> Your information is kept secure and is only accessed by our team to provide you with the best possible service.</p>
              
              <h3 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contact Information</h3>
              <p>If you have any questions about our privacy practices, please contact us:</p>
              <ul className="list-none space-y-3 mt-4 bg-background p-6 rounded-xl border border-border shadow-sm">
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
