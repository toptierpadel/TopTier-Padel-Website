import { Container } from "@/components/Container";

export default function SportsClubsPage() {
  return (
    <section className="bg-white py-24">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Sports Clubs
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">
          Bring padel to your club without taking on the development burden.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          TopTier Padel partners with sports clubs to fund, develop, manage,
          and maintain premium padel facilities. Clubs provide suitable land,
          receive priority access for members, and can share in long-term
          revenue with no capital investment required from the host.
        </p>
      </Container>
    </section>
  );
}