'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 texture-diagonal">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-black border-b-4 border-black pb-6 mb-12">
            {t.experience.title}
          </h2>
        </motion.div>

        <div>
          {t.experience.roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1 }}
              className={`group hover:bg-black hover:text-white transition-colors duration-100 p-6 md:p-8 -mx-6 md:-mx-8 ${
                i === 0 ? 'border-t-4 border-black' : 'border-t-2 border-black'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-black group-hover:text-white">
                    {role.role}
                  </h3>
                  <p className="font-mono text-sm uppercase tracking-widest text-black group-hover:text-white mt-1">
                    {role.company}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-mono text-xs text-[#525252] group-hover:text-white/60">
                    {role.period}
                  </span>
                  <span className="border border-black px-3 py-1 font-mono text-xs uppercase tracking-widest group-hover:border-white group-hover:text-white">
                    {role.tag}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {role.description.map((desc, j) => (
                  <li
                    key={j}
                    className="text-sm font-body text-[#525252] group-hover:text-white/70 leading-relaxed flex gap-2"
                  >
                    <span className="flex-shrink-0">—</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
