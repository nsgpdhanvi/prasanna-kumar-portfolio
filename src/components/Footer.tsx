import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prasanna Kumar
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Built with precision and purpose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};