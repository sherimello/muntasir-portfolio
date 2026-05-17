import { motion } from "motion/react";
import { SKILLS } from "../constants";
import { CheckCircle2, LayoutGrid, Zap } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-current/[0.03]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20 items-end">
          <div className="md:col-span-6 space-y-4">
            <span className="label-text">Competencies</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase italic">Toolbox</h2>
            <div className="w-16 h-1 bg-current" />
          </div>
          <div className="md:col-span-6 text-right hidden md:block">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-30">Technical & Interpersonal Proficiency</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-current/5 border border-current/5">
          {/* Technical Systems */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#F9F7F2] dark:bg-[#121212] p-12 md:p-16"
          >
            <div className="flex items-center gap-6 mb-12">
              <span className="text-4xl font-heading font-black italic opacity-10">01</span>
              <h3 className="text-2xl font-heading font-bold uppercase tracking-tight">Systems</h3>
            </div>
            
            <div className="space-y-6">
              {SKILLS.applicationSystems.map((skill, i) => (
                <div key={skill} className="flex flex-col border-b border-current/5 pb-4 group">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">{skill}</span>
                    <span className="text-[10px] font-mono opacity-30 italic">Proficient</span>
                  </div>
                  <div className="w-0 group-hover:w-full h-px bg-current/40 transition-all duration-700 mt-1" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#F9F7F2] dark:bg-[#121212] p-12 md:p-16"
          >
            <div className="flex items-center gap-6 mb-12">
              <span className="text-4xl font-heading font-black italic opacity-10">02</span>
              <h3 className="text-2xl font-heading font-bold uppercase tracking-tight">Strengths</h3>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-6">
              {SKILLS.softSkills.map((skill, i) => (
                <div key={skill} className="group relative">
                  <span className="text-lg font-heading italic opacity-60 group-hover:opacity-100 transition-opacity cursor-default pr-4 border-r border-current/10">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-20 p-10 bg-[#1A1A1A] text-white dark:bg-white dark:text-black">
               <span className="label-text text-white/50 dark:text-black/50 mb-2 block">Operational availability</span>
               <p className="text-lg font-heading italic leading-snug">
                 "Committed to 7-day availability to ensure continuity in high-stakes financial operations."
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
