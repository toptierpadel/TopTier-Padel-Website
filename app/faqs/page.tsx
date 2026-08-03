import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "FAQs | TopTier Padel",
  description:
    "Answers to common questions about padel, TopTier Padel's model, host sites, access, operations, and partnerships.",
};

const questions = [
  {
    question: "What is padel?",
    answer:
      "Padel is a racket sport usually played in doubles on a compact enclosed court. It combines elements of tennis and squash: players hit over a net, but the glass walls are part of the game, helping rallies last longer and making the sport easier to enjoy quickly.",
  },
  {
    question: "Why is padel growing so quickly?",
    answer:
      "Because the first game is fun. Padel is easy to start, social by design, and still competitive as players improve. Beginners can get rallies going quickly, while stronger players have room for speed, tactics, and teamwork.",
  },
  {
    question: "What makes padel different from tennis?",
    answer:
      "The court is smaller, the walls are part of play, the serve is underarm, and the game is usually doubles. That makes padel feel more compact, social, and accessible while still rewarding skill as players improve.",
  },
  {
    question: "Why does the smaller court matter?",
    answer:
      "The compact footprint is one of padel’s biggest advantages. It creates a lively playing environment and allows host sites to turn underused land into a visible, high-use sports facility without needing the same space as larger traditional sports.",
  },
  {
    question: "Why is doubles so important?",
    answer:
      "Doubles changes the whole feel of the sport. Four players share the court, which makes the game more social, more forgiving for beginners, and better suited to schools, universities, clubs, families, and mixed-ability groups.",
  },
  {
    question: "Is padel only for experienced racket-sport players?",
    answer:
      "No. That is part of the appeal. New players can enjoy padel quickly because the court is smaller, the serve is easier, and the walls keep rallies alive. As players improve, the game becomes faster, more tactical, and more competitive.",
  },
  {
    question: "Why does padel work for schools, universities, and sports clubs?",
    answer:
      "Padel works best where people already gather. Schools, universities, and sports clubs already have communities, sporting culture, and often suitable space. Padel gives those sites a modern, accessible sport that can support regular use.",
  },
  {
    question: "What does TopTier Padel actually do?",
    answer:
      "TopTier Padel funds, develops, manages, and maintains padel facilities for suitable host sites. The host provides the space and local context; TopTier handles the work required to turn that space into a professionally run facility.",
  },
  {
    question: "Is there any capital investment required from the host?",
    answer:
      "No. The model is designed so the host does not need to fund the development of the facility. TopTier covers the core investment and takes responsibility for delivering and managing the project.",
  },
  {
    question: "What does the host need to provide?",
    answer:
      "The host usually provides suitable land or underused space, along with practical input around access, existing site use, and how the facility should fit into the school, university, or club environment.",
  },
  {
    question: "Who manages the facility once it is open?",
    answer:
      "TopTier manages the facility after launch. That includes bookings, access systems, maintenance, upkeep, operational oversight, and the day-to-day work needed to keep the courts running properly.",
  },
  {
    question: "Does the host get priority access?",
    answer:
      "Yes. Host access is agreed as part of the partnership. For a school or university, that might mean priority use for students, staff, PE, enrichment, societies, or campus sport. For a sports club, that might mean member-priority sessions, club events, coaching, or preferential access.",
  },
  {
    question: "Can the facility be used by the wider community?",
    answer:
      "Where appropriate, yes. Outside agreed host-priority windows, the facility can be made available to approved external users through a managed booking system. The exact structure depends on the site, access arrangements, safeguarding requirements, and the host’s preferences.",
  },
  {
    question: "How does this work for schools?",
    answer:
      "For schools, the model is built around student access, safeguarding, and the school day. The facility can support PE, games sessions, after-school clubs, staff use, holiday programmes, and carefully managed community access outside designated school use.",
  },
  {
    question: "How does this work for universities?",
    answer:
      "For universities, padel can support recreational sport, societies, student wellbeing, staff use, coaching, leagues, and social play. The facility can become part of campus life without requiring the university to build a separate padel operation internally.",
  },
  {
    question: "How does this work for sports clubs?",
    answer:
      "For sports clubs, padel can strengthen the member offer, bring more activity to the site, support coaching and events, and make better use of underused land. The model can be structured around member-priority access while still allowing managed external bookings where appropriate.",
  },
  {
    question: "Who handles planning, construction, and suppliers?",
    answer:
      "TopTier coordinates the development process. That can include feasibility review, design, planning coordination, court delivery, supplier management, booking setup, access systems, and launch preparation.",
  },
  {
    question: "What kind of space is suitable?",
    answer:
      "A suitable site could be underused land, hardstanding, part of an existing sports area, or another space with practical access and enough room for a padel facility. Every site is different, so the first step is reviewing whether the space can work safely and practically.",
  },
  {
    question: "How do we find out whether our site could work?",
    answer:
      "The process starts with a site review. Share the basics of your school, university, or sports club site, and TopTier can assess whether the space, access, likely use, and partnership structure could make sense.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-28 pt-48">
        {/* clean atmospheric background */}
        <div className="absolute left-[-12rem] top-[-8rem] h-[44rem] w-[44rem] rounded-full bg-[#99CC33]/16 blur-3xl" />

        <div className="absolute right-[-14rem] top-[20rem] h-[46rem] w-[46rem] rounded-full bg-[#0077C8]/12 blur-3xl" />

        <div className="absolute left-1/2 top-[38rem] h-[22rem] w-[72rem] -translate-x-1/2 rotate-[5deg] rounded-full bg-[#99CC33]/6 blur-3xl" />

        {/* restrained question-line detail */}
        <div className="absolute left-[12%] top-36 hidden h-px w-[34%] bg-gradient-to-r from-transparent via-slate-200 to-slate-200 md:block" />
        <div className="absolute right-[10%] top-[30rem] hidden h-px w-[38%] bg-gradient-to-l from-transparent via-slate-200 to-slate-200 md:block" />
        <div className="absolute left-1/2 top-[42rem] hidden h-px w-[58%] -translate-x-1/2 rotate-[2deg] bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block" />
        

        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                FAQs
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
                You've got questions. We have answers.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                Questions about the sport, the model, host access, operations,
                and what it takes to bring a TopTier Padel facility to your
                site.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto mt-24 max-w-5xl">
              <div className="border-y border-slate-200">
                {questions.map((item, index) => (
                  <details
                    key={item.question}
                    className="group border-b border-slate-200 last:border-b-0"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-8">
                      <div className="grid gap-5 md:grid-cols-[5rem_1fr]">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                          {item.question}
                        </h2>
                      </div>

                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-2xl leading-none text-slate-500 transition group-open:rotate-45 group-open:border-slate-950 group-open:bg-slate-950 group-open:text-white">
                        +
                      </span>
                    </summary>

                    <div className="grid pb-9 md:grid-cols-[5rem_1fr]">
                      <div />
                      <p className="max-w-3xl text-xl leading-9 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mx-auto mt-24 max-w-3xl text-center">
              <div className="mx-auto h-px w-40 bg-slate-200" />

              <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
                Missing anything?
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-xl leading-8 text-slate-600">
                For questions not covered here, contact us at{" "}
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
    </>
  );
}