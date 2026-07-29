import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import {
  Banknote,
  ClipboardCheck,
  CalendarCheck,
  KeyRound,
  TrendingUp,
  SearchCheck,
  Handshake,
  HardHat,
  Settings,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    title: "No capital investment",
    description:
      "TopTier funds the project so the host can bring padel to its community without committing capital.",
    icon: Banknote,
    featured: false,
  },
  {
    title: "Development handled",
    description:
      "We coordinate the process from site review and planning through construction, infrastructure, and launch.",
    icon: ClipboardCheck,
    featured: false,
  },
  {
    title: "Managed day to day",
    description:
      "TopTier manages bookings, access, maintenance, technology, and the operational details required to run the facility properly.",
    icon: CalendarCheck,
    featured: false,
  },
  {
    title: "Priority host access",
    description:
      "Schools, universities, sports clubs, students, and members can receive priority access arrangements based on the host’s needs.",
    icon: KeyRound,
    featured: false,
  },
  {
    title: "Revenue share potential",
    description:
      "The facility can generate income through bookings, coaching, events, and community use, creating long-term revenue potential.",
    icon: TrendingUp,
    featured: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Site review",
    label: "Understand the opportunity",
    description:
      "We assess the available space, access, court positioning, host requirements, safeguarding considerations, and likely demand.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Partnership structure",
    label: "Agree on the model",
    description:
      "We agree usage arrangements, revenue participation, commercial terms, and whether the project is fully funded or shared-investment.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Planning and development",
    label: "Build the facility",
    description:
      "TopTier coordinates planning, construction, court installation, lighting, canopy options, technology, and supporting infrastructure.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Operations and maintenance",
    label: "Run it long term",
    description:
      "We manage bookings, access, upkeep, maintenance, technology, programming, and day-to-day facility performance.",
    icon: Settings,
  },
];

const audiences = [
  {
    title: "Schools & Universities",
    label: "For education",
    image: "/images/school-padel.jpeg",
    description:
      "Bring a modern, accessible sport to campus while supporting student wellbeing, recreational opportunity, and community engagement.",
    points: [
      "Priority access during school or university hours",
      "A new facility for students, staff, and local users",
      "Potential revenue participation with no capital investment required",
    ],
    href: "/schools",
    cta: "Explore education partnerships",
  },
  {
    title: "Sports Clubs",
    label: "For clubs",
    image: "/images/sports-padel.webp",
    description:
      "Expand your club’s offering, attract new members, increase engagement, and create another revenue stream from underused space.",
    points: [
      "Priority access and preferential pricing for members",
      "Additional traffic for clubhouse and wider club activity",
      "Professional operation without the full development burden",
    ],
    href: "/sports-clubs",
    cta: "Explore sports club partnerships",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pb-24 pt-36 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/padel-hero.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/50" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.22),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.16),_transparent_30%)]" />

        <Container>
          <div className="relative max-w-5xl">
            <p className="mb-5 text-base font-semibold uppercase tracking-wide text-[#99CC33]">
              Helping bring padel to local communities across the UK. 
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Transform unused space into a professionally managed padel facility.
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-white/100">

              TopTier Padel funds, develops, and manages premium padel
              facilities for schools, universities, and sports clubs across the UK.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#99CC33] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#8abb2e]"
              >
                Request a Site Review
              </a>

              <Button href="/model" variant="secondary">
                See How It Works
              </Button>

            </div>

          </div>

        </Container>

      </section>

      {/* Why Padel */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src="/images/padel-main.jpg"
                  alt="Players on a padel court"
                  className="h-[34rem] w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#005EA8]">
                  Why Padel
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  A fast-growing sport built for community.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Padel is social, accessible, and easy to pick up, which makes it
                  well-suited to schools, universities, sports clubs, and local
                  communities. It gives people a reason to play regularly, gather
                  socially, and return to the site over time.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  For host sites, that means padel is more than a new court
                  installation. It can become a high-use sports asset that supports
                  participation, engagement, and long-term value.
                </p>

                <div className="mt-8">
                  <a
                    href="/why-padel"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Learn Why Padel Works
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Value proposition */}
      <section className="relative overflow-hidden bg-blue-50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.16),_transparent_32%)]" />

        <Container>
          <div className="relative">
            <Reveal>
              <SectionHeader
                eyebrow="Our offer"
                title="A premium padel facility without the usual burden."
                description="Available space can become a valuable sports asset, but turning it into a successful facility takes more than construction. It requires capital, planning, technology, management, and long-term maintenance. TopTier handles those pieces for the host."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <Reveal key={benefit.title} delay={index * 0.08}>
                    <div
                      className={`group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#99CC33]/60 hover:ring-1 hover:ring-[#99CC33]/25 hover:shadow-xl ${
                        benefit.featured
                          ? "border-[#99CC33]/50 bg-white ring-1 ring-[#99CC33]/30"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div
                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition duration-300 ${
                          benefit.featured
                            ? "bg-[#99CC33] text-slate-950"
                            : "bg-[#99CC33]/15 text-[#99CC33] group-hover:bg-[#99CC33] group-hover:text-slate-950"
                        }`}
                      >
                        <Icon size={24} strokeWidth={2.2} />
                      </div>

                      <h3 className="text-lg font-semibold text-slate-950">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(153,204,51,0.2),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_34%)]" />

        <Container>
          <div className="relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                  How it works
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  From available space to operating padel facility.
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/75">
                  Our role is to make the process simple for the host site. We review
                  the opportunity, structure the partnership, coordinate development,
                  and operate the facility over the long term.
                </p>

                <div className="mt-8">
                  <a
                    href="/model"
                    className="inline-flex items-center justify-center rounded-full bg-[#99CC33] px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-[#8abb2e]"
                  >
                    View our full model
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl">
              <ProcessTimeline />
            </div>
          </div>
        </Container>
      </section>

      {/* Audience split */}
      <section className="relative overflow-hidden bg-[#EFF6FF] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.14),_transparent_34%)]" />

        <Container>
          <div className="relative">
            <Reveal>
              <SectionHeader
                eyebrow="Who we work with"
                title="Built for education and sport environments."
                description="TopTier Padel partners with hosts that have suitable space and a community that can benefit from a professionally managed padel facility."
              />
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {audiences.map((audience, index) => (
                <Reveal key={audience.title} delay={index * 0.12}>
                  <div className="group overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="relative h-[26rem] overflow-hidden">
                      <Image
                        src={audience.image}
                        alt={audience.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />

                      <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                          {audience.label}
                        </p>

                        <h3 className="mt-3 text-4xl font-bold tracking-tight">
                          {audience.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-lg leading-8 text-white/85">
                          {audience.description}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-8">
                      <ul className="space-y-4">
                        {audience.points.map((point) => (
                          <li key={point} className="flex gap-3 text-slate-700">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#99CC33]" />
                            <span className="leading-7">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <a
                          href={audience.href}
                          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                        >
                          {audience.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <Container>
          <div className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Start the conversation
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Have land that could support a padel facility?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about your school, university, or sports club site. We’ll
              review whether a TopTier Padel facility could work for your
              location.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="secondary">
                Request a Site Review
              </Button>
              <a
                href="mailto:info@top-tierpadel.com"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email info@top-tierpadel.com
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}