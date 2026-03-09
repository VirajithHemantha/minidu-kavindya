'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#1a0408] border-t-2 border-[#C9A227]/20 pt-20 pb-8 text-[#f5e6c8]">

      {/* Premium Dark Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.1),transparent_50%)]" />

      {/* Aesthetic pattern grid */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Graphic Area */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand/Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-4 flex flex-col justify-center text-center md:text-left"
          >
            <h2 className="font-serif text-5xl font-light tracking-wide text-[#C9A227] mb-6">
              S <span className="text-3xl text-[#f5e6c8]">&</span> M
            </h2>
            <p className="text-[#f5e6c8]/60 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 font-light">
              We look forward to sharing our joy and celebrating our holy union surrounded by the people we love most.
            </p>
          </motion.div>

          {/* Links/Information Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-[#C9A227]/10 pt-10 md:pt-0 md:border-t-0 md:border-l md:pl-10">

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#C9A227] mb-6 justify-center md:justify-start">
                <Mail className="h-4 w-4" /> Get in Touch
              </h4>
              <ul className="space-y-4 text-sm font-light text-[#f5e6c8]/60 text-center md:text-left">
                <li className="flex items-center gap-3 justify-center md:justify-start hover:text-[#f5e6c8] transition-colors cursor-pointer">
                  <Phone className="h-4 w-4" /> +94 11 234 5678
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start hover:text-[#f5e6c8] transition-colors cursor-pointer">
                  <Mail className="h-4 w-4" /> hello@shashini.lk
                </li>
              </ul>
            </motion.div>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#C9A227] mb-6 justify-center md:justify-start">
                <MapPin className="h-4 w-4" /> When & Where
              </h4>
              <ul className="space-y-4 text-sm font-light text-[#f5e6c8]/60 text-center md:text-left">
                <li>June 18, 2026</li>
                <li>Golden Rose Hotel</li>
                <li>Colombo 3, Sri Lanka</li>
              </ul>
            </motion.div>

            {/* Social / Registry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A227] mb-6 text-center md:text-left">
                Follow Us
              </h4>
              <div className="flex justify-center md:justify-start gap-4 mb-8">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#1a0408] transition-colors outline-none cursor-pointer">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-[#1a0408] transition-colors outline-none cursor-pointer">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Big Text Divider Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full border-t border-b border-[#C9A227]/10 py-10 mb-10 overflow-hidden flex items-center justify-center group"
        >
          {/* Subtle slow moving shine on the divider */}
          <div className="absolute inset-0 w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#C9A227]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite]" />

          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-center font-light tracking-wide bg-gradient-to-r from-[#f5e6c8]/60 via-[#C9A227] to-[#f5e6c8]/60 text-transparent bg-clip-text">
            A New Chapter Begins
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[#f5e6c8]/40 text-xs font-light tracking-[0.1em] px-4">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shashini & Madhawa. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="h-3 w-3 fill-current text-[#C9A227] animate-pulse" /> for our special day
          </p>
        </div>

      </div>
    </footer>
  );
}
