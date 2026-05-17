import { motion } from "motion/react";
import { ArrowRight, Download, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import { scrollTo } from "../lib/lenis";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Side Label - Refined positioning to avoid header overlap */}
      <div className="absolute left-4 bottom-24 hidden 2xl:block pointer-events-none">
        <p className="origin-bottom-left -rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-[0.5em] opacity-20">
          Strategic Financial Analysis & Accounts Specialist
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
               <span className="label-text py-1 border-b border-current">EST. 2020</span>
               <span className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">Chattogram, BD</span>
            </div>
            
            <h1 className="text-[12vw] sm:text-[80px] md:text-[100px] lg:text-[110px] leading-[0.9] font-heading font-black tracking-tighter">
              {PERSONAL_INFO.name.split(" ")[0]}<br/>
              <span className="italic font-normal opacity-90">{PERSONAL_INFO.name.split(" ")[1]}</span>
            </h1>

            <div className="w-20 h-1 bg-current opacity-20"></div>

            <p className="text-xl md:text-2xl leading-relaxed max-w-xl font-heading italic opacity-70">
              ACCA Part Qualified specialist bridging the gap between <span className="font-bold border-b border-current/30 text-current">complex auditing</span> and sustainable business growth.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-10">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 bg-[#1A1A1A] text-white dark:bg-[#F9F7F2] dark:text-[#1A1A1A] text-[10px] uppercase tracking-[0.3em] font-black hover:opacity-90 transition-opacity"
              >
                Inquire Now
              </motion.a>
              <div className="flex flex-col gap-1">
                 <span className="label-text opacity-40 italic">Availability</span>
                 <span className="text-[10px] font-mono font-bold opacity-60 uppercase tracking-widest">7 Days a Week / Intra-City</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px]"
          >
            <div className="aspect-[4/5] bg-[#E8E4D9] dark:bg-white/5 border-[16px] border-white dark:border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] overflow-hidden relative group">
              {/* Image removed per user request */}
              
              <div className="absolute top-10 left-10">
                <p className="text-[80px] font-heading font-black opacity-[0.05] leading-none select-none text-current">
                  ACCA
                </p>
              </div>
              
              <div className="absolute bottom-10 left-10 right-10 z-10 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl md:text-7xl font-bold font-heading">05+</span>
                  <span className="text-[10px] font-mono opacity-60 uppercase tracking-tighter pb-2">Projects</span>
                </div>
                <p className="text-[10px] leading-relaxed opacity-90 uppercase font-black tracking-[0.1em] max-w-[200px]">
                  Ratio Analysis & Trend Analysis Frameworks
                </p>
              </div>
            </div>
            
            {/* Floating Credential Box */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-[#1A1A1A] dark:bg-[#F9F7F2] flex flex-col justify-end p-6 md:p-8 shadow-2xl z-20">
                <span className="text-white dark:text-[#1A1A1A] text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">Qualification</span>
                <span className="text-white dark:text-[#1A1A1A] text-xs font-bold leading-tight uppercase tracking-widest">Bsc Applied Accounting</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
