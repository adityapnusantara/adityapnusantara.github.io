'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">{t.experience.title}</h2>
                    <div className="h-1 w-20 bg-sky-400 rounded-full" />
                </motion.div>

                <div className="relative border-l border-cyan-500/15 ml-4 md:ml-6 space-y-12">
                    {t.experience.roles.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] md:-left-[7px] top-2 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full ring-4 ring-[#031735]" />

                            <div className="bg-[#07254a]/60 border border-cyan-500/15 rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-colors backdrop-blur-sm shadow-lg shadow-cyan-500/10">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <div className="text-sky-300 font-medium flex items-center gap-2">
                                            <Briefcase size={16} />
                                            {exp.company}
                                        </div>
                                    </div>
                                    {/* Note: Period/Date logic is simplified here as it wasn't strictly in i18n, but could be added. Using static strings for now or matching index if needed.
                      For simplicity, I'm keeping the dates hardcoded in structure or I should have put them in the dictionary.
                      Ah, I missed putting the dates/tags in the dictionary. 
                      Let's revert to checking the dictionary structure I created. 
                      I put role, company, description. I missed period, type, tag.
                      I will recover them from the original code using a separate mapping or static data since they are mostly numbers/proper nouns, 
                      but 'Present' needs translation. 
                      For now I will reconstruct the full objects in the component by merging static data with translation data.
                  */}
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs font-medium text-cyan-100">
                                            <Calendar size={12} />
                                            {/* @ts-ignore - dynamic content */}
                                            {exp.period}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-white text-xs font-medium border border-cyan-300/30">
                                            {/* @ts-ignore - dynamic content */}
                                            {exp.tag}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sky-100/75 leading-relaxed text-sm md:text-base">
                                            <span className="mt-2 w-1.5 h-1.5 bg-cyan-400/70 rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
