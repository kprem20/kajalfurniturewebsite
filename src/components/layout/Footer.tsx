import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#241710] text-[#E8DCC4] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                <span className="font-display font-bold text-xl">K</span>
              </div>
              <span className="font-display text-2xl font-bold text-white">Kajal Furniture</span>
            </div>
            <p className="text-sm leading-relaxed text-[#B5A58E]">
              Premium wooden furniture crafted with passion. Transforming houses into beautiful homes across Rourkela since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Products', 'Gallery', 'Testimonials', 'Contact Us'].map((item) => {
                const isHome = item === 'Home';
                const sectionId = item === 'Our Products' ? 'catalog' : item.split(' ')[0].toLowerCase();
                const linkHref = isHome ? '/' : `/#${sectionId}`;
                return (
                  <li key={item}>
                    <a href={linkHref} className="text-sm hover:text-accent transition-colors duration-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 block"></span>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">Shop No. 24, Sector-4,<br />C.T. Market, Rourkela<br />Odisha - 769002</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919090169593" className="hover:text-accent transition-colors">+91 90901 69593</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@kajalfurniture.com" className="hover:text-accent transition-colors">dharmbirsharma10@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6">Business Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm border-b border-white/10 pb-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <div className="flex justify-between w-full">
                  <span>Mon - Sat:</span>
                  <span className="text-white font-medium">9:00 AM - 9:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm border-b border-white/10 pb-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <div className="flex justify-between w-full">
                  <span>Sunday:</span>
                  <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B5A58E]">
          <p>© {new Date().getFullYear()} Kajal Furniture. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy">
              <a className="hover:text-white transition-colors">Privacy Policy</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a className="hover:text-white transition-colors">Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
