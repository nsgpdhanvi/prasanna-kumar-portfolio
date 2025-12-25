import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Magnetic Dock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 p-2 rounded-2xl glass-card"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative p-3 rounded-xl text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <link.icon className="w-5 h-5 relative z-10" />
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId={`hover-${link.label}`}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <span className="gradient-text font-medium">
                Nagam Somi Ganga Parvathi Prasanna Kumar
              </span>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Crafted with passion and precision
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
