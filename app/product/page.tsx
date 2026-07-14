import { Container } from "@/components/Container";

export default function PartnersPage() {
  return (
    <section className="bg-white py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Partners
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
          Built with the right execution partners.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          This page will explain the partner ecosystem across court
          construction, booking systems, access control, operations, and
          maintenance.
        </p>
      </Container>
    </section>
  );
}