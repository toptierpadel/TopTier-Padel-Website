"use client";

import { useState } from "react";

const stages = [
  {
    stage: "Before",
    label: "Underused space",
    title: "A site with potential.",
    description:
      "The host has suitable land, an existing community, and a place where sport already matters — but no padel facility yet.",
    detail: "Host provides the space",
    bg: "bg-[#F5FAFF]",
    dark: false,
    targetId: "model-before",
  },
  {
    stage: "During",
    label: "TopTier delivery",
    title: "We fund, build, and launch it.",
    description:
      "TopTier coordinates the funding, design, development, court delivery, access systems, booking setup, and launch process.",
    detail: "TopTier handles the project",
    bg: "bg-slate-950",
    dark: true,
    targetId: "model-during",
  },
  {
    stage: "After",
    label: "Managed facility",
    title: "A working padel facility.",
    description:
      "The site receives a professionally managed facility with agreed host access, public or member bookings where appropriate, maintenance, and long-term oversight.",
    detail: "A facility that keeps working",
    bg: "bg-[#D9EEFF]",
    dark: false,
    targetId: "model-after",
  },
];

export function ModelTransformation() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = stages[activeIndex];

  function scrollToStage(targetId: string) {
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      {/* background atmosphere */}
      <div className="absolute left-[-8rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#99CC33]/16 blur-3xl" />
      <div className="absolute right-[-10rem] top-20 h-[36rem] w-[36rem] rounded-full bg-[#0077C8]/14 blur-3xl" />

      <div className="relative grid gap-6 lg:grid-cols-3">
        {stages.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.stage}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => {
                setActiveIndex(index);
                scrollToStage(item.targetId);
              }}
              className={`group relative overflow-hidden rounded-[2.25rem] border text-left shadow-xl transition-all duration-300 ${
                item.dark
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              } ${
                isActive
                  ? "z-20 -translate-y-3 scale-[1.02] shadow-2xl ring-4 ring-[#99CC33]/45"
                  : "z-10 opacity-90 hover:-translate-y-2 hover:opacity-100"
              }`}
            >
              <div
                className={`relative h-[22rem] overflow-hidden ${
                  item.dark ? "bg-slate-900" : item.bg
                }`}
              >
                <div className={`absolute inset-0 ${item.bg}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border-2 border-white/25" />
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border-2 border-white/20" />

                <div className="absolute inset-x-0 top-20 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
                    Image placeholder
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                    {item.stage}
                  </p>

                  <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    item.dark ? "text-white/45" : "text-[#0077C8]"
                  }`}
                >
                  {item.label}
                </p>

                <p
                  className={`mt-4 text-base leading-7 ${
                    item.dark ? "text-white/70" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>

                <div
                  className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-bold ${
                    item.dark
                      ? "bg-[#99CC33] text-slate-950"
                      : "bg-slate-950 text-[#99CC33]"
                  }`}
                >
                  {item.detail}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative z-30 mx-auto -mt-2 max-w-4xl rounded-[2rem] border border-slate-200 bg-white/95 p-7 text-center shadow-2xl backdrop-blur md:p-9 lg:-mt-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
          {active.stage}: {active.label}
        </p>

        <h3 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          {active.title}
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {active.description}
        </p>
      </div>
    </div>
  );
}