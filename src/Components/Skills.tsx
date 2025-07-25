// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cpu, Zap, Code2 } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'SASS']
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'DevOps',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Kubernetes']
    },
    {
      title: 'Tools',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest']
    },
    {
      title: 'Performance',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Web Vitals', 'Lighthouse', 'Bundle Analysis', 'CDN', 'Caching']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;