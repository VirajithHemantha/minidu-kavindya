'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Sparkles, UploadCloud } from 'lucide-react';

export default function MemoryUploadSection() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const uploadLink = "https://drive.google.com/drive/folders/1mdCDBpSzoeeoWyIq8HcprSpJMfZ-_xok?usp=drive_link";

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#1b050d_0%,#310b18_50%,#1b050d_100%)] py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-screen"
          style={{ backgroundImage: `linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-[#2c0710]/50 px-5 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#C9A227]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C9A227]">
              Share Your Memories
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-[#f5e6c8] md:text-6xl lg:text-7xl">
            Capture the <span className="italic text-[#C9A227]">Magic</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#f5e6c8]/70 mx-auto">
            We would love to see our special day through your eyes. Please upload the photos and videos you take to our shared folder so we can cherish these moments forever.
          </p>

          <motion.a
            href={uploadLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(120deg,#C9A227_0%,#f0d18b_50%,#C9A227_100%)] px-8 py-4 font-semibold uppercase tracking-[0.2em] text-[#1a0408] shadow-[0_0_40px_rgba(201,162,39,0.4)] transition-all hover:shadow-[0_0_60px_rgba(201,162,39,0.6)]"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <UploadCloud className="h-5 w-5" />
            <span>Upload Memories</span>
            <Camera className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
