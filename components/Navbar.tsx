"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";

const partnerItems = [
  { label: "Schools & Universities", href: "/schools" },
  { label: "Sports Clubs", href: "/sports-clubs" },
];

export function Navbar() {
  const pathname = usePathname();

  const isLightPage = pathname === "/padel";

  const navTextClass = isLightPage
    ? "text-slate-950 hover:text-[#0077C8]"
    : "text-white/90 hover:text-white";

  const contactClass = isLightPage
    ? "bg-slate-950 text-white hover:bg-slate-800"
    : "bg-white text-slate-950 hover:bg-slate-100";

  const dropdownClass = isLightPage
    ? "border-slate-200 bg-white text-slate-950 shadow-2xl"
    : "border-white/15 bg-slate-950/65 text-white shadow-2xl backdrop-blur-xl";

  const dropdownItemClass = isLightPage
    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
    : "text-white/85 hover:bg-white/10 hover:text-white";

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="flex h-36 items-center justify-between">
          <Link href="/" className="flex items-center pt-6">
            <Image
              src={
                isLightPage
                  ? "/images/toptier-logo-black.png"
                  : "/images/toptier-logo-white.png"
              }
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
              className={`text-lg font-semibold transition ${navTextClass}`}
            >
              Why Padel
            </Link>

            <Link
              href="/model"
              className={`text-lg font-semibold transition ${navTextClass}`}
            >
              Our Model
            </Link>

            <div className="group relative">
              <button
                className={`flex items-center gap-2 text-lg font-semibold transition ${navTextClass}`}
              >
                Partner With Us
                <span className="text-sm leading-none">▾</span>
              </button>

              <div
                className={`invisible absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 translate-y-2 rounded-2xl border p-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${dropdownClass}`}
              >
                {partnerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition ${dropdownItemClass}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about-us"
              className={`text-lg font-semibold transition ${navTextClass}`}
            >
              About Us
            </Link>
          </div>

          <Link
            href="/contact"
            className={`rounded-full px-5 py-3 text-sm font-bold transition ${contactClass}`}
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}