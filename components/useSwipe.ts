"use client";

import { useRef, useState } from "react";

const SWIPE_THRESHOLD = 50; // px of horizontal travel that counts as a swipe
const RESISTANCE = 0.25; // how far the element follows the finger while dragging

// Horizontal swipe for touch carousels, using pointer events (replaces framer-motion's drag).
// The element follows the pointer with some resistance, springs back on release, and
// calls onSwipe(1) for a left swipe (next) or onSwipe(-1) for a right swipe (previous).
// Vertical scrolling is left to the browser (touch-action: pan-y), and the click that ends
// a swipe is swallowed so it doesn't also select whatever was under the finger.
export function useSwipe(enabled: boolean, onSwipe: (direction: 1 | -1) => void) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const [offset, setOffset] = useState<number | null>(null);

  if (!enabled) return { handlers: {}, style: undefined };

  function end(clientX: number | null) {
    const dx = start.current && clientX !== null ? clientX - start.current.x : 0;
    start.current = null;
    setOffset(null);
    if (Math.abs(dx) >= SWIPE_THRESHOLD) {
      swiped.current = true;
      onSwipe(dx < 0 ? 1 : -1);
    }
  }

  return {
    handlers: {
      onPointerDown: (event: React.PointerEvent) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        start.current = { x: event.clientX, y: event.clientY };
        swiped.current = false;
      },
      onPointerMove: (event: React.PointerEvent) => {
        if (!start.current) return;
        const dx = event.clientX - start.current.x;
        const dy = event.clientY - start.current.y;
        if (Math.abs(dx) > Math.abs(dy)) setOffset(dx * RESISTANCE);
      },
      onPointerUp: (event: React.PointerEvent) => end(event.clientX),
      onPointerCancel: () => end(null),
      onClickCapture: (event: React.MouseEvent) => {
        if (swiped.current) {
          event.preventDefault();
          event.stopPropagation();
          swiped.current = false;
        }
      },
    },
    style: {
      touchAction: "pan-y",
      ...(offset !== null && { transform: `translateX(${offset}px)`, transitionDuration: "0s" }),
    } as React.CSSProperties,
  };
}
