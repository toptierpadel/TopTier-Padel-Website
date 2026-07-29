import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "About Us | TopTier Padel",
  description:
    "Learn about TopTier Padel, our philosophy, story, and the team bringing professionally managed padel facilities to schools, universities, and sports clubs across the UK.",
};

const team = [
  {
    name: "Alejandro Pesquero",
    role: "Founder & CFO",
    image: "/images/alejandro.jpg",
    bio:
      "Born and raised in Spain, Alejandro founded TopTier Padel out of a love for the sport and a belief that padel can grow meaningfully across the UK. He advises a padel club in South London and has been hired as the manager of a padel club in Lincolnshire, giving him direct experience in the market and strong industry relationships.",
  },
  {
    name: "Joe Booth",
    role: "Director of Operations",
    image: "/images/joe.jpg",
    bio:
      "Joe is a creative strategist and consultant specialising in executive recruitment, and business development across the internation education and padel sectors. Based in the UK, he helps schools, operators, and organisations unlock new opportunities — from attracting senior leaders to developing padel clubs through smart, risk‑sharing site acquisition models. Known for his collaborative approach and sharp eye for engaging, professional content, Joe blends insight, creativity, and commercial thinking to deliver ideas that inspire action and drive growth.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 pb-24 pt-48 text-white">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                About Us
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                Bringing padel to more places, without making it complicated for
                the host.
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
                TopTier Padel was created to help schools, universities, and
                sports clubs bring padel to their communities through a fully
                funded, professionally managed model.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

        {/* Philosophy */}
        <section className="bg-white py-24">
        <Container>
            <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Our philosophy
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Padel should be easy to access, easy to enjoy, and easy for host sites
                to offer.
            </h2>

            <div className="mx-auto mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
                <p>
                Padel is growing because people genuinely enjoy playing it. It is
                social, quick to learn, and welcoming to people who may not already
                see themselves as racket-sport players.
                </p>

                <p>
                But bringing padel to a school, university, or sports club is not just
                about installing courts. The facility has to be funded, planned,
                built, maintained, booked, and managed properly over time.
                </p>

                <p>
                Our approach is simple: the host provides suitable space, and TopTier
                handles the difficult parts behind the scenes. That way the facility
                can serve students, members, staff, families, and local players without
                becoming another major project for the host to run internally.
                </p>
            </div>
            </div>
        </Container>
        </section>

        {/* Our Story */}
        <section className="bg-[#D9EEFF] py-24">
        <Container>
            <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Our story
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Born from two sporting cultures.
            </h2>

            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-700">
                <p>
                TopTier Padel began with two very different experiences of growing up.
                Our founder spent his childhood between Spain, where padel was already
                a way of life, and a UK boarding school, where sport was central to
                daily life but padel was nowhere to be found.
                </p>

                <p>
                That contrast stayed with him: he had seen firsthand how much a sport
                could bring a community together, and he had also seen the untapped
                potential sitting right there in British schools — sports facilities,
                land, and a culture built around activity, just missing the right game.
                </p>

                <p>
                That combination is what sparked TopTier Padel. By partnering directly
                with schools, universities, and sports clubs, we set out to bring the
                energy he grew up with in Spain into UK institutions already primed for
                it — turning underused land into thriving padel courts.
                </p>

                <p>
                By handling everything from design and construction to day-to-day
                management, we are building a growing network of facilities across the
                country. What started as one person’s memory of two very different
                worlds has become a genuine mission: bringing the best of both
                together, one court at a time.
                </p>
            </div>
            </div>
        </Container>
        </section>

      {/* Team */}
      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                The team
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Built by people who care about the sport and the model behind
                it.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                TopTier brings together padel experience, operational focus, and
                a clear belief that the sport can become part of everyday life
                at schools, universities, and sports clubs across the UK.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-24 grid max-w-4xl justify-items-center gap-8 md:grid-cols-2">
            {team.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <article className="h-full w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                  <div className="relative h-[26rem]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                      {person.role}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      {person.name}
                    </h3>

                    <p className="mt-5 text-base leading-7 text-slate-600">
                      {person.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#005A8D] py-24 text-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                Work with TopTier
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Interested in bringing padel to your site?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Tell us about your school, university, or sports club. We’ll
                review whether your space could support a professionally managed
                TopTier Padel facility.
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