'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Check } from 'lucide-react';

const projectIcons = [ShieldCheck, Bot];
const projectCategories = ['Fintech', 'AI/LLM'];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 texture-grid">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-black border-b-4 border-black pb-6 mb-12">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => {
            const Icon = projectIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1 }}
                className="border-2 border-black p-6 md:p-8 group hover:bg-black hover:text-white transition-colors duration-100 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center group-hover:border-white">
                    <Icon size={20} strokeWidth={1.5} className="text-black group-hover:text-white" />
                  </div>
                  <span className="border border-black px-3 py-1 font-mono text-xs uppercase tracking-widest group-hover:border-white group-hover:text-white">
                    {projectCategories[i]}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-black group-hover:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-body text-[#525252] group-hover:text-white/70 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="mt-auto space-y-2">
                  {project.details.map((detail, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm font-body text-black group-hover:text-white"
                    >
                      <Check size={16} strokeWidth={1.5} className="text-black group-hover:text-white flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
