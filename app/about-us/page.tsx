import { Container } from "@/components/Container";

export default function AboutUsPage() {
  return (
    <section className="bg-white py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#99CC33]">
          About Us
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
          Building padel facilities across the UK.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          TopTier Padel partners with schools, universities, and sports clubs to
          fund, develop, manage, and maintain premium padel facilities.
        </p>
      </Container>
    </section>
  );
}