import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

import { LanguageProvider } from '@/context/LanguageContext';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aditya Pratama Nusantara | AI & ML Engineer',
  description: 'AI & ML Engineering Specialist building reliable production systems.',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body className={clsx(spaceGrotesk.className, 'antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200')}>
        <LanguageProvider>
          <div className="fixed inset-0 -z-10 h-full w-full bg-[#031735] bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.22),transparent_36%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.25),transparent_32%),radial-gradient(circle_at_50%_78%,rgba(14,165,233,0.18),transparent_38%)]"></div>
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_72%,transparent_100%)] -z-10"></div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
