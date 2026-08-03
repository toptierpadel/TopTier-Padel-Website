"use client";

import { useState } from "react";

const reasons = [
  {
    label: "Doubles by default",
    title: "Four players per court.",
    description:
      "Padel is usually played in doubles, so each booking naturally brings a group to the club — more members, more guests, and more social activity around the site.",
    advantage: "More people on site from every court.",
    bg: "bg-[#005A8D]",
  },
  {
    label: "Compact footprint",
    title: "High use in less space.",
    description:
      "Padel courts are compact compared with many traditional sports facilities, making them well suited to underused club land, awkward corners, or space that is not currently working hard enough.",
    advantage: "Turn limited land into visible member value.",
    bg: "bg-slate-950",
  },
  {
    label: "Easy to start",
    title: "Fast trial, faster habit.",
    description:
      "The smaller court, walls, and accessible style of play help beginners enjoy a game quickly. That makes padel unusually good at turning curiosity into repeat bookings.",
    advantage: "Lower barrier to entry means more regular use.",
    bg: "bg-[#0077C8]",
  },
  {
    label: "Broad appeal",
    title: "One sport, many member groups.",
    description:
      "Padel can work for juniors, adults, families, social players, and competitive members. That breadth matters for clubs trying to keep facilities active across the week.",
    advantage: "Useful across ages, abilities, and time slots.",
    bg: "bg-[#004B87]",
  },
];

export function SportsClubFan() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reasons[activeIndex];

    const cardPositions = [
    "left-[20%] top-[26%] -rotate-[10deg]",
    "left-[38%] top-[12%] -rotate-[4deg]",
    "left-[57%] top-[12%] rotate-[4deg]",
    "left-[75%] top-[26%] rotate-[10deg]",
    ];

  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      {/* soft background atmosphere */}
      <div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-slate-200/70" />
      <div className="absolute left-1/2 top-32 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full border border-slate-200/70" />
      <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-[#99CC33]/10 blur-3xl" />
      <div className="absolute right-[8%] top-32 h-80 w-80 rounded-full bg-[#0077C8]/10 blur-3xl" />

      {/* fan */}
      <div className="relative z-30 h-[37rem]">
        {reasons.map((reason, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={reason.label}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`absolute h-[22rem] w-[16rem] -translate-x-1/2 overflow-hidden rounded-[2rem] text-left shadow-2xl transition-all duration-300 ease-out md:h-[25rem] md:w-[18rem] ${
                cardPositions[index]
              } ${
                isActive
                    ? "z-50 scale-110 ring-4 ring-[#99CC33]/70"
                    : "z-40 scale-95 opacity-85 hover:opacity-100"
              } ${reason.bg}`}
              aria-label={reason.title}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute inset-x-0 top-16 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/35">
                  Image placeholder
                </p>
                <p className="mt-5 text-7xl font-black text-white/15">
                  {index + 1}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 pb-9 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#99CC33]">
                  {reason.label}
                </p>

                <h3 className="mt-2 text-2xl font-black leading-8">
                  {reason.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* active explanation */}
      <div className="relative z-20 mx-auto -mt-28 max-w-3xl rounded-[2rem] border border-slate-200 bg-white/95 p-7 text-center shadow-xl backdrop-blur md:p-9">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
          {active.label}
        </p>

        <h3 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          {active.title}
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {active.description}
        </p>

        <div className="mx-auto mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-[#99CC33]">
          {active.advantage}
        </div>
      </div>

      {/* mobile tap indicators */}
      <div className="relative z-40 mt-8 flex justify-center gap-2 lg:hidden">
        {reasons.map((reason, index) => (
          <button
            key={reason.label}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? "w-10 bg-[#99CC33]" : "w-2.5 bg-slate-300"
            }`}
            aria-label={`Show ${reason.label}`}
          />
        ))}
      </div>
    </div>
  );
}