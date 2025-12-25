import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2024",
    title: "Strategic Digital Architecture",
    description:
      "Leading high-impact digital transformations and UI/UX optimization initiatives. Spearheading the adoption of cutting-edge technologies to drive business growth and operational efficiency.",
    icon: Rocket,
    color: "primary",
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Innovation",
    description:
      "Developing scalable enterprise applications using modern JavaScript frameworks. Building cloud-native solutions with focus on performance, security, and maintainability.",
    icon: Briefcase,
    color: "accent",
  },
  {
    year: "Early Career",
    title: "Foundational Excellence",
    description:
      "Academic milestones and initial professional growth in technology. Laying the groundwork for a career centered on technical excellence and continuous learning.",
    icon: GraduationCap,
    color: "primary",
  },
];

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A narrative of growth, innovation, and impactful contributions
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`w-4 h-4 rounded-full ${
                      exp.color === "primary" ? "bg-primary" : "bg-accent"
                    } ring-4 ring-background`}
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 group hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          exp.color === "primary"
                            ? "bg-primary/10"
                            : "bg-accent/10"
                        }`}
                      >
                        <exp.icon
                          className={`w-5 h-5 ${
                            exp.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
                      </div>
                      <span
                        className={`font-display text-sm font-semibold ${
                          exp.color === "primary"
                            ? "text-primary"
                            : "text-accent"
                        }`}
                      >
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
