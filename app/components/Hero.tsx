"use client";
import { FiArrowRight } from "react-icons/fi";
import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Autoplay-Fallback für iOS/Safari + Pause, wenn offscreen
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Falls Autoplay blockiert: leise starten, sobald geclickt wird
        const onUser = () => {
          v.play().catch(() => {});
          window.removeEventListener("pointerdown", onUser);
        };
        window.addEventListener("pointerdown", onUser, { once: true });
      }
    };
    tryPlay();

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!v) return;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.1 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="start" className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden pt-24">
        {/* Video Background */}
        <video
            ref={videoRef}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15 video-mask"
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
            poster="/hero-poster.jpg"      // lege ein Poster ins /public
            aria-hidden="true"
        >
            {/* H.264 MP4 + optional WebM für bessere Qualität/Dateigröße */}
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Mini-Avatar-Chip */}
        <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full bg-white/60 px-3 py-1.5 backdrop-blur-md ring-1 ring-black/5">
            <span className="text-sm font-medium text-zinc-700">Welcome to my Portfolio</span>
        </div>

        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-extrabold text-zinc-700 tracking-tight sm:text-6xl"
        >
            Data Scientist & Data Engineer
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600"
        >
            I create data-driven products from automation and anomaly detection to forecasting and high-performance web apps. Handling everything from pipeline design to delivery.
        </motion.p>

        {/* CTAs */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="mt-7 flex justify-center gap-3"
        >
            <a
            href="#work"
            className="inline-flex items-center rounded-full border border-[#97CBD1] bg-transparent px-7 py-3 text-base font-semibold text-zinc-800 shadow hover:bg-[#97CBD1] hover:text-white transition"
            >
            Projects
            </a>
            <a
            href="#about"
            className="inline-flex items-center rounded-full border border-[#97CBD1] bg-[#97CBD1] px-7 py-3 text-base font-semibold text-white shadow hover:bg-transparent hover:text-zinc-800 transition"
            >
            Learn more <FiArrowRight className="ml-2" />
            </a>
        </motion.div>
        </div>
    </section>
  );
};

export default Hero;
