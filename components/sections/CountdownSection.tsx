'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo, useState } from 'react';
import { Heart, Stars } from 'lucide-react';
import Image from 'next/image';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const targetDate = useMemo(() => new Date('2026-06-18T10:30:00').getTime(), []);

  const getTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  // Generate cute floating hearts
  const floatingHearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#faf7f2] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Award-winning Mesh Gradient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-br from-[#ffdbe0] to-[#fff3e0] opacity-70 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] top-[40%] h-[40vw] w-[40vw] rounded-full bg-gradient-to-tl from-[#e6daff] to-[#fcebfa] opacity-60 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[-20%] left-[20%] h-[45vw] w-[45vw] rounded-full bg-[#ffeaed] opacity-50 blur-[100px]"
        />
      </div>

      {/* Floating Magic Hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-[#ff6b81]/30"
            style={{ left: heart.left, top: heart.top }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 360, 0],
              opacity: [0, 0.5, 0],
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

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Beautiful Circular Cartoon Couple Illustration */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="relative mx-auto mb-8 w-36 h-36 md:w-48 md:h-48 rounded-full border-8 border-white bg-white shadow-[0_15px_40px_rgba(255,143,163,0.3)] p-[2px] z-10 block"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#ffeaed]">
              <Image
                src="/5.png"
                alt="Beautiful Cartoon Couple"
                fill
                className="object-cover"
              />
              {/* Inner subtle glow ring */}
              <div className="absolute inset-0 rounded-full border border-[#ffb3c1]/30 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Absolute decorative floating sparkles around the couple circle */}
            <Stars className="absolute -top-4 -right-2 h-8 w-8 text-[#ff8fa3] animate-pulse" />
            <Stars className="absolute -bottom-2 -left-4 h-6 w-6 text-[#c8b6ff] animate-pulse" />
          </motion.div>

          {/* Cute Badge */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/60 px-6 py-2.5 shadow-sm backdrop-blur-md"
          >
            <Stars className="h-5 w-5 text-[#ff8fa3]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff8fa3]">
              The Big Day Approaches
            </span>
            <Stars className="h-5 w-5 text-[#ff8fa3]" />
          </motion.div>

          {/* Title */}
          <h2 className="font-serif text-5xl font-medium tracking-tight text-[#4a3b3c] md:text-7xl">
            Counting Down to <span className="relative inline-block text-[#ff4d6d]">
              Forever
              <motion.svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
                viewBox="0 0 100 20" preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="#ffb3c1"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg text-[#857274] leading-relaxed">
            Every second brings us closer to the most magical moment of our lives. We cannot wait to celebrate our love with you.
          </p>
        </motion.div>

        {/* 3D Glassmorphic Countdown Blocks */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 px-4 md:px-12">
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative perspective-1000"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/40 p-6 md:p-10 shadow-[0_8px_32px_rgba(255,143,163,0.15)] backdrop-blur-xl transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(255,143,163,0.25)] group-hover:bg-white/60">

                {/* Cute internal accent */}
                <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#ffb3c1]/30 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <div className="absolute left-0 bottom-0 h-20 w-20 translate-y-1/3 -translate-x-1/3 rounded-full bg-[#c8b6ff]/30 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  {/* Bouncy Number */}
                  <div className="relative overflow-hidden h-[60px] sm:h-[70px] md:h-[100px] w-full flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={item.value}
                        initial={{ y: 50, opacity: 0, scale: 0.5 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -50, opacity: 0, scale: 0.5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                          mass: 1
                        }}
                        className="absolute font-serif text-6xl md:text-8xl font-medium text-[#4a3b3c] drop-shadow-sm"
                      >
                        {String(item.value).padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Label */}
                  <motion.div
                    className="mt-4 rounded-full bg-white/80 px-4 py-1.5 shadow-sm md:mt-6"
                    whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
                  >
                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.25em] text-[#ff8fa3]">
                      {item.label}
                    </p>
                  </motion.div>
                </div>

                {/* Corner cute dots */}
                <div className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-[#ffb3c1] opacity-50" />
                <div className="absolute right-4 bottom-4 h-1.5 w-1.5 rounded-full bg-[#c8b6ff] opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 text-[#ff8fa3]">
            <Heart size={16} className="animate-bounce" fill="currentColor" />
            <span className="font-serif italic text-xl text-[#857274]">
              Can't wait to see you there!
            </span>
            <Heart size={16} className="animate-bounce" fill="currentColor" style={{ animationDelay: '200ms' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}