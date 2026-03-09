'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock3, MapPin, Sparkles, Crown, Heart } from 'lucide-react';
import Image from 'next/image';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: 'June 18, 2026',
      sub: 'Thursday',
    },
    {
      icon: Clock3,
      label: 'Time',
      value: '10:30 AM',
      sub: 'Auspicious Time',
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'Golden Rose Hotel',
      sub: 'Colombo, Sri Lanka',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#2c0710_0%,#4a0f18_50%,#1a0408_100%)] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.05] mix-blend-screen"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, #C9A227 1.2px, transparent 1.2px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-[#d81b3f]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-24">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]"
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 -m-8 rounded-full bg-[#C9A227]/20 blur-3xl" />

            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-[420px] sm:h-[520px] md:h-[600px] w-full max-w-[420px]"
            >
              {/* Ornate Arch Frames */}
              <div className="absolute -inset-6 rounded-t-[220px] rounded-b-[40px] border border-[#C9A227]/20 hidden md:block" />
              <div className="absolute -inset-3 rounded-t-[210px] rounded-b-[35px] border border-[#C9A227]/40 hidden md:block" />

              {/* Masked Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[30px] md:rounded-t-[200px] md:rounded-b-[30px] border border-[#C9A227]/60 shadow-[0_20px_50px_rgba(201,162,39,0.2)] bg-[#1a0408]">
                <Image
                  src="/1.jpg"
                  alt="Couple Cartoon"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />

                {/* Elegant overlay gradient to blend bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0408] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8 text-center text-[#f5e6c8]">
                  <p className="font-serif text-2xl tracking-widest text-[#C9A227]">A & S</p>
                </div>
              </div>

              {/* Secondary overlapping image for premium collage effect */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -15 }}
                animate={inView ? { opacity: 1, x: 0, rotate: -8 } : {}}
                transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05, rotate: -4, zIndex: 40 }}
                className="absolute -left-4 sm:-left-8 md:-left-24 bottom-8 sm:bottom-12 md:bottom-24 w-36 md:w-48 aspect-[3/4] rounded-t-full rounded-b-2xl border-[6px] md:border-[8px] border-[#1a0408] shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden bg-[#2c0710] z-20 group"
              >
                <div className="relative w-full h-full rounded-t-full rounded-b-[14px] overflow-hidden">
                  <Image
                    src="/6.jpg"
                    alt="Happy Brides Taking Images"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                  <div className="absolute inset-0 mix-blend-overlay bg-[#C9A227]/10 pointer-events-none" />
                </div>
              </motion.div>

              {/* Floating Element - Heart */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-2 sm:-right-6 md:-right-10 top-20 md:top-40 flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#2c0710]/80 shadow-[0_0_30px_rgba(201,162,39,0.3)] backdrop-blur-md"
              >
                <div className="text-center">
                  <Heart className="mx-auto h-6 w-6 md:h-8 md:w-8 text-[#C9A227] fill-[#C9A227]/20" />
                  <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-[#f5e6c8]">Forever</span>
                </div>
              </motion.div>

              {/* Sparkle effects */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-10 top-20 h-3 w-3 rounded-full bg-[#fdf8f0] blur-[2px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute right-20 bottom-32 h-4 w-4 rounded-full bg-[#C9A227] blur-[2px]"
              />
            </motion.div>
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-[#1a0408]/50 px-5 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#C9A227]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-medium">
                The Sacred Celebration
              </span>
            </div>

            <h2 className="mb-8 font-serif text-5xl font-light leading-snug text-[#f5e6c8] md:text-7xl">
              Wedding <br />
              <span className="italic text-[#C9A227]">Ceremony</span>
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-[#f5e6c8]/70 max-w-lg">
              With immense joy in our hearts, we invite you to share our happiness as we exchange our vows. Join us to witness a breathtaking celebration of love, culture, and eternal union.
            </p>

            <div className="flex flex-col gap-5">
              {details.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(201,162,39,0.08)' }}
                    className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-[#C9A227]/20 bg-[#2c0710]/40 p-5 shadow-lg backdrop-blur-md transition-all cursor-default"
                  >
                    <div className="absolute left-0 top-0 w-1 h-full bg-[#C9A227] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/30 bg-gradient-to-br from-[#4a0f18] to-[#1a0408] shadow-inner">
                      <Icon className="h-7 w-7 text-[#C9A227]" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#C9A227]/70 mb-1">
                        {detail.label}
                      </p>
                      <h3 className="font-serif text-2xl text-[#f5e6c8]">
                        {detail.value}
                      </h3>
                      <p className="text-sm text-[#f5e6c8]/50 mt-1">
                        {detail.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 overflow-hidden rounded-2xl border border-[#C9A227]/20 bg-[linear-gradient(135deg,rgba(74,15,24,0.4),rgba(26,4,8,0.8))] p-6 shadow-2xl backdrop-blur-lg relative"
            >
              <div className="absolute right-0 top-0 opacity-10">
                <Crown className="w-32 h-32 -mt-8 -mr-8 text-[#C9A227]" />
              </div>

              <h4 className="text-xs uppercase tracking-widest text-[#C9A227] mb-3 font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#C9A227]"></span> Guest Notes
              </h4>
              <div className="space-y-2">
                <p className="text-[#f5e6c8]/80 text-sm md:text-base"><span className="text-[#C9A227]">Dress Code:</span> Formal Kandyan / Western Formal</p>
                <p className="text-[#f5e6c8]/80 text-sm md:text-base"><span className="text-[#C9A227]">Reception:</span> To follow immediately after the ceremony</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}