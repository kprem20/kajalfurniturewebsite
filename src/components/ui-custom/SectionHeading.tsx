import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {subtitle && (
          <span className={`block text-sm font-bold uppercase tracking-widest mb-3 ${light ? "text-accent" : "text-primary"}`}>
            {subtitle}
          </span>
        )}
        <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 ${light ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
        <div className={`h-1 w-20 ${light ? "bg-accent" : "bg-primary"} ${centered ? "mx-auto" : ""} rounded-full`} />
      </motion.div>
    </div>
  );
}
