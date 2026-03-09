'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SONG_SRC = '/paulyudin-wedding-485932.mp3';
const SONG_TITLE = 'Wedding Music';
const SONG_ARTIST = 'Paulyudin';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [volume, setVolume] = useState(0.4);
    const [progress, setProgress] = useState(0);   // 0–1
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [mounted, setMounted] = useState(false);

    const [showHint, setShowHint] = useState(false); // "tap to play" nudge

    /* ── Mount: set up audio + attempt autoplay ── */
    useEffect(() => {
        setMounted(true);
        const audio = new Audio(SONG_SRC);
        audio.loop = true;
        audio.volume = volume;
        audioRef.current = audio;

        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
            setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
        });
        audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));

        // ── Try autoplay immediately ──
        audio.play()
            .then(() => {
                setIsPlaying(true);
                setShowHint(false);
            })
            .catch(() => {
                // Browser blocked autoplay — wait for first user interaction
                setShowHint(true);

                const startOnInteraction = () => {
                    audio.play()
                        .then(() => {
                            setIsPlaying(true);
                            setShowHint(false);
                        })
                        .catch(() => { });
                    // Remove all listeners after first interaction
                    ['click', 'touchstart', 'keydown', 'scroll'].forEach((evt) =>
                        document.removeEventListener(evt, startOnInteraction)
                    );
                };

                ['click', 'touchstart', 'keydown', 'scroll'].forEach((evt) =>
                    document.addEventListener(evt, startOnInteraction, { once: true, passive: true })
                );
            });

        return () => {
            audio.pause();
            audio.src = '';
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* ── Toggle play / pause ── */
    const toggle = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(() => { });
        }
    }, [isPlaying]);

    /* ── Volume ── */
    const handleVolume = (val: number) => {
        setVolume(val);
        if (audioRef.current) audioRef.current.volume = val;
    };

    /* ── Seek ── */
    const handleSeek = (val: number) => {
        const audio = audioRef.current;
        if (!audio || !audio.duration) return;
        audio.currentTime = val * audio.duration;
        setProgress(val);
    };

    /* ── Format mm:ss ── */
    const fmt = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, '0')}`;
    };

    if (!mounted) return null;

    return (
        <div className="fixed bottom-6 right-4 sm:right-6 z-[999] flex flex-col items-end gap-2 select-none">

            {/* ── "Tap anywhere" hint badge (shown when autoplay blocked) ── */}
            <AnimatePresence>
                {showHint && !isExpanded && (
                    <motion.div
                        key="hint"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                        className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-4 py-2"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                            className="text-base"
                        >
                            🎵
                        </motion.span>
                        <span className="text-[11px] font-semibold text-[#9a7a7e] whitespace-nowrap">
                            Tap anywhere for music
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Expanded panel ── */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key="panel"
                        initial={{ opacity: 0, y: 16, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                        className="w-64 rounded-[1.6rem] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(212,175,55,0.25)] p-4 flex flex-col gap-3"
                    >
                        {/* Song info */}
                        <div className="flex items-center gap-3">
                            {/* Vinyl disc */}
                            <motion.div
                                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                                className="relative w-11 h-11 rounded-full shrink-0 flex items-center justify-center shadow-md"
                                style={{ background: 'radial-gradient(circle at 35% 35%, #f5e6c8, #D4AF37)' }}
                            >
                                <div className="w-3.5 h-3.5 rounded-full bg-white/80 shadow-inner" />
                            </motion.div>
                            <div className="min-w-0">
                                <p className="text-[13px] font-semibold text-[#4a3b3c] truncate">{SONG_TITLE}</p>
                                <p className="text-[11px] text-[#9a7a7e] truncate">{SONG_ARTIST}</p>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="flex flex-col gap-1">
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.001}
                                value={progress}
                                onChange={(e) => handleSeek(Number(e.target.value))}
                                className="w-full h-1.5 rounded-full cursor-pointer accent-[#D4AF37]"
                                style={{ accentColor: '#D4AF37' }}
                            />
                            <div className="flex justify-between text-[10px] text-[#c0a0a8]">
                                <span>{fmt(currentTime)}</span>
                                <span>{duration ? fmt(duration) : '--:--'}</span>
                            </div>
                        </div>

                        {/* Controls row */}
                        <div className="flex items-center justify-between gap-2">
                            {/* Volume */}
                            <div className="flex items-center gap-1.5 flex-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#c0a0a8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                                </svg>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={volume}
                                    onChange={(e) => handleVolume(Number(e.target.value))}
                                    className="flex-1 h-1.5 cursor-pointer"
                                    style={{ accentColor: '#D4AF37' }}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#c0a0a8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                </svg>
                            </div>

                            {/* Play / Pause */}
                            <motion.button
                                onClick={toggle}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.93 }}
                                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md shrink-0"
                                style={{ background: 'linear-gradient(135deg, #D4AF37, #c9a227)' }}
                                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                            >
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Floating FAB button ── */}
            <motion.button
                onClick={() => setIsExpanded((v) => !v)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                aria-label="Toggle music player"
                className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(212,175,55,0.5)] border-2 border-white/70"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #c9a227 100%)' }}
            >
                {/* Pulsing ring when playing */}
                {isPlaying && (
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', zIndex: -1 }}
                    />
                )}

                {/* Music note icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                >
                    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
                </svg>

                {/* Small "playing" dot */}
                {isPlaying && (
                    <motion.div
                        className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-white border border-[#D4AF37]"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                )}
            </motion.button>
        </div>
    );
}
