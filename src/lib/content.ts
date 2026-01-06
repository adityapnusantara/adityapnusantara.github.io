export type Language = 'en' | 'id';

export const content = {
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            education: 'Education',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            badge: 'Available for new opportunities',
            title: 'AI & ML',
            subtitle: 'Engineering Specialist',
            description: 'I build responsible AI systems for fintech and fraud detection. Focusing on production-grade MLOps, scalability, and cost-efficient infrastructure.',
            ctaPrimary: "Let's Talk",
            ctaSecondary: 'View Work',
            location: 'Jakarta, Indonesia',
        },
        experience: {
            title: 'Experience',
            roles: [
                {
                    role: 'PLT AI & ML Engineering Specialist',
                    company: 'LinkAja',
                    period: 'Jan 2025 – Current',
                    type: 'Hybrid',
                    tag: 'Leadership',
                    description: [
                        'Responsible for leading LinkAja\'s AI ML team.',
                        'Designed and implemented automated denomination (denom) update system for prepaid products, including snapshotting, validation, approval, and rollback mechanisms to ensure pricing accuracy and compliance.',
                        'Ongoing research on the document validation process for cooperation agreements with configuration in the core system using Large Language Model (OpenAI).',
                        'Maintain the deployment of e-KYC services such as OCR, face biometrics, and ID card analysis.',
                        'Optimizing AI/ML infrastructure costs by migrating the Cloud Run scheduler to a GKE CronJob.',
                    ],
                },
                {
                    role: 'Senior AI & ML Engineering Associate',
                    company: 'LinkAja',
                    period: 'Dec 2023 – Dec 2024',
                    type: 'Hybrid',
                    tag: 'AI/ML',
                    description: [
                        'Deploy embedding and reranking in-house model using Text Embedding Inference from Hugging Face.',
                        'Set up and integrate the existing LLM project with Langfuse as a tracing and prompt management tool.',
                        'Researching, developing, and deploying service on Google Kubernetes Engine including Embedding Model, Reranking Model and LangChain Agent (using OpenAI) for several use case chatbots (Revenue Agent, Disbursement Agent, Confluence Agent).',
                        'Deployment and Maintenance of Research AI Scientist or Fraud Management Team Services using ArgoCD and GKE.',
                        'Utilized Google Storage for model storage and implemented Cloud Functions/Scheduler for service scheduling.',
                        'Develop and deploy a churn prediction model to support the business in determining promotions for customers.',
                    ],
                },
                {
                    role: 'Lead AI Engineer',
                    company: 'PT eBdesk Teknologi',
                    period: 'Nov 2021 – Nov 2023',
                    type: 'On-site',
                    tag: 'NLP',
                    description: [
                        'Developing a LLM-based application using semantic search as the knowledge retrieval method, accomplished by fine-tuning the XLM-RoBERTa model with Milvus as storage.',
                        'Developing an Image Search Engine using OpenAI\'s Open-Source CLIP Model for Matching Input Captions or Images, stored in Milvus.',
                        'Developing and Deploying a pipeline enrich data using Ray, encompassing engines like NER, Sentiment Analysis, Emotion Analysis, Summarization, and Fake News detection.',
                        'Fine-tuning a clustering model using Sentence Transformers with BERT for clustering news articles.',
                        'Updating all profiling engines to process social media account data for demographic and psychographic analysis.',
                    ],
                },
                {
                    role: 'AI Engineer',
                    company: 'PT eBdesk Teknologi',
                    period: 'Nov 2020 – Nov 2021',
                    type: 'On-site',
                    tag: 'Delivery',
                    description: [
                        'Maintaining and managing all engines for text processing in a production environment, and establishing an MLOps workflow.',
                        'Development: Creating training data for annotation using tools like LabelStudio.',
                        'Deployment: Deploying using a Ray cluster or utilizing FastAPI on Kubernetes.',
                        'Monitoring: Monitoring training results using MLFLOW and tracking errors using Sentry.',
                        'Maintenance: Leveraging Git Flow for organized code management.',
                        'Develop a translation model using MarianMT, trained on the Opus dataset (RU, FR, AR, ZH, ES to EN, ID).',
                    ],
                },
            ],
        },
        education: {
            title: 'Education',
            items: [
                {
                    degree: "Master's degree in Mathematics",
                    school: 'Institut Teknologi Sepuluh Nopember',
                    year: 'Jan 2018 – Aug 2019',
                },
                {
                    degree: "Bachelor's degree in Mathematics",
                    school: 'Universitas Airlangga',
                    year: 'Jul 2013 – Sep 2017',
                },
            ]
        },
        projects: {
            title: 'Selected Work',
            items: [
                {
                    title: 'Automated denom lifecycle',
                    description: 'Snapshotting, validation, approval, and rollback for prepaid pricing to keep compliance and accuracy intact.',
                    details: [
                        'Guardrails for risky updates',
                        'Auditable workflows',
                        'Rapid rollback path',
                    ]
                },
                {
                    title: 'Document validation agents',
                    description: 'Researching and building LLM-powered validation over cooperation agreements, integrated with core systems and governed prompts.',
                    details: [
                        'LLM + retrieval pipeline',
                        'Langfuse tracing & prompt safety',
                        'Fits existing approval loops',
                    ]
                }
            ]
        },
        stack: {
            title: 'Key Skills',
            description: 'Core competencies and technical stack.',
            items: [
                'Python', 'Natural Language Processing', 'Langchain', 'Machine Learning', 'Deep Learning',
                'Pytorch', 'RestAPI', 'Semantic Search', 'Transformers', 'Docker & Kubernetes',
                'Elasticsearch', 'MongoDB', 'Milvus', 'SQL', 'Ubuntu', 'Airflow', 'MLFlow',
                'LabelStudio', 'Spacy', 'Google Cloud Platform', 'ArgoCD', 'Kafka', 'Langfuse',
                'Prompt Engineering'
            ]
        },
        footer: {
            title: "Let's build something",
            subtitle: 'Open to collaborations on AI/ML products, fraud systems, and platform work.',
            email: 'Email Me',
            linkedin: 'Connect on LinkedIn',
            role: 'AI & ML Engineering Specialist',
        }
    },
    id: {
        nav: {
            about: 'Tentang',
            experience: 'Pengalaman',
            education: 'Pendidikan',
            skills: 'Keahlian',
            projects: 'Proyek',
            contact: 'Kontak',
        },
        hero: {
            badge: 'Tersedia untuk peluang baru',
            title: 'Spesialis AI & ML',
            subtitle: 'Engineering',
            description: 'Membangun sistem AI yang bertanggung jawab untuk fintech dan deteksi fraud. Fokus pada MLOps level produksi, skalabilitas, dan infrastruktur hemat biaya.',
            ctaPrimary: 'Hubungi Saya',
            ctaSecondary: 'Lihat Karya',
            location: 'Jakarta, Indonesia',
        },
        experience: {
            title: 'Pengalaman',
            roles: [
                {
                    role: 'PLT AI & ML Engineering Specialist',
                    company: 'LinkAja',
                    period: 'Jan 2025 – Saat Ini',
                    type: 'Hybrid',
                    tag: 'Leadership',
                    description: [
                        'Bertanggung jawab memimpin tim AI ML LinkAja.',
                        'Merancang dan mengimplementasikan sistem pembaruan denom otomatis untuk produk prabayar, termasuk snapshot, validasi, persetujuan, dan rollback.',
                        'Riset berjalan tentang proses validasi dokumen untuk perjanjian kerja sama menggunakan LLM (OpenAI).',
                        'Memelihara layanan e-KYC seperti OCR, biometrik wajah, dan analisis KTP.',
                        'Mengoptimalkan biaya infrastruktur AI/ML dengan migrasi dari Cloud Run scheduler ke GKE CronJob.',
                    ],
                },
                {
                    role: 'Senior AI & ML Engineering Associate',
                    company: 'LinkAja',
                    period: 'Des 2023 – Des 2024',
                    type: 'Hybrid',
                    tag: 'AI/ML',
                    description: [
                        'Deploy model embedding dan reranking in-house menggunakan Text Embedding Inference dari Hugging Face.',
                        'Integrasi Langfuse untuk tracing dan tata kelola prompt pada proyek LLM.',
                        'Riset, pengembangan, dan deployment layanan di GKE termasuk Model Embedding, Reranking, dan Agen LangChain untuk chatbot (Revenue, Disbursement, Confluence).',
                        'Deployment dan Pemeliharaan layanan tim Fraud/AI Scientist menggunakan ArgoCD dan GKE.',
                        'Menggunakan Google Storage untuk penyimpanan model dan Cloud Functions/Scheduler untuk penjadwalan layanan.',
                        'Mengembangkan dan deploy model prediksi churn untuk mendukung bisnis dalam menentukan promosi pelanggan.',
                    ],
                },
                {
                    role: 'Lead AI Engineer',
                    company: 'PT eBdesk Teknologi',
                    period: 'Nov 2021 – Nov 2023',
                    type: 'On-site',
                    tag: 'NLP',
                    description: [
                        'Mengembangkan aplikasi berbasis LLM menggunakan pencarian semantik dengan XLM-RoBERTa dan Milvus.',
                        'Mengembangkan Mesin Pencari Gambar menggunakan Model CLIP OpenAI untuk pencocokan Caption/Gambar.',
                        'Mengembangkan dan deploy pipeline pengayaan data dengan Ray (NER, Sentimen, Emosi, Peringkasan, Berita Palsu, dll).',
                        'Fine-tuning model clustering menggunakan Sentence Transformers dengan BERT untuk pengelompokan berita.',
                        'Memperbarui semua mesin profiling untuk memproses data akun media sosial untuk analisis demografis.',
                    ],
                },
                {
                    role: 'AI Engineer',
                    company: 'PT eBdesk Teknologi',
                    period: 'Nov 2020 – Nov 2021',
                    type: 'On-site',
                    tag: 'Delivery',
                    description: [
                        'Mengelola engine pemrosesan teks di produksi dan membangun workflow MLOps.',
                        'Development: Membuat data training menggunakan LabelStudio.',
                        'Deployment: Deploy menggunakan cluster Ray atau FastAPI di Kubernetes.',
                        'Monitoring: Memantau hasil training dengan MLFLOW dan tracking error dengan Sentry.',
                        'Maintenance: Menggunakan Git Flow untuk manajemen kode yang terorganisir.',
                        'Mengembangkan model terjemahan dengan MarianMT (RU, FR, AR, ZH, ES ke EN, ID).',
                    ],
                },
            ],
        },
        education: {
            title: 'Pendidikan',
            items: [
                {
                    degree: "S2 Matematika",
                    school: 'Institut Teknologi Sepuluh Nopember',
                    year: 'Jan 2018 – Agu 2019',
                },
                {
                    degree: "S1 Matematika",
                    school: 'Universitas Airlangga',
                    year: 'Jul 2013 – Sep 2017',
                },
            ]
        },
        projects: {
            title: 'Karya Terpilih',
            items: [
                {
                    title: 'Siklus hidup denom otomatis',
                    description: 'Snapshot, validasi, persetujuan, dan rollback untuk harga prabayar demi menjaga kepatuhan dan akurasi.',
                    details: [
                        'Pugaran untuk pembaruan berisiko',
                        'Alur kerja yang dapat diaudit',
                        'Jalur rollback cepat',
                    ]
                },
                {
                    title: 'Agen validasi dokumen',
                    description: 'Riset dan membangun validasi bertenaga LLM atas perjanjian kerja sama, terintegrasi dengan sistem inti.',
                    details: [
                        'Pipeline LLM + retrieval',
                        'Langfuse tracing & keamanan prompt',
                        'Sesuai dengan alur persetujuan yang ada',
                    ]
                }
            ]
        },
        stack: {
            title: 'Keahlian Utama',
            description: 'Kompetensi inti dan teknologi.',
            items: [
                'Python', 'Natural Language Processing', 'Langchain', 'Machine Learning', 'Deep Learning',
                'Pytorch', 'RestAPI', 'Semantic Search', 'Transformers', 'Docker & Kubernetes',
                'Elasticsearch', 'MongoDB', 'Milvus', 'SQL', 'Ubuntu', 'Airflow', 'MLFlow',
                'LabelStudio', 'Spacy', 'Google Cloud Platform', 'ArgoCD', 'Kafka', 'Langfuse',
                'Prompt Engineering'
            ]
        },
        footer: {
            title: 'Mari bangun sesuatu',
            subtitle: 'Terbuka untuk kolaborasi produk AI/ML, sistem fraud, dan pekerjaan platform.',
            email: 'Email Saya',
            linkedin: 'Terhubung di LinkedIn',
            role: 'Spesialis Engineering AI & ML',
        }
    },
};
