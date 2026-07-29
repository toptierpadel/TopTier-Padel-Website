import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "About Us | TopTier Padel",
  description:
    "Learn about TopTier Padel, our philosophy, and the team bringing professionally managed padel facilities to schools, universities, and sports clubs across the UK.",
};

const team = [
  {
    name: "Alejandro Pesquero",
    role: "Founder & CEO",
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
                Bringing padel to more places, without making it complicated for the host.
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
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Our philosophy
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Padel should be easy to access, easy to enjoy, and easy for host sites to offer.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  We started TopTier Padel because we believe sport has the power to bring people together — and that everyone should have the chance to experience that. Our approach is simple: partner with schools, universities, and sports clubs to turn underused land into thriving padel facilities that the whole community can enjoy. We back every decision with real data and careful planning, but what matters most to us is what happens on the court afterwards — new friendships, healthier habits, and a sport people genuinely look forward to playing.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder / Team */}
      <section className="bg-[#D9EEFF] py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                The team
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Built by people who care about the sport and the model behind it.
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