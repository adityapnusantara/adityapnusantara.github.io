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
        ]
    },
    {
        category: 'AI / ML',
        skills: [
            { name: 'Machine Learning', icon: 'fa-solid fa-brain text-pink-400' },
            { name: 'Deep Learning', icon: 'fa-solid fa-network-wired text-purple-400' },
            { name: 'NLP', icon: 'fa-solid fa-language text-indigo-400' },
            { name: 'Transformers', icon: 'fa-solid fa-robot text-yellow-400' },
            { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
            { name: 'Spacy', icon: 'fa-solid fa-comment-dots text-blue-300' },
            { name: 'Semantic Search', icon: 'fa-solid fa-magnifying-glass text-green-400' },
        ]
    },
    {
        category: 'Frameworks',
        skills: [
            { name: 'LangChain', icon: 'fa-solid fa-link text-green-400' },
            { name: 'Langfuse', icon: 'fa-solid fa-shield-halved text-red-400' },
            { name: 'RestAPI', icon: 'fa-solid fa-server text-gray-400' },
            { name: 'Prompt Eng.', icon: 'fa-solid fa-terminal text-orange-400' },
        ]
    },
    {
        category: 'Databases',
        skills: [
            { name: 'Milvus', icon: 'fa-solid fa-cubes text-blue-500' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain colored' },
        ]
    },
    {
        category: 'Cloud & Infra',
        skills: [
            { name: 'Docker & K8s', icon: 'devicon-kubernetes-plain colored' },
            { name: 'GCP', icon: 'devicon-googlecloud-plain colored' },
            { name: 'Ubuntu', icon: 'devicon-ubuntu-plain colored' },
        ]
    },
    {
        category: 'MLOps',
        skills: [
            { name: 'MLFlow', icon: 'fa-solid fa-chart-line text-blue-400' },
            { name: 'Airflow', icon: 'devicon-apacheairflow-plain colored' },
            { name: 'ArgoCD', icon: 'fa-solid fa-arrows-rotate text-orange-400' },
            { name: 'Kafka', icon: 'devicon-apachekafka-plain colored' },
            { name: 'LabelStudio', icon: 'fa-solid fa-tag text-teal-400' },
        ]
    }
];

export default function TechStack() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-20 bg-[#031b38]/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">{t.stack.title}</h2>
                    <p className="text-cyan-100/80 max-w-2xl mx-auto">
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
                            className="bg-[#061f3f] border border-cyan-500/15 rounded-xl p-6 hover:border-cyan-400/25 transition-all hover:bg-[#082a52]/90 group shadow-lg shadow-cyan-500/10"
                        >
                            <h3 className="text-lg font-semibold text-cyan-100 mb-6 group-hover:text-cyan-300 transition-colors">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {group.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 group/icon">
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-cyan-500/10 group-hover/icon:bg-cyan-500/5 group-hover/icon:border-cyan-500/20 transition-all">
                                            <i className={`${skill.icon} text-2xl`}></i>
                                        </div>
                                        <span className="text-xs text-cyan-100/70 group-hover/icon:text-white transition-colors">
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
