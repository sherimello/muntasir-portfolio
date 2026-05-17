import { motion } from "motion/react";
import { EDUCATION } from "../constants";
import { GraduationCap, Award, Calendar } from "lucide-react";

const OTHERS = [
  {
    title: "Course on Personal Tax Return Filing",
    organization: "Taxhouse BD",
    description: "Comprehensive training on tax laws, compliance, and regulatory requirements in Bangladesh.",
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding border-y border-current/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="label-text">Academic Foundations</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mt-4 mb-16 underline decoration-current/10 underline-offset-8">Education</h2>
            
            <div className="space-y-16">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="group overflow-hidden">
                  <div className="flex items-baseline gap-6 mb-4">
                    <p className="text-2xl font-mono opacity-10 group-hover:opacity-30 transition-opacity">{(i + 1).toString().padStart(2, '0')}</p>
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between w-full">
                       <h3 className="text-2xl font-heading font-black italic">{edu.institution}</h3>
                       <span className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-widest">{edu.period}</span>
                    </div>
                  </div>
                  <div className="pl-12">
                    <p className="text-lg font-bold uppercase tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">{edu.degree}</p>
                    <div className="w-12 h-px bg-current/20 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Others */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#E8E4D9] dark:bg-white/5 p-12 flex flex-col justify-between"
          >
            <div>
              <span className="label-text">Certifications</span>
              <h2 className="text-3xl font-heading font-black italic mt-4 mb-12">Professional Training</h2>

              <div className="space-y-12">
                {OTHERS.map((cur, i) => (
                  <div key={i} className="space-y-4">
                     <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 bg-current rounded-full" />
                       <h3 className="font-black text-xs uppercase tracking-widest">{cur.title}</h3>
                     </div>
                     <p className="text-[10px] font-bold text-current/60 uppercase">{cur.organization}</p>
                     <p className="text-sm font-heading italic leading-relaxed opacity-60">{cur.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 pt-12 border-t border-current/10">
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Verified Credentials</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
