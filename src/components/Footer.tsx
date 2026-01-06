'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Contact CTA */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.footer.title}</h2>
                        <p className="text-xl text-slate-400 mb-8">
                            {t.footer.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:adityaadit677@gmail.com"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-lg flex items-center gap-2"
                            >
                                <Mail size={20} />
                                {t.footer.email}
                            </a>
                            <a
                                href="https://linkedin.com/in/adityapn"
                                target="_blank"
                                rel="noreferrer"
                                className="px-8 py-4 bg-slate-900 border border-white/10 text-white font-medium rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
                            >
                                <Linkedin size={20} />
                                {t.footer.linkedin}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-slate-500 text-sm">
                    <div className="mb-4 md:mb-0">
                        <p className="mb-1 text-slate-300 font-medium">Aditya Pratama Nusantara</p>
                        <p>{t.footer.role}</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#home" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a>
                        <a href="#experience" className="hover:text-cyan-400 transition-colors">{t.nav.experience}</a>
                        <a href="#skills" className="hover:text-cyan-400 transition-colors">{t.nav.skills}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
