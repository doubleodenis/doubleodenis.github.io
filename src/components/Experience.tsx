"use client";
import BorderGlow from "./ui/border-glow";
import { experiences } from "@/lib/data";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-24 scroll-mt-16 md:mb-26 lg:mb-32 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:bg-transparent lg:backdrop-blur-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:text-cyan-400 lg:mb-8">
          Experience
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <BorderGlow
            key={index}
            className="p-4 sm:p-6"
            backgroundColor="rgba(15, 23, 42)"
            colors={["#22d3ee", "#06b6d4", "#0891b2"]}
            glowColor="190 90 70"
            glowIntensity={1}
            borderRadius={12}
            edgeSensitivity={10}
            glowRadius={0}
            coneSpread={10}
          >
            <div className="sm:flex sm:gap-4 p-2">
              <div className="mb-2 sm:mb-0 sm:w-28 shrink-0">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {exp.period}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium leading-snug text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                    </h3>
                    —
                    <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                    {exp.company}
                    </a>
                </div>
                {exp.previousTitles && exp.previousTitles.length > 0 && (
                  <div className="">
                    {exp.previousTitles.map((prev, idx) => (
                      <div key={idx} className="text-[1rem] text-slate-500">
                        <span className=" text-slate-400">{prev.title}</span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="mt-3 text-sm leading-normal text-slate-400">
                  {exp.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
};
