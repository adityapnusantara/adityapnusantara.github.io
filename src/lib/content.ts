export type Language = 'en' | 'id';

export const content = {
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
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
                    description: [
                        'Lead the AI/ML squad, owning delivery and production stability.',
                        'Automated denom updates with validation, approvals, and rollback paths to protect pricing accuracy.',
                        'Researching document validation flows using LLMs integrated with the core system.',
                        'Maintain e-KYC stack (OCR, biometrics, ID analysis) and optimize infra costs via GKE CronJobs.',
                    ],
                },
                {
                    role: 'Senior AI & ML Engineering Associate',
                    company: 'LinkAja',
                    description: [
                        'Deployed in-house embedding and reranking models with Hugging Face TEI.',
                        'Integrated Langfuse for tracing and prompt governance across LLM projects.',
                        'Built GKE-hosted agents (revenue, disbursement, Confluence) using OpenAI + LangChain.',
                        'Ran fraud/AI scientist services via ArgoCD + GKE; used GCS for model storage and schedulers.',
                        'Shipped churn prediction to guide promotion targeting.',
                    ],
                },
                {
                    role: 'Lead AI Engineer',
                    company: 'PT eBesak Teknologi',
                    description: [
                        'Built semantic search with XLM-RoBERTa embeddings + Milvus across multi-format corpora.',
                        'Created CLIP-powered image search for caption/image matching within chat experiences.',
                        'Designed Ray-based enrichment pipelines (NER, sentiment, summarization, fake news, etc.).',
                        'Fine-tuned BERT clustering for news groupings, aiding daily reporting.',
                    ],
                },
                {
                    role: 'AI Engineer',
                    company: 'PT eBdesk Teknologi',
                    description: [
                        'Owned text processing engines in production with full MLOps workflow.',
                        'Built translation with MarianMT for RU/FR/AR/ZH/ES to EN/ID news streams.',
                        'Set up LabelStudio, MLFlow, Ray/FastAPI on Kubernetes, and Sentry monitoring.',
                    ],
                },
            ],
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
            title: 'Tech Stack',
            description: 'Technical expertise spanning backend systems, fintech solutions, and large-scale AI/ML infrastructure.',
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
                    description: [
                        'Memimpin tim AI/ML, bertanggung jawab atas delivery dan stabilitas produksi.',
                        'Otomatisasi pembaruan denom dengan validasi dan alur persetujuan untuk akurasi harga.',
                        'Riset validasi dokumen menggunakan LLM yang terintegrasi dengan sistem inti.',
                        'Memelihara stack e-KYC (OCR, biometrik, analisis ID) dan optimasi biaya infra via GKE CronJobs.',
                    ],
                },
                {
                    role: 'Senior AI & ML Engineering Associate',
                    company: 'LinkAja',
                    description: [
                        'Deploy model embedding dan reranking in-house dengan Hugging Face TEI.',
                        'Integrasi Langfuse untuk tracing dan tata kelola prompt di proyek LLM.',
                        'Membangun agen di GKE (revenue, disbursement, Confluence) dengan OpenAI + LangChain.',
                        'Menjalankan layanan fraud/AI scientist via ArgoCD + GKE; menggunakan GCS untuk storage model.',
                        'Mengirimkan prediksi churn untuk panduan target promosi.',
                    ],
                },
                {
                    role: 'Lead AI Engineer',
                    company: 'PT eBesak Teknologi',
                    description: [
                        'Membangun pencarian semantik dengan embedding XLM-RoBERTa + Milvus.',
                        'Membuat pencarian gambar berbasis CLIP untuk pencocokan caption/gambar dalam chat.',
                        'Merancang pipeline enrichment berbasis Ray (NER, sentimen, ringkasan, berita palsu, dll).',
                        'Fine-tuning clustering BERT untuk pengelompokan berita laporan harian.',
                    ],
                },
                {
                    role: 'AI Engineer',
                    company: 'PT eBdesk Teknologi',
                    description: [
                        'Mengelola engine pemrosesan teks di produksi dengan alur kerja MLOps penuh.',
                        'Membangun terjemahan dengan MarianMT untuk arus berita RU/FR/AR/ZH/ES ke EN/ID.',
                        'Setup LabelStudio, MLFlow, Ray/FastAPI di Kubernetes, dan monitoring Sentry.',
                    ],
                },
            ],
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
            title: 'Tech Stack',
            description: 'Keahlian teknis mencakup sistem backend, solusi fintech, dan infrastruktur AI/ML skala besar.',
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
