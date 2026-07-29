import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Sports Clubs | TopTier Padel",
  description:
    "TopTier Padel helps sports clubs add fully funded, professionally managed padel facilities for members and local players.",
};

const clubPriorities = [
  {
    title: "Expand the club offering",
    description:
      "Padel gives existing members something new to play and gives prospective members another reason to join, visit, and spend more time at the club.",
  },
  {
    title: "Use underused space better",
    description:
      "Many clubs have areas of land that are difficult to activate. Padel can turn suitable space into a visible, high-use sports facility.",
  },
  {
    title: "Keep the operation simple",
    description:
      "TopTier funds, develops, manages, and maintains the facility, so the club can add padel without having to build a padel operation from scratch.",
  },
];

const useCases = [
  "Member padel sessions",
  "Preferential access for club members",
  "Introductory sessions for new players",
  "Coaching and junior programmes",
  "Club tournaments and social events",
  "Public bookings outside member-priority windows",
];

const processSteps = [
  {
    step: "01",
    title: "Review the site",
    description:
      "We assess the available space, access, visibility, planning context, likely court layout, and how padel could fit alongside the club’s existing facilities.",
  },
  {
    step: "02",
    title: "Shape the club offer",
    description:
      "We agree how members use the facility, how priority access works, when public bookings are available, and how padel can support the wider club environment.",
  },
  {
    step: "03",
    title: "Develop the facility",
    description:
      "TopTier coordinates planning, construction, court installation, booking technology, access systems, and the supporting infrastructure needed to launch.",
  },
  {
    step: "04",
    title: "Manage it over time",
    description:
      "After launch, TopTier handles bookings, maintenance, upkeep, systems, and day-to-day management so the facility remains reliable and easy to use.",
  },
];

export default function SportsClubsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-48 text-white">
        <Image
          src="/images/sports-padel.webp"
          alt="Padel players at a sports club"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/25" />

        <Container>
          <Reveal>
            <div className="relative max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                Sports Clubs
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Add padel to your club without taking on the full project.
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-white/85">
                TopTier Padel helps sports clubs create fully funded,
                professionally managed padel facilities. Your club provides
                suitable space; we handle the funding, development, operation,
                and maintenance.
              </p>

              <div className="mt-10">
                <Button href="/contact" variant="secondary">
                  Request a Site Review
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Club fit */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Why it works for clubs
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  A fresh sport that fits naturally into club life.
                </h2>

                <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    Padel is easy to try, social from the first game, and
                    competitive enough to keep people coming back. That makes it
                    a strong addition for clubs that want to offer something new
                    without moving away from their existing identity.
                  </p>

                  <p>
                    For members, it creates another way to use the club: casual
                    games, coaching, leagues, events, and social play. For the
                    club, it can bring more activity to the site and give
                    members another reason to visit regularly.
                  </p>

                  <p>
                    The important part is making the facility work for the club,
                    not just placing courts on spare land. Member access,
                    operating hours, public bookings, clubhouse impact, and
                    long-term upkeep all need to be considered from the start.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/padel-main.jpeg"
                  alt="Padel players on court"
                  width={900}
                  height={650}
                  className="h-[34rem] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Club model */}
      <section className="bg-[#D9EEFF] py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                The club model
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Built around members, site activity, and long-term simplicity.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                Sports clubs often have the right environment for padel:
                existing members, social spaces, sporting culture, and land that
                could be used more effectively. TopTier helps turn that
                opportunity into a managed facility without the club needing to
                fund, build, and operate it alone.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {clubPriorities.map((item) => (
              <Reveal key={item.title}>
                <div className="h-full border-t-4 border-[#99CC33] bg-white p-7 shadow-sm">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Use cases */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  How it could be used
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  A padel facility can become part of the club’s everyday rhythm.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Padel works best when it is integrated into the club rather
                  than treated as a separate add-on. It can support members,
                  coaching, social events, junior activity, and local players,
                  while bringing more regular use to the wider site.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-lg font-semibold leading-7 text-slate-950">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-slate-950 py-24 text-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                  Development process
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                  Planned around the club, not just the courts.
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/75">
                  We start by understanding how the club already works: member
                  patterns, peak times, available land, access, clubhouse
                  relationship, and how padel could fit into the wider member
                  experience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-0 overflow-hidden rounded-[1.75rem] border border-white/15">
                {processSteps.map((item) => (
                  <div
                    key={item.step}
                    className="grid gap-5 border-b border-white/15 bg-white/5 p-7 last:border-b-0 md:grid-cols-[5rem_1fr]"
                  >
                    <p className="text-4xl font-bold tracking-tight text-[#99CC33]">
                      {item.step}
                    </p>

                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Reassurance */}
      <section className="bg-white py-24">
        <Container>
          <div className="rounded-[2rem] bg-[#F5FAFF] p-8 ring-1 ring-slate-200 md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                    What the club avoids
                  </p>

                  <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                    No need to become a padel developer or operator.
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    TopTier covers the funding, planning, construction,
                    management, and maintenance of the facility, so the club
                    does not need to take on the full operational burden itself.
                  </p>

                  <p>
                    The aim is a facility that strengthens the club experience
                    while remaining professionally managed over time. The details
                    — member access, public bookings, operating hours, clubhouse
                    relationship, and ongoing responsibilities — are agreed
                    around the club.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#005A8D] py-24 text-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                Bring padel to your club
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Have space that could support members and local players?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Tell us about your sports club site. We’ll review the space,
                likely use case, and whether a fully funded TopTier Padel
                facility could be a practical fit.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#99CC33] px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-[#8abb2e]"
              >
                Request a Site Review
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}