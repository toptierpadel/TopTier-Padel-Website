import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact TopTier Padel — Discuss Your Site",
  description:
    "Have land, a disused court or a sports strategy that needs a new option? Tell us about your site and we will assess whether padel works there.",
  alternates: {
    canonical: "/contact/",
  },
};

const reasons = [
  "You have available land or underused space",
  "You want to better understand the TopTier partnership model",
  "You represent a school, university, or sports club",
  "You have questions about access, operations, or maintenance",
  "You want to discuss whether padel could work at your site",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-28 pt-48">
        {/* subtle background atmosphere */}
        <div className="absolute left-[-12rem] top-[-10rem] h-[44rem] w-[44rem] rounded-full bg-[#99CC33]/14 blur-3xl" />
        <div className="absolute right-[-14rem] top-12 h-[46rem] w-[46rem] rounded-full bg-[#0077C8]/10 blur-3xl" />

        {/* quiet line detail */}
        <div className="absolute left-1/2 top-32 hidden h-px w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block" />

        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Contact
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                Start the conversation.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                Whether you are exploring a potential site, asking about the
                model, or want to understand how TopTier Padel could work with
                your institution, we would be happy to hear from you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto mt-20 grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Get in touch if
                </p>

                <div className="mt-6 border-y border-slate-200">
                  {reasons.map((reason) => (
                    <div
                      key={reason}
                      className="flex gap-4 border-b border-slate-200 py-5 last:border-b-0"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#99CC33]" />
                      <p className="text-lg leading-8 text-slate-600">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                  Email
                </p>

                <a
                  href="mailto:info@top-tierpadel.com"
                  className="mt-4 block text-3xl font-black tracking-tight text-slate-950 underline decoration-slate-300 underline-offset-8 transition hover:text-[#0077C8] hover:decoration-[#0077C8] md:text-4xl"
                >
                  info@top-tierpadel.com
                </a>

                <p className="mt-7 text-lg leading-8 text-slate-600">
                  For the most useful first conversation, include the name of your institution
                  or club, the location, the type of site, and any initial details about
                  available space or partnership interest.
                </p>

                <div className="mt-8 flex flex-col gap-3 xl:flex-row xl:items-center">
                  <Link
                    href="mailto:info@top-tierpadel.com"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Email TopTier Padel
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/toptier-padel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#0077C8] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005A8D]"
                  >
                    Follow our progress on LinkedIn
                  </Link>
                </div>
              </div>

            </div>
          </Reveal>

        </Container>
      </section>
    </>
  );
}