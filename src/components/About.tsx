import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";
import { User, Mail, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="label-text">Background & Goal</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter">About Muntasir</h2>
              <div className="w-16 h-1 bg-current" />
            </div>
            
            <p className="text-xl text-[#1a1a1a]/80 dark:text-[#F9F7F2]/80 leading-relaxed font-heading italic">
              "{PERSONAL_INFO.objective}"
            </p>

            <div className="grid sm:grid-cols-2 gap-10 pt-6">
              <div className="space-y-2">
                <p className="label-text opacity-40">Contact Strategy</p>
                <p className="text-sm font-bold uppercase tracking-tight">{PERSONAL_INFO.email}</p>
                <p className="text-sm font-bold uppercase tracking-tight">{PERSONAL_INFO.phone}</p>
              </div>
              <div className="space-y-2">
                <p className="label-text opacity-40">Operational Hub</p>
                <p className="text-sm font-bold uppercase tracking-tight">{PERSONAL_INFO.location}</p>
              </div>
              <div className="space-y-2">
                <p className="label-text opacity-40">Communication</p>
                <p className="text-sm font-bold uppercase tracking-tight">{PERSONAL_INFO.languages.join(" / ")}</p>
              </div>
              <div className="space-y-2">
                <p className="label-text opacity-40">Availability</p>
                <p className="text-sm font-bold uppercase tracking-tight">{PERSONAL_INFO.availability}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#E8E4D9] dark:bg-white/5 border-[16px] border-white dark:border-white/10 shadow-2xl relative overflow-hidden group">
               <img 
                 src={PERSONAL_INFO.profileImage} 
                 alt={PERSONAL_INFO.name} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-current/20 to-transparent" />
               
               <div className="absolute bottom-6 left-6 right-6">
                 <p className="text-xs uppercase font-black tracking-[0.2em] mb-1 text-white mix-blend-difference">Muntasir Rahman</p>
                 <p className="text-[10px] uppercase font-bold opacity-60 text-white mix-blend-difference">Finance Specialist</p>
               </div>
            </div>

            {/* Float decal */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white dark:bg-[#1a1a1a] shadow-xl p-6 flex flex-col justify-end border border-current/5">
                <p className="text-3xl font-heading font-black italic">ACCA</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">Part Qualified</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
