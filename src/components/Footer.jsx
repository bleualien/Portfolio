import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define your actual links here
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saina-maharjan/",
    },
    {
      name: "GitHub",
      url: "https://github.com/bleualien",
    },
    {
      name: "Email",
      url: "mailto:sainamrzn@gmail.com",
    },
  ];

  return (
    <footer className="w-full py-6 mt-10 border-t border-white/5 bg-black-100/50 backdrop-blur-md">
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center gap-4`}>
        
        {/* NAME SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-white text-[20px] font-bold tracking-wider">
            Saina <span className="text-[#915eff]">Maharjan</span>
          </h3>
          <p className="text-secondary text-[12px] mt-1 font-medium tracking-[1px] uppercase opacity-80">
            Junior Software Engineer | Full-Stack MERN Developer
          </p>
        </motion.div>

        {/* REFINED DIVIDER */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#915eff] to-transparent" />

        {/* SOCIAL LINKS - Now mapping to your real URLs */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              className="text-secondary hover:text-[#915eff] transition-colors text-[13px] font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* COPYRIGHT SECTION */}
        <div className="text-center">
          <p className="text-secondary text-[11px] opacity-50">
            © {currentYear} Saina Maharjan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;