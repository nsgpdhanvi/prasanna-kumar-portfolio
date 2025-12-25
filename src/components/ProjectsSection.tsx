import { motion } from "framer-motion";
import { ExternalLink, Layers, Cloud, Cpu } from "lucide-react";

const projects = [
  {
    title: "Enterprise Dashboard",
    category: "Data Visualization",
    description:
      "A comprehensive analytics platform with real-time data visualization, KPI tracking, and predictive insights for enterprise decision-making.",
    icon: Layers,
    gradient: "from-primary/20 to-primary/5",
    accent: "primary",
  },
  {
    title: "Cloud-Native SPA",
    category: "Web Application",
    description:
      "A highly scalable single-page application built on cloud infrastructure, featuring offline capabilities and seamless cross-device synchronization.",
    icon: Cloud,
    gradient: "from-accent/20 to-accent/5",
    accent: "accent",
  },
  {
    title: "AI Interface Design",
    category: "Machine Learning",
    description:
      "An intuitive interface for AI model interaction, featuring natural language processing and intelligent response generation.",
    icon: Cpu,
    gradient: "from-primary/20 to-accent/10",
    accent: "primary",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of work that showcases technical expertise and creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-card h-full group cursor-pointer overflow-hidden"
              >
                {/* Project Image/Gradient Area */}
                <div
                  className={`h-48 relative bg-gradient-to-br ${project.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className={`w-20 h-20 rounded-2xl ${
                        project.accent === "primary"
                          ? "bg-primary/20"
                          : "bg-accent/20"
                      } backdrop-blur-sm flex items-center justify-center`}
                    >
                      <project.icon
                        className={`w-10 h-10 ${
                          project.accent === "primary"
                            ? "text-primary"
                            : "text-accent"
                        }`}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 text-foreground font-medium"
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span
                    className={`text-xs font-medium uppercase tracking-wider ${
                      project.accent === "primary"
                        ? "text-primary"
                        : "text-accent"
                    }`}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
