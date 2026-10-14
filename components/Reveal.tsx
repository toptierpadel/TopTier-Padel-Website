"use client";

import { useLayoutEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Fades content up as it scrolls into view.
// The server HTML is always fully visible: content on screen at load is never hidden
// (so it paints immediately, without waiting for JavaScript), and only content that is
// still below the fold when the page hydrates is hidden and then revealed.
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // No viewport yet (e.g. a hidden or prerendering tab): leave everything visible.
    if (!window.innerHeight) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const motionClass =
    state === "static"
      ? ""
      : "transition-[opacity,transform] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
  const hiddenClass = state === "hidden" ? "translate-y-6 opacity-0" : "";

  return (
    <div
      ref={ref}
      className={`${className} ${motionClass} ${hiddenClass}`}
      style={state === "shown" && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
