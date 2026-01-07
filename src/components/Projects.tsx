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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/14 rounded-full blur-[140px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px bg-cyan-500/30 flex-1" />
                        <h2 className="text-3xl font-bold text-white whitespace-nowrap">{t.projects.title}</h2>
                        <div className="h-px bg-cyan-500/30 flex-1" />
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
                                className="bg-[#061f3f]/70 border border-cyan-500/15 rounded-2xl p-8 hover:border-cyan-400/30 hover:bg-[#0a2d57]/80 transition-all group backdrop-blur-md shadow-lg shadow-cyan-500/10"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-cyan-400/15 text-cyan-200 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors">
                                        <Icon size={28} />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/25 text-cyan-100">
                                        {categories[index]}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-cyan-100/80 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-2">
                                    {project.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-cyan-100/70">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-300 transition-colors" />
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
