import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Schools & Universities | TopTier Padel",
  description:
    "TopTier Padel helps schools and universities bring fully funded, professionally managed padel facilities to campus.",
};

const educationPriorities = [
  {
    title: "Student access comes first",
    description:
      "The facility is structured around the institution’s timetable, with priority access for students, staff, PE, enrichment, societies, recreation, and wider campus use.",
  },
  {
    title: "No capital investment required",
    description:
      "TopTier funds the project and manages the development, so the institution can introduce padel without diverting budget from teaching, student services, or existing facilities.",
  },
  {
    title: "Built around school needs",
    description:
      "Every site is different. Court positioning, access, safeguarding requirements, operating hours, and community use are discussed before any project moves forward.",
  },
];

const useCases = [
  "PE lessons and games sessions",
  "After-school clubs and enrichment",
  "University societies and recreational sport",
  "Staff wellbeing and social play",
  "Holiday programmes and camps",
  "Community access outside designated school use",
];

const processSteps = [
  {
    step: "01",
    title: "Understand the campus",
    description:
      "We review the available space, access, student use cases, safeguarding considerations, likely court positioning, and how padel would fit into the normal rhythm of the school or university.",
  },
  {
    step: "02",
    title: "Agree access and safeguards",
    description:
      "Before development, we agree how the facility will be used: when students or staff have priority, how public access is managed, and how the facility operates without disrupting the institution.",
  },
  {
    step: "03",
    title: "Develop the facility",
    description:
      "TopTier coordinates planning, construction, court installation, booking technology, access systems, and the supporting infrastructure needed to bring the facility into use.",
  },
  {
    step: "04",
    title: "Manage it long term",
    description:
      "After launch, TopTier handles bookings, maintenance, upkeep, systems, and day-to-day management so the facility remains easy to use and professionally run.",
  },
];

export default function SchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-48 text-white">
        <Image
          src="/images/school-padel.jpeg"
          alt="Students playing padel"
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
                Schools & Universities
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
                Bring padel to campus without taking on the project yourself.
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-white/85">
                TopTier Padel helps schools and universities create fully funded,
                professionally managed padel facilities. You provide suitable
                space; we handle the funding, development, operation, and
                maintenance.
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

      {/* Education fit */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Why it works for education
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  A modern sport students can actually start playing quickly.
                </h2>

                <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    Padel is easy to pick up, social, and usually played in
                    doubles, which makes it unusually well suited to school and
                    university environments. Students can enjoy it quickly,
                    whether they are experienced athletes or trying racket
                    sports for the first time.
                  </p>

                  <p>
                    It can support PE, enrichment, recreational sport, student
                    societies, staff wellbeing, holiday programmes, and wider
                    community use. The facility becomes more than a court; it
                    becomes a flexible campus asset.
                  </p>

                  <p>
                    The key is that it has to work for the institution first.
                    Student access, safeguarding, timetable fit, and day-to-day
                    practicality need to be built into the model from the start.
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

      {/* Priorities */}
      <section className="bg-[#D9EEFF] py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                The education model
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Designed around the school day, not around public bookings.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                For educational institutions, the model has to feel safe,
                practical, and easy to manage. Public use can help the facility
                stay active outside designated school or university hours, but
                the starting point is always the host’s timetable and community.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {educationPriorities.map((item) => (
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
                  One facility, multiple parts of campus life.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  The strongest school and university facilities are used in
                  more than one way. Padel can sit across sport, wellbeing,
                  social activity, and community engagement without requiring the
                  institution to manage a new operating business.
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
                  Built carefully around the institution.
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/75">
                  We do not start with a standard court package and force it onto
                  the site. The process begins with the institution’s needs:
                  space, schedule, student access, safeguarding, and how the
                  facility should operate over time.
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
                    What the institution avoids
                  </p>

                  <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                    No internal capital project. No new facility team to build.
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    TopTier covers the planning, construction, management, and
                    maintenance of the courts, so the institution does not have
                    to take on the full operational burden itself.
                  </p>

                  <p>
                    The aim is a facility that supports students and campus life
                    while remaining professionally managed over time. The details
                    — access hours, court positioning, public use, and ongoing
                    responsibilities — are agreed around the host site.
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
                Bring padel to campus
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Have space that could support student and community use?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Tell us about your school or university site. We’ll review the
                space, likely use case, and whether a fully funded TopTier Padel
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