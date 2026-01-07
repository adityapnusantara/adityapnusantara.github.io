'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-400/25 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-10 right-1/3 w-[360px] h-[360px] bg-cyan-500/15 rounded-full blur-[90px] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b2d55]/60 border border-cyan-500/30 text-cyan-100 text-sm font-medium mb-6 shadow-lg shadow-cyan-500/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        {t.hero.badge}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
                        {t.hero.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            {t.hero.subtitle}
                        </span>
                    </h1>

                    <p className="text-lg text-sky-100/80 mb-8 max-w-xl leading-relaxed">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="group px-8 py-3 bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
                        >
                            {t.hero.ctaPrimary}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-white/10 border border-cyan-500/20 text-cyan-100 font-medium rounded-full hover:bg-white/15 transition-all backdrop-blur-sm"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-cyan-100/70">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-cyan-300" />
                            <span>{t.hero.location}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                        {/* Spinning/Glowing elements behind avatar */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-white/20"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20"
                        />

                        <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-cyan-500/25 shadow-2xl shadow-cyan-500/25 z-10">
                            <Image
                                src="https://media.licdn.com/dms/image/v2/D5603AQHn3rajtD-dsg/profile-displayphoto-shrink_800_800/B56ZW5Th3LGQAc-/0/1742570661850?e=1769040000&v=beta&t=21vFPvpVsZQM3VvjNpavZhLnsSFycKA-DTEmhTTxILE"
                                alt="Aditya Pratama Nusantara"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
