'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Education() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-black border-b-4 border-black pb-6 mb-12">
            {t.education.title}
          </h2>
        </motion.div>

        <div>
          {t.education.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1 }}
              className="group border-t-2 border-black hover:bg-black hover:text-white transition-colors duration-100 p-6 md:p-8 -mx-6 md:-mx-8"
            >
              <h3 className="text-xl font-heading font-bold text-black group-hover:text-white">
                {item.degree}
              </h3>
              <p className="font-mono text-sm uppercase tracking-widest text-black group-hover:text-white mt-1">
                {item.school}
              </p>
              <span className="font-mono text-xs text-[#525252] group-hover:text-white/60 mt-2 inline-block">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
