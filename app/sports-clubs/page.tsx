import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

import { SportsClubFan } from "@/components/SportsClubFan";

export const metadata: Metadata = {
  title: "Padel Courts for Sports Clubs — We Fund & Operate",
  description:
    "Turn underused club land into padel courts at zero cost. We finance, build and run them; your members get priority access and your club gets a new revenue share.",
  alternates: {
    canonical: "/sports-clubs/",
  },
};

const clubUseMoments = [
  "Member priority sessions",
  "Club nights and mixed-level games",
  "Junior and family play",
  "Coaching and beginner introductions",
  "Internal leagues and tournaments",
  "Guest and local-player bookings outside member windows",
];

const topTierHandles = [
  "Funding the facility",
  "Coordinating court delivery",
  "Booking and access systems",
  "Maintenance and upkeep",
  "Day-to-day facility management",
];

export default function SportsClubsPage() {
  return (
    <>

      {/* Club Advantage */}
      <section className="relative overflow-hidden bg-white pb-28 pt-48">
        {/* subtle background atmosphere */}
        <div className="absolute left-[-10rem] top-[-8rem] h-[44rem] w-[44rem] rounded-full bg-[#99CC33]/12 blur-3xl" />
        <div className="absolute right-[-12rem] top-12 h-[46rem] w-[46rem] rounded-full bg-[#0077C8]/10 blur-3xl" />

        {/* quiet court-line motif */}
        <div className="absolute left-1/2 top-24 h-[42rem] w-[42rem] -translate-x-1/2 rotate-[-8deg] rounded-[5rem] border border-slate-200/60" />
        <div className="absolute left-1/2 top-40 h-[30rem] w-[30rem] -translate-x-1/2 rotate-[-8deg] rounded-[4rem] border border-slate-200/45" />
        <div className="absolute left-1/2 top-56 h-[18rem] w-[18rem] -translate-x-1/2 rotate-[-8deg] rounded-[3rem] border border-slate-200/35" />


        <div className="absolute left-[-8rem] top-0 h-96 w-96 rounded-full bg-[#99CC33]/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-40 h-96 w-96 rounded-full bg-[#0077C8]/10 blur-3xl" />

        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Sports Clubs
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                Padel is built for sports clubs.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                Its format is social, compact, accessible, and commercially useful —
                exactly the kind of sport that can turn spare club space into regular
                member activity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <SportsClubFan />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="relative mx-auto mt-24 max-w-4xl text-center">
              <div className="mx-auto h-px w-40 bg-slate-200" />

              <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Designed around the club
              </p>

              <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Built to add energy to the club, not complexity.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                For sports clubs, padel is valuable because it fits naturally into the way
                clubs already create community. It gives members another reason to visit,
                supports coaching, club nights, internal leagues, family play, guest bookings,
                and social competition, and can bring more regular activity to the wider site.
                A compact facility can make underused space productive without asking the club
                to change its identity or move away from the sports and member culture already
                in place.
              </p>

              <div className="mx-auto my-12 flex max-w-xs items-center justify-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#99CC33]" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
              </div>

              <p className="mx-auto max-w-3xl text-xl leading-9 text-slate-600">
                TopTier Padel builds the model around the club. Member-priority access, coaching
                windows, internal events, external bookings, and wider community use can all
                be structured around the way the site already operates. TopTier Padel handles the
                funding, development coordination, booking systems, access setup, maintenance,
                and day-to-day management, so the club can benefit from padel without needing
                to become a padel operator itself.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mx-auto mt-24 max-w-5xl text-center">
              <div className="mx-auto h-px w-40 bg-slate-200" />

              <p className="mx-auto mt-8 text-2xl font-black leading-10 tracking-tight text-slate-950 md:text-3xl">
                More activity, more energy, more reasons to come back.
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                A clear path from available club land to a professionally managed padel
                facility that supports members, bookings, coaching, and wider site activity.
              </p>

              <p className="mx-auto mt-8 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Interested in bringing padel to your club?{" "}
                <a
                  href="/contact/"
                  className="text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:text-[#0077C8] hover:decoration-[#0077C8]"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
          </Reveal>


        </Container>
      </section>

    </>
  );
}