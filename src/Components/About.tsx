// components/About.tsx
'use client';

import { motion } from 'framer-motion';
import { User, Code, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: User,
      title: "Who I Am",
      description: "I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful designs."
    },
    {
      icon: Code,
      title: "What I Do",
      description: "I specialize in building responsive, user-friendly interfaces with React and Next.js, and robust backend systems with Node.js, Express, and various databases."
    },
    {
      icon: Zap,
      title: "My Approach",
      description: "I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. Performance and user experience are always my top priorities."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">My Journey</h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            My journey in tech started with a curiosity for how things work. From tinkering with my first website to building complex distributed systems,
            I&apos;ve always been driven by the challenge of creating something new. I thrive in collaborative environments and enjoy mentoring junior developers.
            When I&apos;m not coding, you can find me contributing to open-source projects, attending tech meetups, or exploring the outdoors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;