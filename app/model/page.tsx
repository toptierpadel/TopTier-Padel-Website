import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Our Model | TopTier Padel",
  description:
    "TopTier Padel funds, develops, manages, and maintains premium padel facilities for schools, universities, and sports clubs.",
};

const processSteps = [
  {
    number: "01",
    title: "Site review",
    description:
      "We assess the available space, access, court positioning, host priorities, safeguarding considerations, and likely demand.",
  },
  {
    number: "02",
    title: "Partnership structure",
    description:
      "We agree the access arrangements, revenue participation, operating responsibilities, and whether the project is fully funded or shared-investment.",
  },
  {
    number: "03",
    title: "Planning and development",
    description:
      "TopTier coordinates planning, construction, court installation, lighting, canopy options, technology, and supporting infrastructure.",
  },
  {
    number: "04",
    title: "Operations and maintenance",
    description:
      "We manage the facility over the long term, including bookings, access, upkeep, maintenance, programming, and day-to-day operations.",
  },
];

export default function ModelPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-slate-950 py-24 text-white md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                Our Model
              </p>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                The host provides the space. TopTier handles the rest.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
                TopTier Padel partners with schools, universities, and sports
                clubs to create fully funded, professionally managed padel
                facilities. The host provides suitable space, while TopTier
                funds, develops, operates, and maintains the facility.
              </p>

              <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-300">
                The result is a premium sports asset for the host community —
                with priority access, public booking revenue, and{" "}
                <strong className="font-semibold text-white">
                  no capital investment required from the host.
                </strong>
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="secondary">
                  Request a Site Review
                </Button>
                <Button href="#partnership-options" variant="secondary">
                  Compare Models
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Partnership model
                </p>

                <div className="mt-6 grid gap-5">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-semibold">Host site provides</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Underused space with new potential.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-950 p-5 text-white">
                    <h3 className="font-semibold">TopTier Padel provides</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Funding, planning, construction, management, maintenance,
                      and operating systems.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-5">
                    <h3 className="font-semibold text-emerald-950">
                      Together we create
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-emerald-900">
                      A premium padel facility with priority host access, public
                      bookings, coaching opportunities, events, and long-term
                      revenue potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partnership options */}
      <section id="partnership-options" className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Partnership options"
            title="Flexible structures for different host sites."
            description="Some hosts want a fully funded route with no capital investment. Others may prefer to participate directly in the investment and economics. We structure the partnership around the site, host priorities, and commercial opportunity."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Option 1
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Fully funded model
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                TopTier covers the project investment and operates the facility.
                The host provides suitable space, receives priority access, and
                can share in long-term revenue without contributing capital.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-950">
                  Best suited for:
                </h3>
                <p className="mt-2 text-slate-600">
                  Schools, universities, and clubs that want a padel facility
                  without taking on the financial or operational burden.
                </p>
              </div>
            </Card>

            <Card>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Option 2
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Shared-investment model
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The host contributes to the project investment and participates
                more directly in the economics of the facility, while TopTier
                supports development, management, maintenance, and operations.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-950">
                  Best suited for:
                </h3>
                <p className="mt-2 text-slate-600">
                  Hosts that want greater economic participation and are willing
                  to share financial responsibility for the project.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Development process
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                From available space to operating padel facility.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our process is designed to make development simple for the host.
                We review the site, structure the partnership, coordinate the
                development, and operate the facility over the long term.
              </p>

              <div className="mt-8">
                <Button href="/contact">Start with a site review</Button>
              </div>
            </div>

            <div className="grid gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-[5rem_1fr]"
                >
                  <div className="text-3xl font-bold text-emerald-700">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
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
              Have space that could support a padel facility?
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