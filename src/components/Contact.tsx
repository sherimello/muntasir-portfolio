import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { PERSONAL_INFO } from "../constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="label-text">Inquiries</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter uppercase italic">Contact</h2>
              <div className="w-16 h-1 bg-current" />
            </div>

            <p className="text-xl font-heading opacity-60 italic leading-relaxed">
              Available for full-time roles, contract audits, and financial advisory services. Please allow 24 hours for a response.
            </p>

            <div className="space-y-8 pt-8">
              <div className="space-y-1">
                <p className="label-text opacity-40">Direct Mail</p>
                <p className="text-lg font-bold uppercase tracking-tight">{PERSONAL_INFO.email}</p>
              </div>
              <div className="space-y-1">
                <p className="label-text opacity-40">Telephone</p>
                <p className="text-lg font-bold uppercase tracking-tight">{PERSONAL_INFO.phone}</p>
              </div>
              <div className="space-y-1">
                <p className="label-text opacity-40">Location</p>
                <p className="text-lg font-bold uppercase tracking-tight">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-12 md:p-16 bg-[#E8E4D9] dark:bg-white/5 border border-current/5 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                 <Send size={120} />
              </div>

              {isSuccess ? (
                <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full border-2 border-current flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-3xl font-heading font-black italic">Message Received</h3>
                  <p className="text-sm uppercase font-bold tracking-widest opacity-60">I will be in touch shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 label-text border-b border-current hover:opacity-50 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2 group">
                      <label className="label-text opacity-40 group-focus-within:opacity-100 transition-opacity">Full Name</label>
                      <input
                        {...register("name")}
                        className="w-full py-4 bg-transparent border-b border-current/20 focus:border-current focus:outline-none transition-all font-bold placeholder:opacity-20 uppercase text-xs tracking-widest"
                        placeholder="e.g. John Doe"
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2 group">
                      <label className="label-text opacity-40 group-focus-within:opacity-100 transition-opacity">Email Address</label>
                      <input
                        {...register("email")}
                        className="w-full py-4 bg-transparent border-b border-current/20 focus:border-current focus:outline-none transition-all font-bold placeholder:opacity-20 uppercase text-xs tracking-widest"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <label className="label-text opacity-40 group-focus-within:opacity-100 transition-opacity">Subject</label>
                    <input
                      {...register("subject")}
                      className="w-full py-4 bg-transparent border-b border-current/20 focus:border-current focus:outline-none transition-all font-bold placeholder:opacity-20 uppercase text-xs tracking-widest"
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && <p className="text-[10px] text-red-500 font-bold uppercase mt-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2 group">
                    <label className="label-text opacity-40 group-focus-within:opacity-100 transition-opacity">Message Details</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full py-4 bg-transparent border-b border-current/20 focus:border-current focus:outline-none transition-all font-bold placeholder:opacity-20 uppercase text-xs tracking-widest resize-none"
                      placeholder="Tell me about your requirements..."
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-[#1A1A1A] dark:bg-[#F9F7F2] text-white dark:text-[#1A1A1A] font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Transmitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
