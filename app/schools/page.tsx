import { Container } from "@/components/Container";

export default function SchoolsPage() {
  return (
    <section className="bg-white py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Schools & Universities
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
          Padel facilities for educational institutions.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          This page will explain why padel works for schools and universities,
          including student participation, community use, operations, and
          facility value.
        </p>
      </Container>
    </section>
  );
}