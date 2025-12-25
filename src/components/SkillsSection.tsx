import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Networking",
    skills: ["Routing & Switching", "TCP/IP", "BGP", "OSPF", "Data Center Networking"],
  },
  {
    title: "Automation & Tools",
    skills: ["Python", "Bash", "Network Monitoring Tools", "Configuration Management"],
  },
  {
    title: "Platforms",
    skills: ["Enterprise Networking Environments", "Data Center Infrastructure Systems", "Cloud Platforms"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Skills</h2>
            <p className="section-subheading mx-auto">
              Tools I trust to keep systems running.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className="card-elevated p-6"
              >
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.15 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};