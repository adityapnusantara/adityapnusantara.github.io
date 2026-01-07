'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Education() {
    const { t } = useLanguage();

    // Check if education data exists to avoid runtime errors if content isn't fully propagated yet
    // though in our case it is.
    if (!t.education) return null;

    return (
        <section id="education" className="py-20 relative bg-[#041b37]/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">{t.education.title}</h2>
                    <div className="h-1 w-20 bg-cyan-400 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.education.items.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#061f3f] border border-cyan-500/15 rounded-2xl p-8 hover:border-cyan-400/25 transition-all group shadow-lg shadow-cyan-500/10"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-500/15 rounded-xl text-cyan-300 group-hover:bg-cyan-500/25 transition-colors">
                                    <GraduationCap size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                    <div className="text-lg text-cyan-100 mb-4">{edu.school}</div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-sm text-cyan-100">
                                        <Calendar size={14} />
                                        <span>{edu.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
