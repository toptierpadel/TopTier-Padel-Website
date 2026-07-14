import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

const benefits = [
  {
    title: "Accessible for new players",
    description:
      "Padel is easier to pick up than many traditional racket sports, which makes it attractive for students, members, families, and casual players.",
  },
  {
    title: "Highly social format",
    description:
      "Usually played in doubles, padel naturally encourages teamwork, communication, and community participation.",
  },
  {
    title: "Strong community use",
    description:
      "A padel facility can serve more than one group: students, staff, club members, families, local players, coaches, and event participants.",
  },
  {
    title: "Growing demand",
    description:
      "Padel’s rapid growth makes it a compelling addition for institutions and clubs looking to modernize their sports offering.",
  },
  {
    title: "Compact sports infrastructure",
    description:
      "Padel courts can create high usage from a relatively efficient footprint, making them well-suited to host sites with available space.",
  },
  {
    title: "Revenue and engagement potential",
    description:
      "Through bookings, coaching, events, and community play, padel can support both participation and long-term commercial value.",
  },
];

const audiences = [
  {
    title: "For schools and universities",
    description:
      "Padel gives students access to a modern, inclusive sport that supports wellbeing, recreation, and campus life. It can also strengthen ties between the institution and the surrounding community.",
  },
  {
    title: "For sports clubs",
    description:
      "Padel helps clubs expand their offering, attract new members, increase site activity, and create new reasons for members and local players to spend time at the club.",
  },
];

export const metadata = {
  title: "What Is Padel? | TopTier Padel",
  description:
    "Learn what padel is, why it is growing quickly, and why it works well for schools, universities, sports clubs, and community sports environments.",
};

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/sports-padel.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />

        <Container>
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
              The sport
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              Why padel works for communities.
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-white/85">
              Padel is a fast-growing racket sport that combines the energy of
              tennis with a more accessible, social format. For schools,
              universities, and sports clubs, it creates a modern sports facility
              that can serve students, members, families, and local players.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#99CC33] px-7 py-4 text-base font-bold text-slate-950 transition hover:bg-[#8abb2e]"
              >
                Request a Site Review
              </a>

              <Button href="/model" variant="secondary">
                See Our Model
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What is padel */}
      <section className="relative overflow-hidden bg-blue-50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.14),_transparent_32%)]" />

        <Container>
          <div className="relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/school-padel.jpeg"
                alt="Young players on a padel court"
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                What is padel?
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                A social racket sport with a low barrier to entry.
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Padel is typically played in doubles on an enclosed court. The
                  game uses solid rackets, a lower-compression ball, and walls
                  that keep rallies alive.
                </p>

                <p>
                  The result is a sport that feels energetic and competitive,
                  but is also approachable for beginners. Players can start
                  enjoying rallies quickly, which makes padel especially strong
                  for mixed-ability groups and community environments.
                </p>

                <p>
                  For host sites, that accessibility matters. A padel facility is
                  not just for elite athletes; it can be used by students,
                  members, staff, families, beginners, experienced players, and
                  local communities.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeader
            eyebrow="Why it works"
            title="A facility that creates participation, activity, and long-term value."
            description="Padel is attractive because it combines sport, community, and commercial potential in a format that works across education and club environments."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-5 h-2 w-14 rounded-full bg-[#99CC33]" />

                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Audience application */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(153,204,51,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.16),_transparent_35%)]" />

        <Container>
          <div className="relative">
            <SectionHeader
              eyebrow="Where padel fits"
              title="One sport, multiple host benefits."
              description="The exact use case differs by host, but the underlying value is the same: more activity, stronger community engagement, and a modern sports asset."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {audiences.map((audience) => (
                <div
                  key={audience.title}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur"
                >
                  <h3 className="text-3xl font-bold tracking-tight">
                    {audience.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-white/80">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Community section */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Community impact
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                More than courts. A reason for people to gather.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The strongest padel facilities become community hubs. They
                support casual play, coaching, school programming, member
                activity, tournaments, social events, and public bookings.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                That makes padel especially attractive for hosts that want a
                facility with everyday use, not a sports asset that sits idle
                outside limited training or match windows.
              </p>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Discuss Your Site
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/sports-padel.webp"
                alt="Padel players on court"
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-50 py-24">
        <Container>
          <div className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white md:px-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
              Bring padel to your site
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Have space that could become a padel facility?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
              TopTier Padel funds, develops, manages, and maintains premium
              padel facilities for suitable host sites across the UK.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#99CC33] px-7 py-4 text-base font-bold text-slate-950 transition hover:bg-[#8abb2e]"
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