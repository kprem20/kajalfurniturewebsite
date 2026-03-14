import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Shield, Star, Handshake, PenTool, Tags, ZoomIn, X, MessageCircle, Phone } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/FloatingElements";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";

// --- HERO SECTION ---
function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [Autoplay({ delay: 5000 })]);

  const slides = [
    {
      /* hero modern living room */
      image: "/images/categories/sofa_sets.png",
      title: "Welcome to Kajal Furniture",
      subtitle: "Premium Wooden Furniture for Your Dream Home"
    },
    {
      /* hero elegant dining room */
      image: "/images/categories/dining_tables.png",
      title: "Crafted for Elegance",
      subtitle: "Exquisite Dining Sets & Decor"
    },
    {
      /* hero luxury bedroom */
      image: "/images/categories/wooden_beds.png",
      title: "Rest in Luxury",
      subtitle: "Custom Wooden Beds & Wardrobes"
    }
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-foreground">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] h-full relative">
              <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark Overlay */}
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="text-accent font-bold tracking-widest uppercase mb-4 text-sm md:text-base"
                >
                  {slide.subtitle}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance max-w-5xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <a href="#products" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-none hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2">
                    View Products <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/919090169593" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-none hover:bg-white hover:text-foreground transition-colors duration-300 flex items-center justify-center">
                    WhatsApp Now
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- ABOUT SECTION ---
function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary rounded-2xl transform -rotate-3 z-0" />
            {/* about wood workshop */}
            <img 
              src="/images/categories/wooden_beds.png" 
              alt="Kajal Furniture Workshop" 
              className="relative z-10 rounded-2xl shadow-2xl object-cover aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 rounded-2xl shadow-xl z-20">
              <span className="block text-5xl font-display font-bold mb-1">26+</span>
              <span className="font-semibold tracking-wide uppercase text-sm">Years of<br/>Trusted Craftsmanship</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <SectionHeading title="Mastering the Art of Woodcraft" subtitle="About Kajal Furniture" centered={false} />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Welcome to <strong className="text-foreground">Kajal Furniture</strong>, Rourkela's most trusted destination for premium wooden furniture. Founded by Mr. Dharmbir Sharma, we have spent 26 Years of Trusted Craftsmanship transforming houses into beautiful, warm homes.
              </p>
              <p>
                We believe that furniture is more than just decor; it's a part of your daily life. That's why we combine traditional craftsmanship with modern designs to create pieces that are not only aesthetically pleasing but built to last generations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10 border-t border-border pt-10">
              <div>
                <span className="block text-4xl font-display font-bold text-primary mb-2">500+</span>
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Happy Customers</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-primary mb-2">100+</span>
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Unique Designs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- CATEGORIES SECTION ---
function Categories() {
  const categories = [
    { name: "Wooden Beds", image: "/images/categories/wooden_beds.png" },
    { name: "Dining Tables", image: "/images/categories/dining_tables.png" },
    { name: "Wardrobes", image: "/images/categories/wardrobes.png" },
    { name: "Sofa Sets", image: "/images/categories/sofa_sets.png" },
    { name: "Dressing Tables", image: "/images/categories/dressing_tables.png" },
    { name: "Office Furniture", image: "/images/categories/office_furniture.png" },
  ];

  return (
    <section id="catalog" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Shop by Category" subtitle="Our Collections" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] transition-shadow duration-500 ring-1 ring-border/50"
            >
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none">
                <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FEATURED PRODUCTS ---
function FeaturedProducts() {
  const products = [
    { name: "Royal Teak King Bed", desc: "Solid teak wood with detailed carving", image: "/images/categories/wooden_beds.png" },
    { name: "Classic 6-Seater Dining", desc: "Premium rosewood finish", image: "/images/categories/dining_tables.png" },
    { name: "Modern Sliding Wardrobe", desc: "Space-saving elegant design", image: "/images/categories/wardrobes.png" },
    { name: "Luxury L-Shape Sofa", desc: "Premium fabric & high-density foam", image: "/images/categories/sofa_sets.png" },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Products" subtitle="Top Picks" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  New
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">{prod.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{prod.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="font-bold text-primary">₹ Call for Price</span>
                  <a 
                    href={`https://wa.me/919090169593?text=I'm%20interested%20in%20the%20${encodeURIComponent(prod.name)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
           <a href="#catalog" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300">
             View All Products <ArrowRight className="w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
}

// --- WHY CHOOSE US ---
function WhyChooseUs() {
  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "High Quality Wood", desc: "We use only premium seasoned wood for durability." },
    { icon: <PenTool className="w-8 h-8" />, title: "Custom Design", desc: "Furniture tailored exactly to your space and style." },
    { icon: <Tags className="w-8 h-8" />, title: "Affordable Pricing", desc: "Direct from workshop pricing with no hidden costs." },
    { icon: <Handshake className="w-8 h-8" />, title: "Trusted Local Business", desc: "Serving Rourkela with pride with 26 Years of Trusted Craftsmanship." },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Us?" subtitle="Our Promise" light />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-6 shadow-lg">
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- GALLERY ---
function Gallery() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  
  const images = [
    "/images/categories/sofa_sets.png",
    "/images/categories/office_furniture.png",
    "/images/categories/dressing_tables.png",
    "/images/categories/wooden_beds.png",
    "/images/categories/dining_tables.png",
    "/images/categories/wardrobes.png",
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Showroom Gallery" subtitle="Inspiration" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setLightboxImg(img)}
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-accent transition-colors" onClick={() => setLightboxImg(null)}>
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={lightboxImg} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain rounded-md" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// --- TESTIMONIALS ---
function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
  
  const reviews = [
    { text: "Excellent quality furniture and very reasonable prices. Highly recommended for any home.", author: "Priya Sharma", loc: "Rourkela" },
    { text: "Beautiful wooden furniture with great craftsmanship. Got my custom bed made and it's perfect.", author: "Rahul Gupta", loc: "Sundargarh" },
    { text: "Best furniture shop in Rourkela! Very professional and delivered on time.", author: "Meena Patel", loc: "Sector 4" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading title="What Our Customers Say" subtitle="Testimonials" />
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((rev, i) => (
              <div key={i} className="flex-[0_0_100%] px-4">
                <div className="bg-card p-10 md:p-12 rounded-2xl shadow-sm border border-border relative">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>
                  <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed italic mb-8">
                    "{rev.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">{rev.author}</h4>
                    <span className="text-sm text-muted-foreground">{rev.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CONTACT ---
function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    setError("");

    const text = `Hello Kajal Furniture,\nName: ${name || "Not provided"}\nPhone: ${phone}\nInquiry: ${message || "I am interested in your furniture."}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919090169593?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Visit Our Showroom" subtitle="Get in Touch" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-display text-3xl font-bold mb-6">We'd love to hear from you</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Whether you have a question about our collections, need a custom quote, or want to visit our store, our team is ready to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call or WhatsApp</h4>
                  <a href="tel:+919090169593" className="block text-muted-foreground hover:text-primary transition-colors">+91 90901 69593</a>
                  <span className="text-sm text-accent font-semibold">Owner: Dharmbir Sharma</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
             <form className="bg-card p-10 rounded-2xl shadow-xl border border-border" onSubmit={handleWhatsAppSubmit}>
               <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-semibold mb-2 text-foreground/80">Your Name</label>
                   <input 
                     type="text" 
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300" 
                     placeholder="John Doe" 
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-semibold mb-2 text-foreground/80">Phone Number <span className="text-red-500">*</span></label>
                   <input 
                     type="tel" 
                     value={phone}
                     onChange={(e) => { setPhone(e.target.value); setError(""); }}
                     className={`w-full px-5 py-4 bg-background border ${error ? "border-red-500 focus:ring-red-500/40" : "border-border focus:ring-primary/40 focus:border-primary"} rounded-xl focus:outline-none focus:ring-2 transition-all duration-300`}
                     placeholder="+91 98765 43210" 
                   />
                   {error && <p className="text-red-500 text-xs mt-2 font-medium">{error}</p>}
                 </div>
                 <div>
                   <label className="block text-sm font-semibold mb-2 text-foreground/80">Message / Inquiry</label>
                   <textarea 
                     rows={4} 
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     className="w-full px-5 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 resize-none" 
                     placeholder="I'm looking for a custom wooden bed..."
                   ></textarea>
                 </div>
                 <button 
                   type="submit" 
                   className="w-full py-4 mt-2 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300 active:scale-95"
                 >
                   Send Message on WhatsApp
                 </button>
               </div>
             </form>
          </motion.div>
        </div>
        
        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-border"
        >
          <iframe 
            src="https://maps.google.com/maps?q=C.T.+Market+Sector+4+Rourkela&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            title="Kajal Furniture Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

 // --- TERMS OF SERVICE ---

// --- MAIN PAGE COMPOSE ---
export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <FeaturedProducts />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
