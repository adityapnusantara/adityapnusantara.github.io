'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Linkedin, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'id' : 'en');
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-[#041b3a]/85 backdrop-blur-md border-b border-cyan-500/15 shadow-lg shadow-cyan-500/10 py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-sky-400">
                    Aditya Pratama Nusantara
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-sky-100 hover:text-cyan-200 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-6 w-px bg-white/10 mx-2" />

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-sky-100 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-cyan-500/10 border border-cyan-500/20"
                    >
                        <Globe size={16} />
                        <span className="uppercase">{language}</span>
                    </button>

                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/adityapn" target="_blank" rel="noreferrer" className="text-cyan-200/80 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:adityaadit677@gmail.com" className="text-cyan-200/80 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-sky-100 hover:text-white transition-colors px-2 py-1 rounded-md bg-cyan-500/10"
                    >
                        <span className="uppercase">{language}</span>
                    </button>

                    <button
                        className="text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-[#031a36]/95 backdrop-blur-xl border-b border-cyan-500/15 p-6"
                >
                    <div className="flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-sky-100 hover:text-cyan-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-6 mt-4">
                            <a href="https://linkedin.com/in/adityapn" target="_blank" rel="noreferrer" className="text-cyan-200/80 hover:text-white">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:adityaadit677@gmail.com" className="text-cyan-200/80 hover:text-white">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
