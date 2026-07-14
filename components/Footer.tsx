import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-slate-950">TopTier Padel</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              Turnkey padel facilities for schools, universities, and educational
              institutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-950">Pages</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/schools">Schools & Universities</Link>
              <Link href="/model">Our Model</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-950">Contact</h4>
            <p className="mt-4 text-sm text-slate-600">
              info@top-tierpadel.com
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Top-Tier Padel. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}