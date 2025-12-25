import { motion } from "framer-motion";
import { ArrowUpRight, Network, Activity, Shield } from "lucide-react";

const projects = [
  {
    title: "Network Optimization Initiative",
    description: "Improved network stability and performance through proactive monitoring and configuration tuning.",
    outcome: "30% reduction in latency, 99.9% uptime achieved",
    icon: Network,
  },
  {
    title: "Data Center Migration",
    description: "Led the network infrastructure planning and execution for a large-scale data center migration project.",
    outcome: "Zero downtime during transition",
    icon: Activity,
  },
  {
    title: "Security Compliance Implementation",
    description: "Implemented network security protocols and compliance measures across enterprise infrastructure.",
    outcome: "Passed all security audits",
    icon: Shield,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Project Highlights</h2>
          <p className="section-subheading mx-auto">
            Practical solutions, measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="card-elevated h-full p-6 group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title with Arrow */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Outcome */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary">
                    {project.outcome}
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