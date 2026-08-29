"use client";

import Image from "next/image";
import { useState } from "react";

const reasons = [
  {
    label: "Easy to pick up",
    title: "Students can enjoy it quickly.",
    description:
      "Padel has a lower barrier to entry than many racket sports. The smaller court, underarm serve, and longer rallies help students get into a game quickly, even if they have limited racket-sport experience.",
    advantage: "More students can participate confidently from the start.",
    bg: "bg-[#0077C8]",
    image: "/images/high-five.jpeg",
  },
  {
    label: "High participation",
    title: "Four players active at once.",
    description:
      "Because padel is usually played in doubles, each court naturally supports group play. That makes it well suited to PE, enrichment, societies, and social sport where participation matters.",
    advantage: "A compact court can support meaningful student activity.",
    bg: "bg-slate-950",
    image: "/images/doubles.jpeg",
  },
  {
    label: "Campus friendly",
    title: "Small footprint, big use case.",
    description:
      "Padel’s compact enclosed-court format can make better use of underused school or university space without needing the scale of a traditional large sports facility.",
    advantage: "Turn available land into a visible, useful campus asset.",
    bg: "bg-[#005A8D]",
    image: "/images/small-footprint.jpg",
  },
  {
    label: "Managed around you",
    title: "Built around school access.",
    description:
      "The facility can be structured around agreed school or university priority use, with TopTier Padel handling bookings, upkeep, access systems, and wider community use where appropriate.",
    advantage: "Student use comes first, without adding operational burden.",
    bg: "bg-[#004B87]",
    image: "/images/child-playing.jpeg",
  },
];

export function SchoolsFan() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reasons[activeIndex];

  const cardPositions = [
    "lg:left-[20%] lg:top-[26%] lg:-rotate-[10deg]",
    "lg:left-[38%] lg:top-[12%] lg:-rotate-[4deg]",
    "lg:left-[57%] lg:top-[12%] lg:rotate-[4deg]",
    "lg:left-[75%] lg:top-[26%] lg:rotate-[10deg]",
  ];

  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      {/* timetable / campus background detail */}
      <div className="absolute left-1/2 top-12 hidden h-[34rem] w-[52rem] -translate-x-1/2 rounded-[4rem] border-2 border-slate-200/70 lg:block" />
      <div className="absolute left-1/2 top-28 hidden h-[23rem] w-[40rem] -translate-x-1/2 rounded-[3rem] border-2 border-slate-200/55 lg:block" />
      <div className="absolute left-[13%] top-24 h-72 w-72 rounded-full bg-[#99CC33]/12 blur-3xl" />
      <div className="absolute right-[10%] top-20 h-80 w-80 rounded-full bg-[#0077C8]/12 blur-3xl" />

      {/* subtle timetable lines */}
      <div className="absolute left-[18%] top-36 hidden h-px w-[64%] bg-slate-200/60 lg:block" />
      <div className="absolute left-[24%] top-52 hidden h-px w-[52%] bg-slate-200/50 lg:block" />
      <div className="absolute left-[30%] top-68 hidden h-px w-[40%] bg-slate-200/40 lg:block" />

      {/* fan */}
      <div className="relative z-30 h-[24rem] md:h-[27rem] lg:h-[37rem]">
        {reasons.map((reason, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={reason.label}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`relative mx-auto h-[22rem] w-[16rem] overflow-hidden rounded-[2rem] text-left shadow-2xl transition-all duration-300 ease-out md:h-[25rem] md:w-[18rem] lg:absolute lg:left-1/2 lg:-translate-x-1/2 ${
                cardPositions[index]
              } ${
                isActive
                  ? "z-50 scale-105 ring-4 ring-[#99CC33]/70 opacity-100"
                  : "scale-95 opacity-85 hover:opacity-100"
              } ${reason.bg} ${isActive ? "block" : "hidden lg:block"}`}
              aria-label={reason.title}
            >
              <Image
                src={reason.image}
                alt={reason.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

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
      <div className="relative z-20 mx-auto -mt-12 max-w-3xl rounded-[2rem] border border-slate-200 bg-white/95 p-7 text-center shadow-xl backdrop-blur md:p-9 lg:-mt-28">
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