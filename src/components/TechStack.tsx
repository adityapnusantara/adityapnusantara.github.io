'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

// Keep the data static as it's mostly proper nouns (Python, SQL etc)
// But we use the translated header/description
const stackData = [
    {
        category: 'Languages',
        skills: [
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'SQL', icon: 'fa-solid fa-database text-blue-400' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        ]
    },
    {
        category: 'AI / ML',
        skills: [
            { name: 'NLP', icon: 'fa-solid fa-language text-purple-400' },
            { name: 'Deep Learning', icon: 'fa-solid fa-brain text-pink-400' },
            { name: 'Transformers', icon: 'fa-solid fa-robot text-indigo-400' },
            { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
            { name: 'LangChain', icon: 'fa-solid fa-diagram-project text-green-400' },
        ]
    },
    {
        category: 'Databases',
        skills: [
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
            { name: 'Redis', icon: 'devicon-redis-plain colored' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'Milvus', icon: 'fa-solid fa-cubes text-blue-500' },
            { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain colored' },
        ]
    },
    {
        category: 'Cloud & Infra',
        skills: [
            { name: 'Docker', icon: 'devicon-docker-plain colored' },
            { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
            { name: 'Grafana', icon: 'devicon-grafana-original colored' },
            { name: 'GCloud', icon: 'devicon-googlecloud-plain colored' },
            { name: 'Ubuntu', icon: 'devicon-ubuntu-plain colored' },
        ]
    },
    {
        category: 'Backend & Services',
        skills: [
            { name: 'Microservices', icon: 'fa-solid fa-microchip text-slate-300' },
            { name: 'REST APIs', icon: 'fa-solid fa-wifi text-slate-300' },
            { name: 'Kafka', icon: 'devicon-apachekafka-plain colored' },
        ]
    },
    {
        category: 'MLOps',
        skills: [
            { name: 'Git', icon: 'devicon-git-plain colored' },
            { name: 'Airflow', icon: 'devicon-apacheairflow-plain colored' },
            { name: 'ArgoCD', icon: 'fa-solid fa-arrows-rotate text-orange-400' },
            { name: 'MLFlow', icon: 'fa-solid fa-chart-line text-blue-400' },
            { name: 'Langfuse', icon: 'fa-solid fa-shield-halved text-red-400' },
        ]
    }
];

export default function TechStack() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">{t.stack.title}</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t.stack.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stackData.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1 }}
                            className="bg-slate-950 border border-white/5 rounded-xl p-6 hover:border-cyan-500/20 transition-all hover:bg-slate-900/80 group"
                        >
                            <h3 className="text-lg font-semibold text-slate-200 mb-6 group-hover:text-cyan-400 transition-colors">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {group.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 group/icon">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover/icon:bg-white/10 group-hover/icon:border-white/10 transition-all">
                                            <i className={`${skill.icon} text-2xl`}></i>
                                        </div>
                                        <span className="text-xs text-slate-500 group-hover/icon:text-slate-300 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
