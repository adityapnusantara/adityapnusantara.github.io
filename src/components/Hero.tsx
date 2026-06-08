'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const instant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-16 texture-lines-h">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-16 lg:gap-20">
          {/* Left content — editorial typography */}
          <div className="flex-1 max-w-3xl">
            {/* Status badge */}
            <motion.div
              variants={instant}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-3 border border-black px-4 py-2 font-mono text-xs uppercase tracking-widest mb-10"
            >
              <span className="w-2 h-2 bg-black" />
              {t.hero.badge}
            </motion.div>

            {/* Oversized headline — typography as graphic */}
            <motion.h1
              variants={instant}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-black leading-none tracking-tighter"
            >
              {t.hero.title}
            </motion.h1>

            {/* Decorative thick rule with square mark */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-[8px] bg-black flex-1" />
              <div className="w-4 h-4 border-2 border-black" />
            </div>

            {/* Subtitle — serif italic */}
            <motion.p
              variants={instant}
              initial="hidden"
              animate="show"
              className="text-3xl md:text-4xl font-heading italic text-black leading-tight"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={instant}
              initial="hidden"
              animate="show"
              className="text-lg md:text-xl font-body text-[#525252] max-w-xl mt-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={instant}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row items-start gap-4 mt-12"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-black text-white px-8 py-4 font-mono text-sm uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors duration-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-[3px]"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform duration-100" />
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-3 border-2 border-black text-black px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-[3px]"
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={instant}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 mt-12 font-mono text-xs uppercase tracking-widest text-[#525252]"
            >
              <MapPin size={14} strokeWidth={1.5} />
              {t.hero.location}
            </motion.div>
          </div>

          {/* Right — Avatar with sharp architectural frame */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="hidden lg:block flex-shrink-0"
          >
            <div className="relative">
              {/* Main avatar — sharp square, grayscale */}
              <div className="w-72 h-72 overflow-hidden border-2 border-black">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHn3rajtD-dsg/profile-displayphoto-shrink_800_800/B56ZW5Th3LGQAc-/0/1742570661850?e=1782345600&v=beta&t=wc6CHmJydAWPEYw53-H_nE2ryuJagan9K2rl-iaw6fw"
                  alt="Aditya Pratama Nusantara"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative offset frames — sharp, architectural */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 border-2 border-black -z-10" />
              <div className="absolute -bottom-8 -right-8 w-72 h-72 border border-black/20 -z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
