import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Our Model | TopTier Padel",
  description:
    "TopTier Padel funds, develops, manages, and maintains premium padel facilities for schools, universities, and sports clubs.",
};

const modelRows = [
  {
    item: "Investment",
    host: "No capital investment required.",
    topTier:
      "TopTier funds the development of the facility and the core infrastructure needed to bring it into use.",
    why:
      "The host can introduce padel without diverting budget away from teaching, members, facilities, or other priorities.",
  },
  {
    item: "Space",
    host: "Provides suitable land or underused space.",
    topTier:
      "Reviews the site, assesses feasibility, and shapes the facility plan around the host’s needs.",
    why:
      "The project starts with whether the site works practically for the host community, not simply whether courts can fit.",
  },
  {
    item: "Delivery",
    host: "Supports access, approvals, and practical coordination.",
    topTier:
      "Coordinates planning, suppliers, court installation, supporting infrastructure, and launch preparation.",
    why:
      "The host does not need to manage a specialist sports construction project internally.",
  },
  {
    item: "Operation",
    host: "Receives agreed priority access for its community.",
    topTier:
      "Manages bookings, access, maintenance, technology, scheduling, and day-to-day facility performance.",
    why:
      "The facility is actively managed so it remains easy to use, reliable, and well maintained over time.",
  },
  {
    item: "Long-term use",
    host: "Uses the facility for pupils, students, members, staff, or local users.",
    topTier:
      "Supports regular use through booking systems, maintenance, programming, and ongoing oversight.",
    why:
      "The goal is not just to build courts. It is to create a facility that becomes part of the site’s sporting life.",
  },
];

const removedBurdens = [
  "Finding and committing development capital",
  "Managing specialist suppliers and installation",
  "Setting up booking and access systems",
  "Maintaining the courts and supporting infrastructure",
  "Handling day-to-day facility issues",
  "Keeping the facility reliable, usable, and well managed over time",
];

export default function ModelPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-slate-950 pb-28 pt-56 text-white md:pb-36 md:pt-60">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                The host provides the space. TopTier handles the rest.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
                TopTier Padel partners with schools, universities, and sports
                clubs to create fully funded, professionally managed padel
                facilities. The host provides suitable space, while TopTier
                funds, develops, operates, and maintains the facility.
              </p>

              <p className="mt-5 max-w-2xl text-xl leading-9 text-slate-300">
                The result is a new sports facility for the host community —
                with priority access, long-term support, and{" "}
                <strong className="font-semibold text-white">
                  no capital investment required from the host.
                </strong>
              </p>

              <div className="mt-12">
                <Button href="/contact" variant="secondary">
                  Request a Site Review
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Partnership model
                </p>

                <div className="mt-6 grid gap-5">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-semibold">Host site provides</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Suitable land or underused space with the potential to
                      support regular sport and community use.
                    </p>
                  </div>

                <div className="rounded-2xl border border-[#005A8D]/20 bg-[#005A8D]/20 p-5 text-slate-950">
                    <h3 className="font-semibold text-[#005A8D]">TopTier Padel provides</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                        Funding, development, operating systems, maintenance, and
                        long-term facility management.
                    </p>
                </div>

                <div className="rounded-2xl border border-[#99CC33]/30 bg-[#99CC33]/25 p-5">
                <h3 className="font-semibold text-slate-950">The product</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                    A padel facility that is useful, well managed, and genuinely
                    valuable to the host community.
                </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why the model exists */}
      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-5xl text-center">

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Padel should be easy for a host to offer, not another project for
              staff to manage.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Schools, universities, and sports clubs often have the right
              setting for padel: space, community, and regular activity on site.
              What they may not have is the capital, time, or specialist
              operating experience to deliver and run a new facility themselves.
            </p>
          </div>
        </Container>
      </section>

      {/* How the model works */}
      <section className="bg-[#D9EEFF] py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
              How the model works
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A clear division of responsibilities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              The model is simple: the host contributes the site and local
              community; TopTier contributes the funding, development, and
              operating capability needed to make the facility work.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {modelRows.map((row) => (
                <div
                key={row.item}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
                >
                <div className="grid lg:grid-cols-[0.65fr_1fr_1fr_1.15fr]">
                    <div className="flex items-center bg-slate-950 p-6 text-white">
                    <h3 className="text-2xl font-bold tracking-tight">{row.item}</h3>
                    </div>

                    <div className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0077C8]">
                        Host role
                    </p>
                    <p className="mt-3 leading-7 text-slate-700">{row.host}</p>
                    </div>

                    <div className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0077C8]">
                        TopTier role
                    </p>
                    <p className="mt-3 leading-7 text-slate-700">{row.topTier}</p>
                    </div>

                    <div className="bg-[#F5FAFF] p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0077C8]">
                        Why it matters
                    </p>
                    <p className="mt-3 leading-7 text-slate-700">{row.why}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </Container>
      </section>

      {/* What we remove */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                What TopTier removes
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                The host gets the facility without taking on the work behind it.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A padel facility can look straightforward once it is open. The
                harder part is everything behind the scenes: funding it,
                delivering it, maintaining it, and making sure it remains easy
                to use.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                TopTier takes on those responsibilities so the host does not
                need to build a separate padel operation internally.
              </p>
            </div>

            <div className="border-y border-slate-200">
              {removedBurdens.map((item) => (
                <div
                  key={item}
                  className="flex gap-5 border-b border-slate-200 py-6 last:border-b-0"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#99CC33]" />
                  <p className="text-xl font-semibold leading-8 text-slate-950">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-[#005A8D] py-24 text-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
                Understand the model
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Have a site where this model could work?
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Share the basics of your school, university, or sports club
                site. We’ll review the space, likely use case, and whether a
                fully funded TopTier Padel facility could be a practical fit.
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