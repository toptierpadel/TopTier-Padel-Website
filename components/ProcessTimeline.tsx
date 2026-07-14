"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SearchCheck,
  Handshake,
  HardHat,
  Settings,
  type LucideIcon,
} from "lucide-react";

type TimelineStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const processSteps: TimelineStep[] = [
  {
    number: "01",
    title: "Site review",
    description:
      "We assess the available space, access, court positioning, host requirements, safeguarding considerations, and likely demand.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Partnership structure",
    description:
      "We agree usage arrangements, revenue participation, commercial terms, and whether the project is fully funded or shared-investment.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Planning and development",
    description:
      "TopTier coordinates planning, construction, court installation, lighting, canopy options, technology, and supporting infrastructure.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Operations and maintenance",
    description:
      "We manage bookings, access, upkeep, maintenance, technology, programming, and day-to-day facility performance.",
    icon: Settings,
  },
];

export function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 35%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={timelineRef} className="relative">
      {/* Base line */}
      <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-slate-200 md:block" />

      {/* Scroll progress line */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px origin-top bg-[#99CC33] md:block"
      />

      <div className="grid gap-16">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 56, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative grid gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[4.5rem_1fr]"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-[#99CC33] shadow-md"
              >
                <Icon size={24} strokeWidth={2.2} />
              </motion.div>

              <div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>

                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                      {step.title}
                    </h3>
                  </div>

                  <span className="text-5xl font-black tracking-tight text-slate-200">
                    {step.number}
                  </span>
                </div>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}