'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Type, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    // State for form fields and status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Status states
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/adityaadit677@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _template: 'table', // Nicer email format
                    _captcha: 'false'  // Disable captcha for cleaner UX
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.error("Form submission error:", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Network error:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contactSection.title}</h2>
                        <p className="text-slate-400 text-lg">{t.contactSection.subtitle}</p>
                    </div>

                    <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-xl relative overflow-hidden">

                        {/* Success Message */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-slate-900/95 z-20 flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                <p className="text-slate-400 max-w-md mb-8">
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-medium border border-white/5"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">
                                        {t.contactSection.form.name}
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                                            <User size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={status === 'submitting'}
                                            className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">
                                        {t.contactSection.form.email}
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                                            <Mail size={18} />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={status === 'submitting'}
                                            className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">
                                    {t.contactSection.form.subject}
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                                        <Type size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                        className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 disabled:opacity-50"
                                        placeholder="Project Collaboration"
                                    />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">
                                    {t.contactSection.form.message}
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-6 text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                                        <MessageSquare size={18} />
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={status === 'submitting'}
                                        className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none disabled:opacity-50"
                                        placeholder="Hello, I'd like to discuss..."
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                    <AlertCircle size={16} />
                                    Something went wrong. Please try again or email me directly.
                                </div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl py-4 hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        {t.contactSection.form.send}
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
