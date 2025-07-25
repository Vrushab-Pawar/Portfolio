'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function Hero() {
  const fullText = 'Full Stack GenAI Engineer.';
  const [text, setText] = useState('');
  const indexRef = useRef(0);

  // Typewriter Effect using requestAnimationFrame
  useEffect(() => {
    let frameId: number;

    const typeWriter = () => {
      setText(fullText.slice(0, indexRef.current));
      if (indexRef.current <= fullText.length) {
        indexRef.current++;
        frameId = setTimeout(() => requestAnimationFrame(typeWriter), 75);
      }
    };

    typeWriter();
    return () => clearTimeout(frameId);
  }, []);

  const floatingDots = useMemo(() =>
    Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  , []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">

      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black opacity-20 z-0"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Floating Dots */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{ left: dot.left, top: dot.top }}
            animate={{ y: [0, -100, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Vrushab Pawar
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto min-h-[2.5rem] tracking-wide"
          >
            {text}
            <span className="inline-block w-1 h-6 bg-gray-300 ml-1 animate-blink rounded-sm" />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-200"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-400 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={24} />
        <span className="mt-1">Scroll</span>
      </motion.div>
    </section>
  );
}
