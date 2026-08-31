import Link from "next/link";
import { Container } from "./Container";

const pages = [
  { label: "Our Model", href: "/model/" },
  { label: "Schools & Universities", href: "/schools/" },
  { label: "Sports Clubs", href: "/sports-clubs/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "About Us", href: "/about-us/" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-[1.2fr_0.7fr_0.9fr]">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">
              TopTier Padel
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
              Building the next generation of padel facilities for schools,
              universities, and sports clubs.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Pages
            </p>

            <nav className="mt-5 grid gap-3">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="text-sm font-medium text-white/65 transition hover:text-white"
                >
                  {page.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Contact
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:info@top-tierpadel.com"
                className="block text-sm font-medium text-white/65 transition hover:text-white"
              >
                info@top-tierpadel.com
              </a>

              <p className="max-w-xs text-sm leading-6 text-white/45">
                For site reviews, partnership enquiries, and general questions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TopTier Padel. All rights reserved.</p>

          <p>Fully funded padel facilities for UK host sites.</p>
        </div>
      </Container>
    </footer>
  );
}