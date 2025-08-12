"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

type Props = {
  onDone: () => void; // wird nach der Animation aufgerufen
};

export default function PreLoader({ onDone }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, []);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        // Boxen Animation
        tl.to(boxesRef.current, {
          scale: 0,
          y: 60,
          rotate: 400,
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          delay: 0.4,
          stagger: { amount: 1.5, from: "start", grid: [3, 3] },
        })
          .to(containerRef.current, { rotate: -405, scale: 0, duration: 0.9 }, "-=0.4")
          .to(wrapperRef.current, {
            opacity: 0,
            duration: 0.45,
            onComplete: () => {
              setMounted(false);
              onDone();
            },
          });

        // Pulsierende "Loading" Animation
        gsap.to(textRef.current, {
          opacity: 0.4,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: "power1.inOut",
        });
      }, wrapperRef);

      return () => ctx.revert();
    },
    { dependencies: [] }
  );

  if (!mounted) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          ref={containerRef}
          className="rotate-45 w-24 grid grid-cols-3 gap-1"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) boxesRef.current[i] = el;
              }}
              className="box w-7 h-7 bg-[#65cdef]"
            />
          ))}
        </div>
        <p
          ref={textRef}
          className="mt-6 text-gray-600 font-medium tracking-widest uppercase"
        >
          Loading
        </p>
      </div>
    </div>
  );
}
