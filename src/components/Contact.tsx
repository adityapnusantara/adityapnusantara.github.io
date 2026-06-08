'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/adityaadit677@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <section className="py-24 md:py-32 pt-28">
        <div className="max-w-2xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="border-2 border-black p-12 md:p-16"
          >
            {/* Check mark in bordered square */}
            <div className="w-16 h-16 border-2 border-black mx-auto mb-6 flex items-center justify-center">
              <Check size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-black mb-3">Message Sent</h3>
            <p className="text-[#525252] font-body mb-8">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-mono text-sm uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors duration-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-[3px]"
            >
              Send Another Message
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 pt-28 texture-grid">
      <div className="max-w-2xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section heading — editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-black tracking-tight mb-4">
            {t.contactSection.title}
          </h2>
          <div className="h-[4px] bg-black w-24 mb-6" />
          <p className="text-lg font-body text-[#525252]">
            {t.contactSection.subtitle}
          </p>
        </motion.div>

        {/* Form — architectural, bottom-border inputs */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="border-2 border-black p-6 md:p-10 space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-black mb-3">
                {t.contactSection.form.name}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-0 py-3 border-0 border-b-2 border-black bg-transparent text-black font-body text-base focus:border-b-[4px] focus:outline-none transition-all placeholder:italic placeholder:text-[#525252]"
                placeholder={t.contactSection.form.name}
              />
            </div>
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-black mb-3">
                {t.contactSection.form.email}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-0 py-3 border-0 border-b-2 border-black bg-transparent text-black font-body text-base focus:border-b-[4px] focus:outline-none transition-all placeholder:italic placeholder:text-[#525252]"
                placeholder={t.contactSection.form.email}
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs uppercase tracking-widest text-black mb-3">
              {t.contactSection.form.subject}
            </label>
            <input
              type="text"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-0 py-3 border-0 border-b-2 border-black bg-transparent text-black font-body text-base focus:border-b-[4px] focus:outline-none transition-all placeholder:italic placeholder:text-[#525252]"
              placeholder={t.contactSection.form.subject}
            />
          </div>

          <div>
            <label className="block font-mono text-xs uppercase tracking-widest text-black mb-3">
              {t.contactSection.form.message}
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-0 py-3 border-0 border-b-2 border-black bg-transparent text-black font-body text-base focus:border-b-[4px] focus:outline-none transition-all resize-none placeholder:italic placeholder:text-[#525252]"
              placeholder={t.contactSection.form.message}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 text-black font-mono text-xs uppercase tracking-widest border-2 border-black p-4">
              <AlertCircle size={16} strokeWidth={1.5} />
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-mono text-sm uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors duration-100 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-[3px]"
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={18} strokeWidth={1.5} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} strokeWidth={1.5} />
                {t.contactSection.form.send}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
