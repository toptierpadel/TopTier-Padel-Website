import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Why Padel | TopTier Padel",
  description:
    "Learn what padel is, why it is growing so quickly, and why it is a natural fit for schools, universities, and sports clubs.",
};

const padelStats = [
  {
    stat: "1M",
    label: "people now playing in Britain",
    description:
      "Padel has moved quickly from a niche racket sport to something people are actively looking for. The LTA now estimates that one million adults and juniors are playing padel across Britain.",
  },
  {
    stat: "1,825",
    label: "courts across Britain",
    description:
      "The court network is expanding fast, with padel now available across hundreds of venues. That growth matters because every new court makes the sport more familiar, visible, and easier to try.",
  },
  {
    stat: "77K+",
    label: "courts worldwide",
    description:
      "This is not just a UK trend. The International Padel Federation reports more than 77,000 courts globally, spread across 150 nations.",
  },
];

const fitSections = [
  {
    title: "Schools",
    description:
      "Students do not need years of coaching before they can enjoy padel. It is quick to understand, usually played in doubles, and works well for PE, after-school sessions, staff use, holiday programmes, and family or community access outside school hours.",
  },
  {
    title: "Universities",
    description:
      "Padel fits naturally into campus life: easy to try with friends, social enough for societies and casual sport, and competitive enough for leagues, coaching, and inter-university play. It gives students another reason to stay active and spend time on campus.",
  },
  {
    title: "Sports clubs",
    description:
      "For clubs, padel adds a sport that feels fresh without feeling intimidating. It can sit alongside tennis, football, cricket, rugby, golf, or fitness facilities, helping members bring friends, play more often, and use the club in new ways.",
  },
];

export default function WhyPadelPage() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-48 text-white">
        <Image
          src="/images/padel-and-balls.jpeg"
          alt="Padel court and balls"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/15" />

        <Container>
          <Reveal>
            <div className="relative max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                Why Padel
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
                The racket sport everyone suddenly wants to play.
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-white/85">
                Padel is fast, social, easy to pick up, and difficult not to
                enjoy. That combination is why it has become one of the most
                talked-about sports in the world — and why schools, universities,
                and sports clubs are starting to take it seriously.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What is padel */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/padel-main.jpeg"
                  alt="Players on a padel court"
                  width={900}
                  height={650}
                  className="h-[34rem] w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  What is padel?
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Think tennis, squash, and doubles all mixed into one.
                </h2>

                <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    Padel is a racket sport usually played as doubles on a
                    smaller enclosed court. You hit the ball over the net like
                    tennis, but the glass walls are part of the game, so rallies
                    stay alive for longer.
                  </p>

                  <p>
                    That is what makes it fun so quickly. Beginners can get a
                    rally going without needing perfect technique, while stronger
                    players still have plenty of room for speed, tactics,
                    teamwork, and competitive play.
                  </p>

                  <p>
                    It is also social by design. Four people play at once, the
                    court is compact, and the game naturally creates quick,
                    energetic points. For a lot of people, it feels less formal
                    than tennis and more active than just going to the gym.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why padel */}
      <section className="bg-[#D9EEFF] py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="border-l-4 border-[#99CC33] pl-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Why is padel so popular?
                </p>

                <h2 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Because people can try it once and actually want to come back.
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {padelStats.map((item, index) => (
                <Reveal key={item.stat} delay={index * 0.08}>
                  <div>
                    <p className="text-6xl font-black tracking-tight text-[#0077C8]">
                      {item.stat}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                      {item.label}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.16}>
              <div className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-3xl font-bold tracking-tight text-slate-950">
                  The simple reason people like it
                </h3>

                <div className="mt-6 grid gap-8 text-lg leading-8 text-slate-600 md:grid-cols-3">
                  <p>
                    <strong className="text-slate-950">It is approachable.</strong>{" "}
                    You do not need to be an experienced racket-sport player to
                    enjoy your first game.
                  </p>

                  <p>
                    <strong className="text-slate-950">It is social.</strong>{" "}
                    Doubles play makes it easy to bring friends, mix levels, and
                    build groups around the sport.
                  </p>

                  <p>
                    <strong className="text-slate-950">It is still competitive.</strong>{" "}
                    As players improve, the game gets faster, smarter, and more
                    tactical.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Where padel fits */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Where padel fits
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Easy to picture. Easy to use.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Padel works best in places where people already gather:
                  schools, universities, and sports clubs. It gives those sites
                  a sport that feels current, active, and welcoming without
                  being difficult to explain.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {fitSections.map((section) => (
                  <div
                    key={section.title}
                    className="grid gap-6 py-10 md:grid-cols-[13rem_1fr]"
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                      {section.title}
                    </h3>

                    <p className="text-lg leading-8 text-slate-600">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#004B87] py-20 text-white">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                Bring padel to your site
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Want to see whether padel could work at your site?
              </h2>

              <p className="mt-4 text-lg leading-8 text-white/80">
                TopTier Padel helps schools, universities, and sports clubs turn
                suitable space into professionally developed and managed padel
                facilities.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#99CC33] px-7 py-4 text-base font-bold text-slate-950 transition hover:bg-[#8abb2e]"
            >
              Request a Site Review
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}