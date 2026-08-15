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
    role: "Founder & CEO",
    image: "/images/alejandro.jpg",
    bio:
      "Born and raised in Spain, Alejandro founded TopTier Padel out of a love for the sport and a belief that padel can grow meaningfully across the UK. He advises a padel club in South London and was hired to manage the initial setup for a padel club in Lincolnshire, giving him direct market experience and strong industry relationships.",
    links: {
      linkedin: "https://www.linkedin.com/in/alejandro-pesquero-martin/",
      email: "mailto:alejandro@top-tierpadel.com",
    },
  },
  {
    name: "Joe Booth",
    role: "Director of Operations",
    image: "/images/joe.jpg",
    imagePosition: "object-[center_15%]",
    bio:
      "Joe is a creative strategist and consultant with experience across executive recruitment, business development, international education, and the padel sector. At TopTier Padel, he supports operations, site development, and partner relationships, helping turn promising locations into practical club opportunities.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Origin Story */}
      <section className="relative overflow-hidden bg-white pb-28 pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(153,204,51,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(0,119,200,0.14),transparent_30%)]" />
        <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-slate-200/70" />
        <div className="absolute left-1/2 top-36 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full border border-slate-200/70" />

        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                About TopTier Padel
              </p>

              <h1 className="mx-auto mt-4 max-w-5xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                From Spanish courts to UK campuses.
              </h1>

              <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-slate-600">
                Our founder Alejandro grew up in Spain, where padel was already
                part of everyday sporting life, before attending school in the
                UK, where sport was central to the daily routine but padel was
                nowhere to be found. That contrast became the starting point for
                TopTier Padel.
              </p>
            </div>
          </Reveal>

          <div className="relative mx-auto mt-20 max-w-6xl lg:h-[66rem] xl:h-[62rem]">
            {/* UK panel */}
            <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[62%] xl:w-[64%]">
              <Reveal delay={0.08}>
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#005A8D] shadow-2xl">
                  <div className="relative h-[34rem]">
                    <Image
                      src="/images/english-school.png"
                      alt="School sport in the UK"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                    <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
                    <div className="absolute bottom-10 left-10 h-44 w-44 rounded-full bg-[#99CC33]/25 blur-3xl" />

                    <div className="absolute bottom-0 left-0 max-w-xl p-8 text-white md:p-10">
                      <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                        UK schools & clubs
                      </p>

                      <h3 className="mt-3 text-4xl font-bold tracking-tight">
                        Sports culture. No padel.
                      </h3>

                      <p className="mt-4 text-lg leading-8 text-white/75">
                        Facilities, land, and sporting communities already
                        existed — just missing the right game.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Spain panel */}
            <div className="mt-8 lg:absolute lg:right-0 lg:top-24 lg:mt-0 lg:w-[54%] xl:top-24 xl:w-[52%]">
              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl">
                  <div className="relative h-[30rem]">
                    <Image
                      src="/images/spanish-padel.png"
                      alt="Padel courts in Spain"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                    <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[#0077C8]/35 blur-3xl" />
                    <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute bottom-0 left-0 max-w-lg p-8 text-white md:p-10">
                      <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                        Spain
                      </p>

                      <h3 className="mt-3 text-4xl font-bold tracking-tight">
                        Padel as part of everyday life.
                      </h3>

                      <p className="mt-4 text-lg leading-8 text-white/75">
                        A beloved sport baked into friendships, families, clubs,
                        and community.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Mission card */}
            <div className="relative z-10 mx-auto mt-8 max-w-3xl lg:absolute lg:left-1/2 lg:top-[41rem] lg:mt-0 lg:-translate-x-1/2">
              <Reveal delay={0.24}>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                    The idea
                  </p>

                  <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                    Bring the best of both together.
                  </h3>

                  <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                    <p>
                      That contrast is what sparked TopTier Padel. By partnering
                      directly with schools, universities, and sports clubs, we
                      set out to bring the energy of Spanish padel into UK
                      institutions already primed for it.
                    </p>

                    <p>
                      Our philosophy is simple: padel should be easy to access,
                      easy to enjoy, and easy for host sites to offer. The host
                      provides suitable space; TopTier Padel handles the
                      funding, development, management, and maintenance behind
                      the scenes.
                    </p>
                  </div>
                </div>
              </Reveal>
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
                Built by people who love padel and care about the model behind
                it.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                TopTier Padel brings together padel experience, operational
                focus, and a clear belief that the sport can become part of
                everyday life at schools, universities, and sports clubs across
                the UK.
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
                      className={`object-cover ${
                        person.imagePosition ?? "object-center"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col p-7">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                      {person.role}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      {person.name}
                    </h3>

                    <p className="mt-5 text-base leading-7 text-slate-600">
                      {person.bio}
                    </p>

                    {"links" in person && person.links && (
                      <div className="mt-auto flex gap-3 pt-8">
                        <a
                          href={person.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} LinkedIn`}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-950 transition hover:border-[#0077C8] hover:bg-[#0077C8] hover:text-white"
                        >
                          <span className="text-sm font-black">in</span>
                        </a>

                        <a
                          href={person.links.email}
                          aria-label={`Email ${person.name}`}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-950 transition hover:border-[#99CC33] hover:bg-[#99CC33] hover:text-slate-950"
                        >
                          <span className="text-lg font-black">@</span>
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}