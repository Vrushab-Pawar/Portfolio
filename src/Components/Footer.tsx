// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, LinkedinIcon, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vrushab-Pawar", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/vrushab-pawar-109897194/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vrushabpawar97@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Vrushab Pawar
            </div>
            <p className="text-gray-500">Crafting digital experiences</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm"
          >
            &copy; {currentYear} Vrushab Pawar. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;