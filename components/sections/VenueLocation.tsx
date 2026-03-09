'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Navigation, Stars } from 'lucide-react';
import Image from 'next/image';

export default function VenueLocation() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#faf7f2] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Award-winning Mesh Gradient Background (Copied from Countdown) */}
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

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16 md:mb-24 relative"
        >
          {/* Beautiful Circular Couple Image */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="relative mx-auto mb-8 w-32 h-32 md:w-44 md:h-44 rounded-full border-8 border-white bg-white shadow-[0_15px_40px_rgba(255,143,163,0.3)] p-[2px] z-10 block"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#ffeaed]">
              <Image
                src="/12.png"
                alt="Happy Couple"
                fill
                className="object-cover"
              />
              {/* Inner subtle glow ring */}
              <div className="absolute inset-0 rounded-full border border-[#ffb3c1]/30 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Tiny floating decorative elements around the image */}
            <Stars className="absolute -top-2 -right-4 h-8 w-8 text-[#ff8fa3] animate-pulse" />
            <Stars className="absolute -bottom-4 -left-2 h-6 w-6 text-[#c8b6ff] animate-pulse" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/60 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >
            <MapPin className="h-5 w-5 text-[#ff8fa3]" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff8fa3]">
              The Destination
            </span>
          </motion.div>

          <h2 className="font-serif text-5xl font-medium tracking-tight text-[#4a3b3c] md:text-7xl">
            Venue <span className="relative inline-block text-[#ff4d6d]">
              Location
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-8 items-center">

          {/* Unique Map Interface (Left Side) - Updated to bright theme */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-7 relative perspective-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
          >
            {/* Outer Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-[120%] w-[120%] max-w-[800px] rounded-full border border-dashed border-[#ffb3c1]/60 opacity-50"
            />

            {/* Premium Floating Map Container */}
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 m-auto h-[90%] w-[90%] overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/40 shadow-[0_20px_60px_rgba(255,143,163,0.15)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,179,193,0.15),transparent_70%)]" />

              {/* Abstract Map Graphic */}
              <div className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23ffb3c1' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
                }}
              />
              <div className="absolute left-[30%] top-[40%] text-[#ffb3c1] opacity-50 hidden md:block">
                <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 100 Q 100 0, 200 100 T 400 100" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                  <path d="M50 150 Q 150 50, 250 150 T 400 150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Glowing Map Pin Location */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full border border-white bg-white/80 shadow-[0_0_30px_rgba(255,143,163,0.4)] backdrop-blur-md"
                >
                  <MapPin className="h-10 w-10 text-[#ff4d6d]" />
                  {/* Pin Dot */}
                  <div className="absolute bottom-[-6px] h-3 w-3 rounded-full bg-[#ff4d6d] shadow-[0_0_10px_#ff4d6d]" />
                </motion.div>

                {/* Sonar Pulse Effect */}
                <div className="absolute top-1/2 -z-10 h-24 w-24 -translate-y-1/2 rounded-full border border-[#ffb3c1]/80" />
                <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute top-1/2 -z-10 h-24 w-24 -translate-y-1/2 rounded-full bg-[#ffb3c1]"
                />
              </div>

              {/* Map UI Overlays */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white/90 to-transparent p-6 md:p-10 pt-20">
                <div className="rounded-2xl border border-white bg-white/70 p-5 backdrop-blur-xl md:flex md:items-center md:justify-between cursor-pointer group hover:bg-white transition-colors shadow-sm">
                  <div>
                    <h4 className="font-serif text-2xl font-medium text-[#4a3b3c]">Golden Rose Hotel</h4>
                    <p className="text-sm text-[#ff8fa3] font-bold mt-1 tracking-wider uppercase">Colombo, Sri Lanka</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mt-4 md:mt-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8fa3] text-white shadow-md"
                  >
                    <Navigation className="h-5 w-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Details (Right Side) - Updated to bright theme */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="mb-10">
              <h3 className="text-3xl md:text-5xl font-serif font-medium text-[#4a3b3c] mb-6 leading-tight">
                An Elegant <br className="hidden md:block" /> Celebration
              </h3>
              <p className="text-lg text-[#857274] leading-relaxed">
                Nestled in the heart of Colombo, the Golden Rose Hotel offers the perfect blend of royal tradition and contemporary luxury for our special day.
              </p>
            </div>

            {/* Glassmorphic Info Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-start gap-6 rounded-[2rem] border border-white/80 bg-white/50 p-6 backdrop-blur-md transition-all cursor-default shadow-sm hover:shadow-[0_15px_30px_rgba(255,143,163,0.15)]"
              >
                <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_8px_16px_rgba(255,143,163,0.15)]">
                  <MapPin className="h-6 w-6 text-[#ff8fa3]" />
                </div>
                <div>
                  <p className="font-bold text-[#ff8fa3] text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">
                    Address
                  </p>
                  <p className="text-[#4a3b3c] text-lg font-medium leading-relaxed">
                    123 Galle Road,<br />Colombo 3, Sri Lanka
                  </p>
                </div>
              </motion.div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-[2rem] border border-white/80 bg-white/50 p-6 backdrop-blur-md transition-all cursor-default shadow-sm hover:shadow-[0_15px_30px_rgba(255,143,163,0.15)]"
                >
                  <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_5px_10px_rgba(255,143,163,0.15)] mb-4">
                    <Phone className="h-4 w-4 text-[#ff8fa3]" />
                  </div>
                  <p className="font-bold text-[#ff8fa3] text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1">
                    Phone
                  </p>
                  <p className="text-[#4a3b3c] font-medium">+94 11 234 5678</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-[2rem] border border-white/80 bg-white/50 p-6 backdrop-blur-md transition-all cursor-default shadow-sm hover:shadow-[0_15px_30px_rgba(255,143,163,0.15)]"
                >
                  <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_5px_10px_rgba(255,143,163,0.15)] mb-4">
                    <Mail className="h-4 w-4 text-[#ff8fa3]" />
                  </div>
                  <p className="font-bold text-[#ff8fa3] text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1">
                    Email
                  </p>
                  <p className="text-[#4a3b3c] font-medium text-sm">events@<br />goldenrose.lk</p>
                </motion.div>
              </div>
            </div>

            {/* Glowing Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative mt-10 w-full sm:w-auto inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#ff6b81] px-8 py-4 text-white font-bold tracking-[0.2em] uppercase transition-all shadow-[0_10px_20px_rgba(255,107,129,0.3)] hover:shadow-[0_15px_30px_rgba(255,107,129,0.5)] border-2 border-[#ff6b81]"
            >
              <Navigation className="h-5 w-5" />
              <span>Get Directions</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-8 bg-white/30" />
              </div>
            </motion.button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
