'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Play, Pause, Volume2, VolumeX, Heart } from 'lucide-react';

export default function SaveTheDateVideo() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [inView]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#14111c_0%,#261f31_45%,#faf7f2_100%)] py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-[140px]" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#ff4d6d]/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-[#c084fc]/10 blur-[120px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-screen"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,162,39,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.2) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-black/40 px-5 py-2 backdrop-blur-md shadow-[0_10px_25px_rgba(201,162,39,0.15)]">
            <Sparkles className="h-4 w-4 text-[#C9A227]" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A227]">
              Cinematic Teaser
            </span>
            <Sparkles className="h-4 w-4 text-[#C9A227]" />
          </div>

          <h2 className="font-serif text-4xl font-light tracking-wide text-[#fff7e8] sm:text-5xl md:text-6xl lg:text-7xl">
            Save The <span className="italic text-[#C9A227]">Date</span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]/60" />
            <Heart size={14} className="text-[#C9A227] fill-[#C9A227]/20" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]/60" />
          </div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto overflow-hidden rounded-[2.5rem] border border-[#C9A227]/40 bg-[#14111c] shadow-[0_25px_70px_rgba(0,0,0,0.6)] aspect-[9/16] w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Inner Golden Frame */}
          <div className="absolute inset-4 z-20 pointer-events-none rounded-[1.8rem] border border-[#C9A227]/30 transition-all duration-500 group-hover:border-[#C9A227]/60 group-hover:scale-[0.99]" />

          {/* Video Element */}
          <video
            ref={videoRef}
            src="/WhatsApp Video 2026-05-17 at 02.21.42.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onClick={togglePlay}
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 sm:p-8 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-300">
            {/* Top Bar: Title & Status */}
            <div className="flex items-center justify-between w-full">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/20 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md shadow-lg">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Kavindya & Minindu
              </span>
            </div>

            {/* Center: Big Play/Pause Button */}
            <div className="flex items-center justify-center flex-1">
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-black backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 active:scale-95"
                >
                  <Play className="h-8 w-8 ml-1 text-[#14111c]" fill="currentColor" />
                </button>
              )}
            </div>

            {/* Bottom Bar: Interactive Controls */}
            <div className="flex items-center justify-between w-full pointer-events-auto pt-4 border-t border-white/10">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-[#C9A227] transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4 text-[#C9A227]" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 text-[#C9A227]" /> Play
                  </>
                )}
              </button>

              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60">
                <Volume2 className="h-4 w-4 text-[#C9A227]" /> Website Audio
              </span>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 font-serif text-xl italic text-[#7a6258] md:text-2xl"
        >
          "Two souls, one beautiful journey."
        </motion.p>
      </div>
    </section>
  );
}
