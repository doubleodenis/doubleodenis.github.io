"use client";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-100 mb-8">
            <span className="text-cyan-400 font-mono text-xl mr-2">01.</span>
            About Me
            <span className="ml-4 h-px bg-slate-700 flex-1 max-w-xs" />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-slate-400 text-lg leading-relaxed"
        >
          <p>
            Hello! I&apos;m Denis, a passionate software engineer with a keen eye for
            creating engaging, user-centric digital experiences. My journey in
            software development has equipped me with a diverse skill set and a
            deep appreciation for clean, efficient code.
          </p>
          <p>
            I specialize in building modern web applications using cutting-edge
            technologies. Whether it&apos;s crafting responsive front-end interfaces or
            architecting robust back-end systems, I thrive on tackling complex
            challenges and turning ideas into reality.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-slate-400 mb-4">
            Here are some technologies I&apos;ve been working with:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Tailwind CSS",
              "GraphQL",
              "PostgreSQL",
            ].map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center text-slate-400 text-sm font-mono"
              >
                <span className="text-cyan-400 mr-2">▹</span>
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
