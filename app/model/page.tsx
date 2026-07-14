import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Our Model | TopTier Padel",
  description:
    "TopTier Padel funds, develops, manages, and maintains premium padel facilities for schools, universities, and sports clubs.",
};

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