'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <>
      {/* Thick rule above footer */}
      <div className="border-t-[8px] border-black" />

      <footer className="bg-black text-white texture-lines-v-inverted">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
          {/* CTA Section */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-heading italic text-white leading-none tracking-tight mb-6">
              {t.footer.title}
            </h2>
            <p className="text-lg font-body text-white/70 max-w-lg">
              {t.footer.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="mailto:adityaadit677@gmail.com"
                className="group inline-flex items-center gap-3 border-2 border-white px-8 py-4 font-mono text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[3px]"
              >
                <Mail size={16} strokeWidth={1.5} className="text-white group-hover:text-black" />
                {t.footer.email}
                <ArrowUpRight size={16} strokeWidth={1.5} className="text-white group-hover:text-black" />
              </a>
              <a
                href="https://linkedin.com/in/adityapn"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-2 border-white px-8 py-4 font-mono text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-[3px]"
              >
                <Linkedin size={16} strokeWidth={1.5} className="text-white group-hover:text-black" />
                {t.footer.linkedin}
                <ArrowUpRight size={16} strokeWidth={1.5} className="text-white group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-white/50 uppercase tracking-widest">
              Aditya Pratama Nusantara · {t.footer.role}
            </p>
            <p className="font-mono text-xs text-white/50">
              © {year}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
