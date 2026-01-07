'use client';

import { motion } from 'framer-motion';
import { Brain, ExternalLink, UserCheck, Server } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PersonalProjects() {
    const { t } = useLanguage();

    // Mapping icons to the translated items by index
    const icons = [Brain, UserCheck, Server];
    const categories = ['AI Agent', 'HR Tech', 'MCP Server'];

    // Check if personalProjects exists and has items
    const personalProjects = t.personalProjects;
    if (!personalProjects || !personalProjects.items || personalProjects.items.length === 0) {
        return null;
    }

    return (
        <section id="personal-projects" className="py-20 relative overflow-hidden bg-[#031b36]/60">
            {/* Background flare */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/12 rounded-full blur-[110px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px bg-cyan-500/30 flex-1" />
                        <h2 className="text-3xl font-bold text-white whitespace-nowrap">{personalProjects.title}</h2>
                        <div className="h-px bg-cyan-500/30 flex-1" />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 justify-center">
                    {personalProjects.items.map((project: any, index: number) => {
                        const Icon = icons[index % icons.length];
                        const category = categories[index % categories.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="bg-[#061f3f]/70 border border-cyan-500/15 rounded-2xl p-8 hover:border-cyan-400/30 hover:bg-[#0a2d57]/80 transition-all group backdrop-blur-md relative shadow-lg shadow-cyan-500/10"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-cyan-400/15 text-cyan-200 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors">
                                        <Icon size={28} />
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/25 text-cyan-100">
                                        {category}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-100/70 hover:text-white transition-colors"
                                            title="View on GitHub"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-cyan-100/80 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-2">
                                    {project.details.map((detail: string, i: number) => (
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
