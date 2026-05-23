'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flower2, Heart, Sparkles, Calendar, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/r/WhatsApp%20Image%202026-05-21%20at%2002.32.50.jpeg")' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,28,0.42)_0%,rgba(20,17,28,0.58)_55%,rgba(20,17,28,0.82)_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(240,218,170,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(240,218,170,0.25) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0daaa]/55 bg-black/30 px-5 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-[#f0daaa]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f0daaa] sm:text-xs">
            Wedding Celebration
          </span>
          <Sparkles className="h-4 w-4 text-[#f0daaa]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="font-serif text-4xl font-light leading-tight tracking-[0.08em] text-[#fff7e8] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          KAVINDYA <span className="text-[#f0daaa]">&amp;</span> MININDU
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-5 max-w-3xl text-sm leading-relaxed text-[#f8ead0] sm:text-base md:text-lg"
        >
          With joyful hearts, we invite you to celebrate our wedding night function and share in the happiness of our marriage.
        </motion.p>

        {/* Temple Traditions Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 w-full max-w-2xl rounded-3xl border border-[#f0daaa]/45 bg-black/35 px-6 py-8 backdrop-blur-sm sm:px-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Flower2 className="h-5 w-5 text-[#f0daaa]" />
            <p className="text-xs uppercase tracking-[0.28em] text-[#f0daaa]">Temple Traditions & Almsgiving</p>
            <Flower2 className="h-5 w-5 text-[#f0daaa]" />
          </div>
          <p className="text-sm leading-relaxed text-[#f8ead0]">
            The temple traditions and almsgiving (Danaya) to the Venerable Monks.
          </p>
          <div className="mt-5 space-y-3 text-left">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#fff7e8]">July 02, 2026 (Thursday)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#f8ead0]">08:00 AM - 01:00 PM</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#f8ead0]">At Giritale Lake Temple</p>
            </div>
          </div>
        </motion.div>

        {/* Wedding Night Function Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 w-full max-w-2xl rounded-3xl border border-[#f0daaa]/45 bg-black/35 px-6 py-8 backdrop-blur-sm sm:px-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="h-5 w-5 text-[#f0daaa] fill-current" />
            <p className="text-xs uppercase tracking-[0.28em] text-[#f0daaa]">Wedding Night Function</p>
            <Heart className="h-5 w-5 text-[#f0daaa] fill-current" />
          </div>
          <p className="text-sm leading-relaxed text-[#f8ead0]">
            You are warmly invited to our wedding night celebration.
          </p>
          <div className="mt-5 space-y-3 text-left">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#fff7e8]">July 04, 2026 (Saturday)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#f8ead0]">06:00 PM - 11:00 PM</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#f8ead0]">At Golden Flower Hotel</p>
            </div>
          </div>
        </motion.div>

        {/* Wedding Date Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 rounded-3xl border border-[#f0daaa]/45 bg-black/35 px-6 py-5 backdrop-blur-sm sm:px-10"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#f0daaa]">Wedding Date</p>
          <p className="mt-2 font-serif text-2xl text-[#fff7e8] sm:text-3xl">July 04, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-8 flex items-center gap-3 text-[#f0daaa]"
        >
          <Sparkles className="h-4 w-4" />
          <Heart className="h-4 w-4 fill-current" />
          <Sparkles className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
