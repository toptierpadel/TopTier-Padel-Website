import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ModelTransformation } from "@/components/ModelTransformation";

export const metadata = {
  title: "Our Model | TopTier Padel",
  description:
    "TopTier Padel funds, develops, manages, and maintains padel facilities for schools, universities, and sports clubs.",
};

export default function ModelPage() {
  return (
    <>
      {/* Model Intro */}
      <section className="relative overflow-hidden bg-white pb-28 pt-48">
        {/* abstract model atmosphere */}
        <div className="absolute left-[-12rem] top-[-10rem] h-[44rem] w-[44rem] rounded-full bg-[#99CC33]/18 blur-3xl" />
        <div className="absolute right-[-14rem] top-10 h-[46rem] w-[46rem] rounded-full bg-[#0077C8]/16 blur-3xl" />
        <div className="absolute left-1/2 top-[30rem] h-[24rem] w-[70rem] -translate-x-1/2 rotate-[-6deg] rounded-full bg-[#0077C8]/8 blur-3xl" />

        {/* subtle vertical stage markers */}
        <div className="absolute left-[18%] top-[25rem] hidden h-[34rem] w-px bg-gradient-to-b from-slate-200 to-transparent lg:block" />
        <div className="absolute left-1/2 top-[25rem] hidden h-[34rem] w-px -translate-x-1/2 bg-gradient-to-b from-slate-200 to-transparent lg:block" />
        <div className="absolute right-[18%] top-[25rem] hidden h-[34rem] w-px bg-gradient-to-b from-slate-200 to-transparent lg:block" />

        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Our Model
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                From unused space to a managed padel facility.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                The host provides suitable space. TopTier funds, develops,
                manages, and maintains the facility — turning site potential
                into a working padel operation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ModelTransformation />
          </Reveal>

            <Reveal delay={0.18}>
            <div className="relative mx-auto mt-24 max-w-3xl">
                <div className="space-y-20">
                <div id="model-before" className="scroll-mt-40 text-center">
                    <div className="mx-auto flex h-32 flex-col items-center">
                    <div className="h-20 w-px bg-gradient-to-b from-slate-200 to-slate-300" />
                    <div className="h-4 w-4 rounded-full bg-[#99CC33]" />
                    <div className="h-8 w-px bg-gradient-to-b from-slate-300 to-transparent" />
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                    Before: underused space
                    </p>

                    <p className="mx-auto mt-4 max-w-2xl text-xl leading-9 text-slate-600">
                    The starting point is a site with real potential: suitable land,
                    access, and an existing school, university, or club community. TopTier
                    reviews whether that space can practically support padel, including
                    layout, access, likely use, and operational fit.
                    </p>
                </div>

                <div id="model-during" className="scroll-mt-40 text-center">
                    <div className="mx-auto flex h-32 flex-col items-center">
                    <div className="h-20 w-px bg-gradient-to-b from-slate-200 to-slate-300" />
                    <div className="h-4 w-4 rounded-full bg-slate-950" />
                    <div className="h-8 w-px bg-gradient-to-b from-slate-300 to-transparent" />
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                    During: TopTier delivery
                    </p>

                    <p className="mx-auto mt-4 max-w-2xl text-xl leading-9 text-slate-600">
                    TopTier then handles the work behind the project: funding, planning
                    coordination, court delivery, supplier management, booking setup,
                    access systems, and launch preparation. The host does not need to
                    become a specialist padel developer.
                    </p>
                </div>

                <div id="model-after" className="scroll-mt-40 text-center">
                    <div className="mx-auto flex h-32 flex-col items-center">
                    <div className="h-20 w-px bg-gradient-to-b from-slate-200 to-slate-300" />
                    <div className="h-4 w-4 rounded-full bg-[#99CC33]" />
                    <div className="h-8 w-px bg-gradient-to-b from-slate-300 to-transparent" />
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                    After: managed facility
                    </p>

                    <p className="mx-auto mt-4 max-w-2xl text-xl leading-9 text-slate-600">
                    Once open, TopTier manages bookings, maintenance, upkeep, systems, and
                    day-to-day operations. The host receives agreed access for its
                    community while the facility is professionally managed over time.
                    </p>
                </div>
                </div>
            </div>
            </Reveal>

            <Reveal delay={0.22}>
            <div className="mx-auto mt-24 max-w-4xl text-center">
                <div className="mx-auto h-px w-32 bg-slate-200" />

                <p className="mx-auto mt-8 max-w-3xl text-2xl font-black leading-10 tracking-tight text-slate-950 md:text-3xl">
                The model is simple: the host provides the place, and TopTier makes the
                facility work.
                </p>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                A clear path from available space to a professionally managed padel facility.
                </p>
            </div>
            </Reveal>

        </Container>
      </section>
    </>
  );
}