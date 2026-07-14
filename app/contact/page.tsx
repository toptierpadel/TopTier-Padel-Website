import { Container } from "@/components/Container";

export default function ContactPage() {
  return (
    <section className="bg-white py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Contact
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
          Request a feasibility review.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Tell us about your institution, location, and available space.
        </p>

        <a
          href="mailto:info@top-tierpadel.com"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Email Top-Tier Padel
        </a>
      </Container>
    </section>
  );
}