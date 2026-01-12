import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Saina Maharjan",
          from_email: form.email,
          to_email: "sainamrzn@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="relative flex flex-col gap-16">
      
      {/* SECTION HEADER: High-end Typography */}
      <motion.div variants={fadeIn("right", "tween", 0.1, 1)} className="z-10">
        <span className="text-[#915eff] text-[14px] font-bold uppercase tracking-[6px] block mb-4">
          Available for New Opportunities
        </span>
        <h2 className="text-white font-black lg:text-[72px] md:text-[60px] text-[40px] leading-[1.1]">
          Building digital <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#915eff] via-[#aa82ff] to-white">
            experiences that matter.
          </span>
        </h2>
      </motion.div>

      <div className="flex xl:flex-row flex-col-reverse items-center gap-12">
        
        {/* FORM SIDE: Ultra-clean Glassmorphism */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] w-full bg-[#050816]/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          <form ref={formRef} onSubmit={handleFormSubmission} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <label className="flex flex-col gap-3">
                <span className="text-white text-sm font-semibold tracking-wider uppercase opacity-60">Full Name</span>
                <input
                  type="text" name="name" required value={form.name} onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[#915eff] transition-all duration-300 placeholder:text-white/10"
                />
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-white text-sm font-semibold tracking-wider uppercase opacity-60">Email Address</span>
                <input
                  type="email" name="email" required value={form.email} onChange={handleInputChange}
                  placeholder="e.g. john@company.com"
                  className="bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[#915eff] transition-all duration-300 placeholder:text-white/10"
                />
              </label>
            </div>

            <label className="flex flex-col gap-3">
              <span className="text-white text-sm font-semibold tracking-wider uppercase opacity-60">Project Brief</span>
              <textarea
                rows={4} name="message" required value={form.message} onChange={handleInputChange}
                placeholder="Briefly describe your vision..."
                className="bg-transparent border-b border-white/20 py-3 text-white outline-none focus:border-[#915eff] transition-all duration-300 resize-none placeholder:text-white/10"
              />
            </label>

            <div className="flex items-center gap-8 mt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative bg-white text-primary font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-[#915eff] hover:text-white disabled:opacity-50"
              >
                <span className="relative z-10">
                  {status === "loading" ? "SENDING REQUEST..." : "DISPATCH MESSAGE"}
                </span>
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-green-400 font-medium text-sm italic">
                    Successfully delivered.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-400 font-medium text-sm italic">
                    Network error. Try again?
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* CANVAS SIDE: Focused and Centered */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 h-[450px] md:h-[600px] w-full flex justify-center items-center relative"
        >
          {/* Internal atmospheric lighting for the Earth */}
          <div className="absolute w-[300px] h-[300px] bg-[#915eff] opacity-20 blur-[120px] rounded-full" />
          
          <div className="w-full h-full max-w-[550px] max-h-[550px] z-10">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>

      {/* FOOTER STRIP: Modern minimalist data layout */}
      <motion.div 
        variants={fadeIn("up", "tween", 0.4, 1)}
        className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 border-t border-white/5 gap-8"
      >
        <div className="flex gap-12">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-[#915eff] uppercase tracking-widest">Inquiries</p>
            <a href="mailto:sainamrzn@gmail.com" className="text-white text-sm hover:opacity-60 transition-opacity">sainamrzn@gmail.com</a>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-[#915eff] uppercase tracking-widest">Connect</p>
            <a href="tel:+9779843369050" className="text-white text-sm hover:opacity-60 transition-opacity">+977 9843369050</a>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Base Operations</p>
          <p className="text-white/40 text-sm">Kathmandu, Nepal • GMT +5:45</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");