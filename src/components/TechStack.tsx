'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

type StackItem = {
  name: string;
  icon?: string;
};

const stackData: { category: string; items: StackItem[] }[] = [
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'PyTorch', icon: 'devicon-pytorch-original' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
      { name: 'spaCy' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'NLP' },
      { name: 'Transformers' },
      { name: 'Semantic Search' },
      { name: 'LangChain' },
      { name: 'Langfuse' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    category: 'Data & Storage',
    items: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain' },
      { name: 'Milvus' },
    ],
  },
  {
    category: 'Cloud & MLOps',
    items: [
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
      { name: 'GCP', icon: 'devicon-googlecloud-plain' },
      { name: 'Airflow', icon: 'devicon-apacheairflow-plain' },
      { name: 'Kafka', icon: 'devicon-apachekafka-original' },
      { name: 'ArgoCD', icon: 'devicon-argocd-plain' },
      { name: 'Ubuntu', icon: 'devicon-ubuntu-plain' },
      { name: 'MLFlow' },
      { name: 'LabelStudio' },
    ],
  },
];

export default function TechStack() {
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
            {t.stack.title}
          </h2>
          <p className="text-[#525252] font-body mb-12 -mt-6">
            {t.stack.description}
          </p>
        </motion.div>

        <div className="space-y-10">
          {stackData.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#525252] border-b-2 border-black pb-2 mb-6">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="group inline-flex items-center gap-2 border border-black px-4 py-2 font-body text-sm text-black hover:bg-black hover:text-white transition-colors duration-100"
                  >
                    {item.icon && (
                      <i className={`${item.icon} text-lg grayscale group-hover:invert`} />
                    )}
                    {item.name}
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
