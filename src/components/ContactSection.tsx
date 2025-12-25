import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isShaking, setIsShaking] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Real-time email validation
    if (name === "email" && value) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email" }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.email;
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next big project? Drop me a message
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="glass-card p-8 md:p-10">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${
                        errors.name ? "border-destructive" : "border-border"
                      } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span className="text-xs text-destructive">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${
                        errors.email ? "border-destructive" : "border-border"
                      } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-destructive">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl bg-secondary/50 border ${
                        errors.message ? "border-destructive" : "border-border"
                      } focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <span className="text-xs text-destructive">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-display font-semibold glow-button transition-all duration-300 flex items-center justify-center gap-2 ${
                      isShaking ? "animate-shake" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
