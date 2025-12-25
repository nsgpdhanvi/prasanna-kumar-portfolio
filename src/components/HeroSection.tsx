import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const nameWords = ["Nagam", "Somi", "Ganga", "Parvathi", "Prasanna", "Kumar"];

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Name with Word Animation */}
          <div className="mb-6 overflow-hidden">
            <motion.div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {nameWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Architecting Digital Ecosystems &{" "}
            <span className="gradient-text font-medium">
              Synthesizing Professional Excellence
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-display font-semibold glow-button transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              className="group px-8 py-4 glass-card text-foreground rounded-full font-display font-semibold transition-all duration-300 hover:bg-secondary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
