import { PERSONAL_INFO } from "../constants";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { scrollTo } from "../lib/lenis";

export default function Footer() {
  const scrollToTop = () => {
    scrollTo(0);
  };

  return (
    <footer className="bg-current/[0.02] border-t border-current/10 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6 space-y-8">
            <h3 className="text-5xl font-heading font-black tracking-tighter">MUNTASIR <span className="italic font-normal">RAHMAN</span></h3>
            <p className="text-xl font-heading opacity-40 leading-relaxed italic max-w-md">
              Dedicated to bridging the gap between strategic financial analysis and organizational success.
            </p>
          </div>
          
          <div className="md:col-span-3 space-y-8">
            <h4 className="label-text opacity-40">Section Mapping</h4>
            <ul className="space-y-4">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("#about"); }} className="text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">About</a></li>
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo("#experience"); }} className="text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">Experience</a></li>
              <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollTo("#education"); }} className="text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">Education</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo("#skills"); }} className="text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">Skills</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h4 className="label-text opacity-40">Credentials</h4>
            <div className="space-y-4">
               <p className="text-xs font-black uppercase tracking-widest border border-current/10 p-4 inline-block transform -rotate-1 italic">
                 ACCA Part Qualified
               </p>
               <div className="flex items-center gap-4 pt-4">
                 <button 
                  onClick={scrollToTop}
                  className="p-4 border border-current/20 hover:bg-current hover:text-[#F9F7F2] transition-all"
                 >
                   <ArrowUp size={20} />
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-current/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-30">
              &copy; {new Date().getFullYear()} Muntasir Rahman.
            </p>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-10">
              Editorial Aesthetic Advisory Services
            </p>
          </div>
          <div className="flex items-center gap-12">
             <span className="label-text opacity-20">Strategic Performance</span>
             <span className="label-text opacity-20">Integrity</span>
             <span className="label-text opacity-20">Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
