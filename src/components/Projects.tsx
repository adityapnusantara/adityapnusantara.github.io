'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Bot } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();

    // Mapping icons to the translated items by index
    const icons = [ShieldCheck, Bot];
    const categories = ['Fintech', 'AI/LLM'];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background flare */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px bg-slate-700 flex-1" />
                        <h2 className="text-3xl font-bold text-white whitespace-nowrap">{t.projects.title}</h2>
                        <div className="h-px bg-slate-700 flex-1" />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {t.projects.items.map((project, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all group backdrop-blur-md"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                                        <Icon size={28} />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                                        {categories[index]}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-2">
                                    {project.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-500 transition-colors" />
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
