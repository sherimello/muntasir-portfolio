import { motion } from "motion/react";
import { EXPERIENCE, RESEARCH_PROJECTS } from "../constants";
import { Briefcase, FileText, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-current/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4 space-y-4">
             <span className="label-text">Career Path</span>
             <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter">Experience</h2>
             <div className="w-16 h-1 bg-current" />
          </div>
          <div className="md:col-span-8">
             <p className="text-lg font-heading italic opacity-60 max-w-xl">
               A track record of precision in the shipping and maritime industry, managing complex accounts and inventories.
             </p>
          </div>
        </div>

        <div className="space-y-32">
          {/* Main Experience */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-8 items-start group"
              >
                <div className="md:col-span-4">
                   <p className="text-[10px] font-mono tracking-[0.2em] uppercase opacity-40 mb-2">2023 — Present</p>
                   <h3 className="text-2xl font-heading font-bold italic">{exp.title}</h3>
                   <p className="text-sm font-bold uppercase tracking-widest border-b border-current/20 inline-block py-1 mt-2">{exp.company}</p>
                </div>
                
                <div className="md:col-span-8">
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                    {exp.responsibilities.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <span className="text-[10px] font-mono opacity-30 mt-1">{(idx + 1).toString().padStart(2, '0')}</span>
                        <p className="text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research & Thesis */}
          <div className="pt-20 border-t border-current/10">
             <div className="flex items-center gap-6 mb-16">
               <span className="label-text">Research & Case Studies</span>
               <div className="flex-grow h-px bg-current/10" />
             </div>
             
             {RESEARCH_PROJECTS.map((project, i) => (
               <motion.div
                 key={project.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="space-y-10"
               >
                 <div className="max-w-3xl">
                    <h4 className="text-3xl md:text-5xl font-heading font-black tracking-tighter mb-4">{project.title}</h4>
                    <p className="text-xl font-heading italic opacity-50 mb-10">{project.subtitle}</p>
                 </div>

                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="p-8 border border-current/10 flex flex-col justify-between hover:bg-current/[0.03] transition-colors min-h-[160px]">
                         <span className="text-[10px] font-mono opacity-20 uppercase tracking-widest">Analysis Point {idx + 1}</span>
                         <p className="text-sm font-bold leading-relaxed uppercase tracking-tight">
                           {h}
                         </p>
                      </div>
                    ))}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
