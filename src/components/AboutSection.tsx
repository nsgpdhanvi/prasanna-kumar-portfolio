import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Shield, Zap, Users } from "lucide-react";

const highlights = [
  { icon: Network, label: "Network design & operations" },
  { icon: Shield, label: "High availability & performance" },
  { icon: Zap, label: "Automation-driven workflows" },
  { icon: Users, label: "Strong collaboration mindset" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">About Me</h2>
            <p className="section-subheading mx-auto">
              Focused on reliability, scalability, and real-world impact.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am a <span className="text-foreground font-medium animated-underline">Data Center Network Engineer</span> with 
                hands-on experience in designing, operating, and optimizing large-scale 
                network infrastructures. Currently working at{" "}
                <span className="text-foreground font-medium">Capgemini</span>, I focus on 
                building reliable, secure, and scalable systems that support enterprise-grade 
                data centers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical expertise with a deep understanding of 
                business requirements, ensuring that network solutions not only meet 
                current needs but are also prepared for future growth and challenges.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-elevated p-5 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};