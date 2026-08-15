import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

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

const modelSteps = [
  {
    number: "01",
    title: "Host space",
    description:
      "A school, university, or sports club has suitable space, an existing community, and the opportunity to create new value from underused land.",
  },
  {
    number: "02",
    title: "TopTier Padel delivery",
    description:
      "TopTier Padel handles funding, development, booking systems, operations, and maintenance, with the partnership structured around host access and revenue participation.",
  },
  {
    number: "03",
    title: "Managed facility",
    description:
      "The host receives agreed access while the facility is professionally managed long term, with potential revenue share from bookings, coaching, events, and wider community use.",
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(153,204,51,0.22),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(0,119,200,0.16),_transparent_30%)]" />

        <Container>
          <div className="relative max-w-5xl">
            <p className="mb-5 text-base font-semibold uppercase tracking-wide text-[#99CC33]">
              Helping bring padel to local communities across the UK.
            </p>

            <h1 className="text-[48px] font-bold leading-[1.05] tracking-tight md:text-[60px]">
              Transform unused space into a professionally managed padel
              facility.
            </h1>

            <p className="mt-7 max-w-3xl text-[20px] leading-9 text-white">
              TopTier Padel funds, develops, and manages premium padel
              facilities for schools, universities, and sports clubs across the
              UK.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#99CC33] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#8abb2e]"
              >
                Get in Touch
              </a>

              <Button href="/model" variant="secondary">
                See How It Works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Homepage Body */}
      <div className="relative overflow-hidden bg-white">
        {/* shared atmosphere across model + audience sections */}
        <div className="absolute left-[-14rem] top-[-8rem] h-[44rem] w-[44rem] rounded-full bg-[#99CC33]/16 blur-3xl" />
        <div className="absolute right-[-16rem] top-[8rem] h-[46rem] w-[46rem] rounded-full bg-[#0077C8]/12 blur-3xl" />
        <div className="absolute left-1/2 top-[42rem] h-[20rem] w-[78rem] -translate-x-1/2 rotate-[3deg] rounded-full bg-[#0077C8]/6 blur-3xl" />

        {/* visual transition between model and audience */}
        <div className="absolute left-1/2 top-[49%] h-[22rem] w-[84rem] -translate-x-1/2 rotate-[-2deg] rounded-full bg-[#99CC33]/7 blur-3xl" />

        {/* carries atmosphere down toward CTA/footer */}
        <div className="absolute right-[-18rem] bottom-[4rem] h-[54rem] w-[54rem] rounded-full bg-[#99CC33]/12 blur-3xl" />
        <div className="absolute left-[-16rem] bottom-[12rem] h-[42rem] w-[42rem] rounded-full bg-[#0077C8]/8 blur-3xl" />

        {/* Model Preview */}
        <section className="relative pt-28 pb-20">
          <Container>
            <Reveal>
              <div className="relative mx-auto max-w-5xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  The Model
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                  The host provides the space. TopTier Padel handles the rest.
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                  Our role is to make the process simple: fund the facility,
                  coordinate development, manage operations, and keep the courts
                  working over time.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative mx-auto mt-20 max-w-5xl">
                <div className="border-y border-slate-200">
                  {modelSteps.map((step) => (
                    <div
                      key={step.title}
                      className="grid gap-5 border-b border-slate-200 py-8 last:border-b-0 md:grid-cols-[5rem_1fr]"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                        {step.number}
                      </p>

                      <div>
                        <h3 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                          {step.title}
                        </h3>

                        <p className="mt-3 max-w-3xl text-xl leading-9 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <a
                    href="/model"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    View our full model
                  </a>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Quiet visual transition */}
        <div className="relative flex justify-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-300" />
            <div className="h-2 w-2 rounded-full bg-[#99CC33]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </div>

        {/* Who We Work With */}
        <section className="relative pt-20 pb-28">
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

        {/* Quiet CTA */}
        <section className="relative pb-28">
          <Container>
            <Reveal>
              <div className="relative mx-auto max-w-3xl text-center">
                <div className="mx-auto h-px w-40 bg-slate-200" />

                <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Start the conversation
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-xl leading-8 text-slate-600">
                  Have a school, university, or sports club site that could support
                  padel? Contact us at{" "}
                  <a
                    href="mailto:info@top-tierpadel.com"
                    className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:text-[#0077C8] hover:decoration-[#0077C8]"
                  >
                    info@top-tierpadel.com
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>
    </>
  );
}