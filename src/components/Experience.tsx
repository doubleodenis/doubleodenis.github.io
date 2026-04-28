"use client";
import { motion } from "framer-motion";
import { GlowingCard } from "./ui/glowing-card";
import { experiences } from "@/lib/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-100 mb-12">
            <span className="text-cyan-400 font-mono text-xl mr-2">02.</span>
            Where I&apos;ve Worked
            <span className="ml-4 h-px bg-slate-700 flex-1 max-w-xs" />
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <GlowingCard
              key={index}
              className="p-6 md:p-8"
              containerClassName="group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-32 shrink-0">
                  <span className="text-sm font-mono text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                    <span className="text-cyan-400"> @ </span>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="text-slate-400 mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
};
