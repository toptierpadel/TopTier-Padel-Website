import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const partnerItems = [
  { label: "Schools & Universities", href: "/schools" },
  { label: "Sports Clubs", href: "/sports-clubs" },
];

const navItems = [
  { label: "Why Padel", href: "/padel" },
  { label: "Our Model", href: "/model" },
  { label: "Product", href: "/product" },
  { label: "About Us", href: "/about-us" },
];

export function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="flex h-36 items-center justify-between">
          <Link href="/" className="flex items-center pt-6">
            <Image
              src="/images/toptier-logo-white.png"
              alt="TopTier Padel"
              width={140}
              height={90}
              priority
              className="h-32 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link
              href="/padel"
              className="text-lg font-semibold text-white/90 transition hover:text-white"
            >
              Why Padel
            </Link>

            <Link
              href="/model"
              className="text-lg font-semibold text-white/90 transition hover:text-white"
            >
              Our Model
            </Link>

            <div className="group relative">
              <button className="flex items-center gap-2 text-lg font-semibold text-white/90 transition hover:text-white">
                Partner With Us
                <span className="text-sm leading-none">▾</span>
              </button>

              <div className="invisible absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-white/15 bg-slate-950/65 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {partnerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/product"
              className="text-lg font-semibold text-white/90 transition hover:text-white"
            >
              Product
            </Link>

            <Link
              href="/about-us"
              className="text-lg font-semibold text-white/90 transition hover:text-white"
            >
              About Us
            </Link>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}