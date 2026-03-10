'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import Image from 'next/image';
import { Heart, Stars, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Generate cute floating hearts
  const floatingHearts = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full bg-[#faf7f2] overflow-hidden flex flex-col items-center justify-start pt-24 md:pt-32 pb-20"
    >
      {/* Award-winning Mesh Gradient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-br from-[#ffdbe0] to-[#fff3e0] opacity-80 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute right-[0%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-gradient-to-tl from-[#e6daff] to-[#fcebfa] opacity-70 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[-10%] left-[20%] h-[45vw] w-[45vw] rounded-full bg-[#ffeaed] opacity-60 blur-[100px]"
        />

        {/* Subtle grid pattern for premium modern feel */}
        <div className="absolute inset-0 opacity-[0.2]"
          style={{ backgroundImage: `radial-gradient(circle at center, #ffb3c1 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }} />
      </div>

      {/* Floating Magic Hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-[#ff6b81]/30"
            style={{ left: heart.left, top: heart.top }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Heart size={heart.size} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center flex-1 h-full">

        {/* Text Section (Top) */}
        <motion.div
          style={{ y: textY }}
          className="text-center w-full z-20 flex flex-col items-center justify-center mb-4 md:mb-16 mt-2 md:mt-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, type: "spring", stiffness: 80, delay: 0.1 }}
          >
            {/* Cute Badge */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/60 px-4 md:px-5 py-2 md:py-2.5 shadow-sm backdrop-blur-md"
            >
              <Stars className="h-4 w-4 md:h-5 md:w-5 text-[#ff8fa3]" />
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#ff8fa3]">
                We Are Getting Married
              </span>
              <Stars className="h-4 w-4 md:h-5 md:w-5 text-[#ff8fa3]" />
            </motion.div>

            {/* Title */}
            <h1 className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 font-serif text-[#4a3b3c] mb-2 md:mb-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-none tracking-tight">
              <span className="block pr-0 md:pr-1">Shashini</span>
              <div className="relative flex items-center justify-center w-10 h-10 md:w-20 md:h-20 my-0.5 md:my-0">
                <span className="absolute z-10 text-[#ff4d6d] text-2xl sm:text-4xl md:text-5xl lg:text-6xl italic">&amp;</span>
                {/* Rotating decorative sunburst */}
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  viewBox="0 0 100 100"
                  className="absolute w-full h-full text-[#ffb3c1]/40"
                >
                  <path d="M50 0 L55 40 L100 50 L55 60 L50 100 L45 60 L0 50 L45 40 Z" fill="currentColor" />
                </motion.svg>
              </div>
              <span className="block pl-0 md:pl-1">Madhawa</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#857274] font-medium tracking-wide max-w-xl mx-auto px-4 sm:px-6 leading-relaxed">
              A magical celebration of love, <br className="hidden sm:block" />laughter, and our happily ever after.
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Images Galore Layer */}
        <div className="relative w-full flex-1 flex items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[600px] lg:min-h-[700px] max-w-6xl z-10 perspective-[1000px] mt-4 md:mt-0">

          {/* Left Image */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -40, rotateY: 15, rotateZ: -10, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0, rotateZ: -6, scale: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, rotateZ: -3, zIndex: 40 }}
            className="absolute left-[2%] sm:left-[5%] top-[10%] w-16 sm:w-32 md:w-48 lg:w-64 aspect-[3/4] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-[0_15px_30px_rgba(255,143,163,0.3)] border-[2px] sm:border-[4px] md:border-[8px] border-white/90 bg-white z-10"
          >
            <div className="relative w-full h-full rounded-[1.2rem] md:rounded-[2rem] overflow-hidden">
              <Image
                src="/bride.webp"
                alt="Beautiful Bride"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 250px, 350px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ffb3c1]/30 to-transparent pointer-events-none mix-blend-overlay" />
            </div>
            {/* Cute Corner Glow */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ffeaed] blur-2xl rounded-full pointer-events-none" />
          </motion.div>

          {/* Right Image */}
          <motion.div
            style={{ y: y3 }}
            initial={{ opacity: 0, x: 40, rotateY: -15, rotateZ: 10, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0, rotateZ: 6, scale: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.6, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, rotateZ: 3, zIndex: 40 }}
            className="absolute right-[2%] sm:right-[5%] bottom-[10%] w-16 sm:w-32 md:w-48 lg:w-64 aspect-[3/4] rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-[0_15px_30px_rgba(255,143,163,0.3)] border-[2px] sm:border-[4px] md:border-[8px] border-white/90 bg-white z-10"
          >
            <div className="relative w-full h-full rounded-[1.2rem] md:rounded-[2rem] overflow-hidden">
              <Image
                src="/3_bridemiads.webp"
                alt="Bridesmaids"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 250px, 350px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c8b6ff]/30 to-transparent pointer-events-none mix-blend-overlay" />
            </div>
            {/* Cute Corner Glow */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#e6daff] blur-2xl rounded-full pointer-events-none" />
          </motion.div>

          {/* Center Image Component Card */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.85, y: 60 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1.6, delay: 0.2, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.02, zIndex: 50 }}
            className="relative z-30 flex flex-col items-center"
          >
            <div className="relative w-[240px] sm:w-64 md:w-[22rem] lg:w-[26rem] aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(255,77,109,0.2)] md:shadow-[0_30px_60px_rgba(255,77,109,0.25)] border-[5px] md:border-[10px] border-white/90 bg-white backdrop-blur-md">
              <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#ffeaed]">
                <Image
                  src="/bride_couple.webp"
                  alt="Shashini and Madhawa"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 450px, 600px"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_40%,rgba(255,179,193,0.15)_100%)] pointer-events-none mix-blend-overlay" />
              </div>
            </div>

            {/* Overlapping Glass Date Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
              className="absolute -bottom-4 md:-bottom-8 z-40 rounded-[1.5rem] md:rounded-[2rem] border-2 border-white bg-white/70 px-4 sm:px-8 py-2 md:py-4 shadow-[0_10px_20px_rgba(255,143,163,0.2)] md:shadow-[0_15px_30px_rgba(255,143,163,0.2)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-1.5 sm:gap-4">
                <Sparkles className="h-3 w-3 sm:h-5 sm:w-5 text-[#ff8fa3]" />
                <span className="font-serif text-sm sm:text-2xl font-bold text-[#4a3b3c] tracking-wider whitespace-nowrap">18 JUNE 2026</span>
                <Sparkles className="h-3 w-3 sm:h-5 sm:w-5 text-[#ff8fa3]" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Magical Bottom Transition into the Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-[#faf7f2] to-transparent z-20 pointer-events-none flex items-end justify-center pb-4">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[3px] h-10 rounded-full bg-gradient-to-b from-[#ffb3c1] to-transparent"
        />
      </div>

    </section>
  );
}
