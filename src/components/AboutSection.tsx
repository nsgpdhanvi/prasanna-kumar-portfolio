import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Brain, Layout, Sparkles, Zap } from "lucide-react";

const proficiencies = [
  { icon: Code2, label: "React", color: "text-primary" },
  { icon: Layout, label: "Next.js", color: "text-foreground" },
  { icon: Cloud, label: "Cloud Architecture", color: "text-accent" },
  { icon: Brain, label: "AI Integration", color: "text-primary" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">&amp; Competencies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A strategic blend of technical expertise and business acumen
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {/* Executive Summary - Large Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 md:col-span-2 lg:row-span-2 group hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Executive Summary</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A seasoned technologist with a passion for bridging the gap between 
              <span className="text-foreground font-medium"> technical complexity </span> 
              and <span className="text-foreground font-medium">business value</span>. 
              With expertise spanning modern JavaScript frameworks, cloud-native architectures, 
              and AI-powered solutions, I transform ambitious visions into scalable digital realities.
            </p>
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span>Available for strategic partnerships</span>
              </div>
            </div>
          </motion.div>

          {/* Core Proficiencies - Medium Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 lg:col-span-2 group hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold">Core Proficiencies</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {proficiencies.map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all cursor-default"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Philosophy - Small Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 lg:col-span-2 group hover:border-accent/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Philosophy</h3>
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium italic">
                "Innovation through simplicity and performance-first design."
              </span>
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Minimalist
              </span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                Performant
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
