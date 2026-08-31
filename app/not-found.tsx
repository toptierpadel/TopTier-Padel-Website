import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-white pb-24 pt-48">
      {/* soft atmosphere */}
      <div className="absolute left-[-10rem] top-[-8rem] h-[40rem] w-[40rem] rounded-full bg-[#99CC33]/12 blur-3xl" />
      <div className="absolute right-[-10rem] top-12 h-[42rem] w-[42rem] rounded-full bg-[#0077C8]/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
            404 — Page Not Found
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            We couldn't find that page.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            The link you followed may be broken or the page may have been moved.
            Explore one of our main sections below:
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Return Home
            </Link>
            <Link
              href="/schools/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Schools & Universities
            </Link>
            <Link
              href="/sports-clubs/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Sports Clubs
            </Link>
            <Link
              href="/model/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Our Model
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
