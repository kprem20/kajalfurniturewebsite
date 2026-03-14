import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Products", href: "/#products" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg group-hover:bg-accent transition-colors duration-300">
                <span className="font-display font-bold text-xl">K</span>
              </div>
              <span className={`font-display text-2xl font-bold tracking-wide ${isScrolled ? "text-foreground" : "text-foreground lg:text-white"} transition-colors duration-300`}>
                Kajal Furniture
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${
                        isScrolled ? "text-foreground/80" : "text-white/90"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 border-l border-border/30 pl-6">
                <a
                  href="tel:+919090169593"
                  className={`flex items-center gap-2 text-sm font-bold ${isScrolled ? "text-primary" : "text-white"} hover:text-accent transition-colors`}
                >
                  <Phone className="w-4 h-4" />
                  +91 9090169593
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-md ${isScrolled ? "text-foreground" : "text-white"} hover:bg-black/10 transition-colors`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 30 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-display text-2xl font-bold text-primary">Kajal Furniture</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-display text-foreground hover:text-accent transition-colors block py-2"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-border flex flex-col gap-4">
                <a
                  href="tel:+919090169593"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 9090169593
                </a>
                <a
                  href="https://wa.me/919090169593?text=Hello%20Kajal%20Furniture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
