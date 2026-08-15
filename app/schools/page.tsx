import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SchoolsFan } from "@/components/SchoolsFan";

export const metadata = {
  title: "Schools & Universities | TopTier Padel",
  description:
    "TopTier Padel helps schools and universities bring fully funded, professionally managed padel facilities to campus.",
};

export default function SchoolsPage() {
  return (
    <>
      {/* Campus Advantage */}
      <section className="relative overflow-hidden bg-white pb-28 pt-48">
        {/* subtle background atmosphere */}
        <div className="absolute left-[-10rem] top-[-8rem] h-[44rem] w-[44rem] rounded-full bg-[#0077C8]/10 blur-3xl" />
        <div className="absolute right-[-12rem] top-14 h-[46rem] w-[46rem] rounded-full bg-[#99CC33]/12 blur-3xl" />

        {/* quiet campus-grid motif */}
        <div className="absolute left-1/2 top-28 hidden h-[34rem] w-[58rem] -translate-x-1/2 rounded-[4rem] border border-slate-200/45 md:block" />

        <div className="absolute left-1/2 top-44 hidden h-px w-[48rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent md:block" />
        <div className="absolute left-1/2 top-64 hidden h-px w-[52rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/55 to-transparent md:block" />
        <div className="absolute left-1/2 top-84 hidden h-px w-[44rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/45 to-transparent md:block" />

        <div className="absolute left-[30%] top-32 hidden h-[32rem] w-px bg-gradient-to-b from-transparent via-slate-200/55 to-transparent md:block" />
        <div className="absolute left-1/2 top-28 hidden h-[34rem] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200/45 to-transparent md:block" />
        <div className="absolute right-[30%] top-32 hidden h-[32rem] w-px bg-gradient-to-b from-transparent via-slate-200/55 to-transparent md:block" />

        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Schools & Universities
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                Padel belongs on campus.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                Accessible for beginners, social by design, compact on site, and
                easy to structure around the school day — padel is unusually
                well suited to education environments.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <SchoolsFan />
          </Reveal>

          <Reveal delay={0.18}>
            <div className="relative mx-auto mt-24 max-w-4xl text-center">
              <div className="mx-auto h-px w-40 bg-slate-200" />

              <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Designed around the institution
              </p>

              <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Built around student access, not operational burden.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                For schools and universities, padel is valuable because it can support
                participation across a wide range of students and settings. It can fit
                into PE, games sessions, enrichment, societies, recreational sport, staff
                use, and social play, while giving the institution a modern facility that
                is accessible, compact, and easy for new players to enjoy. The goal is to
                create a facility that adds to campus life without disrupting the routines,
                priorities, or safeguarding needs already in place.
              </p>

              <div className="mx-auto my-12 flex max-w-xs items-center justify-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#99CC33]" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
              </div>

              <p className="mx-auto max-w-3xl text-xl leading-9 text-slate-600">
                TopTier Padel builds the model around the institution. Student-priority access,
                timetable windows, staff use, society bookings, community access, and
                safeguarding requirements can all be structured around how the site already
                operates. Toptier Padel handles the funding, development coordination, booking
                systems, access setup, maintenance, and long-term management, so the school
                or university can offer padel without needing to become a padel operator
                itself.
              </p>
            </div>
          </Reveal>

        <Reveal delay={0.22}>
          <div className="mx-auto mt-24 max-w-5xl text-center">
            <div className="mx-auto h-px w-40 bg-slate-200" />

            <p className="mx-auto mt-8 text-2xl font-black leading-10 tracking-tight text-slate-950 md:text-3xl">
              From available campus space to a facility students actually use.
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
              A clear path from underused school or university land to a professionally
              managed padel facility that supports participation, wellbeing, and wider
              campus activity.
            </p>

            <p className="mx-auto mt-8 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
              Interested in bringing padel to your campus?{" "}
              <a
                href="/contact"
                className="text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:text-[#0077C8] hover:decoration-[#0077C8]"
              >
                Get in touch
              </a>
              .
            </p>
          </div>
        </Reveal>

        </Container>
      </section>
    </>
  );
}