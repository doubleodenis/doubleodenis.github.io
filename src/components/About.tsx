"use client";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="mb-24 scroll-mt-16 md:mb-32 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:bg-transparent lg:backdrop-blur-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-cyan-400 lg:mb-8">
          About
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-slate-400 leading-relaxed"
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
        <p className="mt-6">
          Here are some technologies I&apos;ve been working with:
        </p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
          {[
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "Tailwind CSS",
            "PostgreSQL",
          ].map((tech) => (
            <li
              key={tech}
              className="flex items-center text-sm font-mono"
            >
              <span className="text-cyan-400 mr-2">▹</span>
              {tech}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
