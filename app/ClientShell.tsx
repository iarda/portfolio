"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import PreLoader from "./components/PreLoader";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const appRef = useRef<HTMLDivElement>(null);
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderDone = () => {
    setShowLoader(false);
    requestAnimationFrame(() => {
      appRef.current?.classList.remove("opacity-0", "translate-y-2", "blur-sm");
      gsap.fromTo(
        appRef.current,
        { opacity: 0, y: 8, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(appRef.current, { clearProps: "opacity,transform,filter" });
          },
        }
      );
    });
  };

  return (
    <>
      {showLoader && <PreLoader onDone={handleLoaderDone} />}
      <div
        id="appContent"
        ref={appRef}
        className={showLoader ? "opacity-0 translate-y-2 blur-sm" : ""}
      >
        {children}
      </div>
    </>
  );
}
