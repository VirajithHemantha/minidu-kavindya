'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, PenLine, Send, Stars, UserRound, Sparkles, Quote } from 'lucide-react';
import Image from 'next/image';

interface Blessing {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

const initialBlessings: Blessing[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    message:
      'Wishing you both a lifetime of happiness, grace, and countless beautiful moments together. So excited for the big day!',
    timestamp: '2 days ago',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    message:
      'May your love continue to grow stronger with each passing day. You two are absolutely perfect for each other!',
    timestamp: '5 days ago',
  },
];

export default function BlessingsSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const [blessings, setBlessings] = useState<Blessing[]>(initialBlessings);
  const [newBlessing, setNewBlessing] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isHoveringSend, setIsHoveringSend] = useState(false);

  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 5 + 3,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 4,
      })),
    []
  );

  const handleAddBlessing = (e: React.FormEvent) => {
    e.preventDefault();

    if (newBlessing.trim() && visitorName.trim()) {
      const blessing: Blessing = {
        id: Date.now().toString(),
        name: visitorName.trim(),
        message: newBlessing.trim(),
        timestamp: 'just now',
      };

      setBlessings([blessing, ...blessings]);
      setNewBlessing('');
      setVisitorName('');
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#faf7f2] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Award-winning Light Mesh Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-gradient-to-tr from-[#ffe6ea] to-[#fff0e6] opacity-70 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-bl from-[#efe6ff] to-[#fcebfa] opacity-60 blur-[100px]"
        />

        {/* Magic sparkle dots overlay */}
        <div className="absolute inset-0 opacity-[0.2]"
          style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, #ffb3c1 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
      </div>

      {/* Floating Magic Stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-[#ffb3c1]/60"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles size={particle.size} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Beautiful Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mx-auto mb-16 md:mb-20 max-w-3xl text-center"
        >
          {/* Beautiful Circular Image (matches other sections) */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: -5 }}
            transition={{ type: 'spring', bounce: 0.6 }}
            className="relative mx-auto mb-8 w-32 h-32 md:w-44 md:h-44 rounded-full border-8 border-white bg-white shadow-[0_15px_40px_rgba(255,143,163,0.3)] p-[2px] z-10 block"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#ffeaed]">
              <Image
                src="/70.png"
                alt="Blessings & Wishes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full border border-[#ffb3c1]/30 pointer-events-none mix-blend-overlay" />
            </div>

            <Sparkles className="absolute -top-2 -right-4 h-8 w-8 text-[#ff8fa3] animate-pulse" />
            <Sparkles className="absolute -bottom-4 -left-2 h-6 w-6 text-[#c8b6ff] animate-pulse" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/60 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >
            <Heart className="h-5 w-5 text-[#ff8fa3] fill-[#ff8fa3]/20" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff8fa3]">
              Shared With Love
            </span>
          </motion.div>

          <h2 className="font-serif text-5xl font-medium tracking-tight text-[#4a3b3c] md:text-7xl">
            Blessings & <span className="relative inline-block text-[#ff4d6d]">
              Wishes
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
            Leave a little sparkle! Share your heartfelt wishes and loving memories for us to cherish forever.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1fr_1.2fr] items-start">

          {/* Glassmorphic Wishing Well Form */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -10 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="relative perspective-[1000px]"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-white/80 bg-white/50 p-6 shadow-[0_20px_50px_rgba(255,143,163,0.1)] backdrop-blur-xl md:p-10">

              {/* Cute corner highlights */}
              <div className="absolute right-[-10%] top-[-10%] h-[150px] w-[150px] rounded-full bg-[#ffb3c1]/30 blur-[40px]" />
              <div className="absolute left-[-10%] bottom-[-10%] h-[150px] w-[150px] rounded-full bg-[#c8b6ff]/30 blur-[40px]" />

              <div className="relative z-10">
                <div className="mb-8 items-center flex gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff8fa3] text-white shadow-md">
                    <Stars className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-3xl font-medium text-[#4a3b3c]">
                    Leave a Message
                  </h3>
                </div>

                <motion.form
                  onSubmit={handleAddBlessing}
                  className="space-y-6"
                >
                  <label className="block group">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#ff8fa3]">
                      Your Name
                    </span>
                    <div className="relative">
                      <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#ffb3c1] transition-colors group-focus-within:text-[#ff8fa3]" />
                      <input
                        type="text"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="John & Jane Doe"
                        className="h-14 w-full rounded-2xl border-2 border-white bg-white/50 pl-12 pr-4 text-[#4a3b3c] placeholder-[#ffb3c1] outline-none transition-all duration-300 focus:border-[#ff8fa3] focus:bg-white focus:shadow-[0_10px_20px_rgba(255,143,163,0.1)] group-hover:bg-white/80"
                        required
                      />
                    </div>
                  </label>

                  <label className="block group">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#ff8fa3]">
                      Your Blessing
                    </span>
                    <div className="relative">
                      <PenLine className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[#ffb3c1] transition-colors group-focus-within:text-[#ff8fa3]" />
                      <textarea
                        value={newBlessing}
                        onChange={(e) => setNewBlessing(e.target.value)}
                        placeholder="Share your sweetest wishes..."
                        rows={4}
                        className="w-full resize-none rounded-[1.5rem] border-2 border-white bg-white/50 px-4 py-4 pl-12 text-[#4a3b3c] placeholder-[#ffb3c1] outline-none transition-all duration-300 focus:border-[#ff8fa3] focus:bg-white focus:shadow-[0_10px_20px_rgba(255,143,163,0.1)] group-hover:bg-white/80"
                        required
                      />
                    </div>
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setIsHoveringSend(true)}
                    onHoverEnd={() => setIsHoveringSend(false)}
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#ff6b81] px-6 py-4 text-white shadow-[0_10px_20px_rgba(255,107,129,0.3)] transition-all hover:bg-[#ff4d6d] hover:shadow-[0_15px_30px_rgba(255,107,129,0.4)] border-2 border-[#ff6b81]"
                  >
                    <span className="relative z-10 font-bold tracking-[0.2em] uppercase text-sm">
                      Send Blessing
                    </span>
                    <motion.div
                      animate={isHoveringSend ? { x: [0, 5, 0], y: [0, -5, 0] } : {}}
                      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <Send className="h-5 w-5" />
                    </motion.div>

                    {/* Shine */}
                    <div className="absolute inset-0 z-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                      <div className="relative h-full w-12 bg-white/30" />
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="overflow-hidden rounded-2xl bg-[#ff8fa3]/10 border border-[#ff8fa3]/20 px-4 py-3 text-center"
                      >
                        <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#ff4d6d]">
                          <Heart className="h-4 w-4 fill-[#ff4d6d]" />
                          Message received! Thank you.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              </div>
            </div>
          </motion.div>

          {/* Interactive Blessings Wall */}
          <div className="relative space-y-6 pt-4">

            {/* Scroll indicator glow */}
            <div className="absolute inset-x-0 bottom-[-2rem] h-20 bg-gradient-to-t from-[#faf7f2] to-transparent z-20 pointer-events-none" />

            <AnimatePresence mode="popLayout">
              {blessings.map((blessing, index) => (
                <motion.div
                  layout
                  key={blessing.id}
                  initial={{ opacity: 0, y: 30, scale: 0.8, rotate: Math.random() * 4 - 2 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-6 md:p-8 shadow-sm backdrop-blur-md transition-all hover:bg-white hover:shadow-[0_15px_30px_rgba(255,143,163,0.15)]"
                >
                  {/* Decorative Elements */}
                  <div className="absolute right-[-10px] top-[-10px] opacity-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Quote className="h-24 w-24 text-[#ff8fa3] fill-current" />
                  </div>

                  <div className="relative z-10">
                    <p className="mb-4 text-lg font-light leading-relaxed text-[#4a3b3c]">
                      "{blessing.message}"
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb3c1] to-[#ff8fa3] text-white shadow-sm">
                          <span className="font-serif font-bold tracking-widest">{blessing.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-serif text-lg font-medium text-[#4a3b3c]">
                            {blessing.name}
                          </h4>
                          <p className="text-[10px] uppercase tracking-[0.1em] text-[#ff8fa3] font-bold">
                            {blessing.timestamp}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="cursor-pointer text-[#ffb3c1] hover:text-[#ff4d6d]"
                      >
                        <Heart className="h-6 w-6 fill-current transition-colors" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}