"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

const partnerItems = [
  { label: "Schools & Universities", href: "/schools" },
  { label: "Sports Clubs", href: "/sports-clubs" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";

  const lightBackgroundPages = [
    "/model",
    "/schools",
    "/sports-clubs",
    "/faqs",
    "/about-us",
    "/contact",
  ];

  const isLightBackgroundPage = lightBackgroundPages.includes(normalizedPathname);

  const navTextClass = isLightBackgroundPage
    ? "text-slate-950 hover:text-[#0077C8]"
    : "text-white/90 hover:text-white";

  const contactClass = isLightBackgroundPage
    ? "bg-slate-950 text-white hover:bg-slate-800"
    : "bg-white text-slate-950 hover:bg-slate-100";

  const dropdownClass = isLightBackgroundPage
    ? "border-slate-200 bg-white text-slate-950 shadow-2xl"
    : "border-white/15 bg-slate-950/65 text-white shadow-2xl backdrop-blur-xl";

  const dropdownItemClass = isLightBackgroundPage
    ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
    : "text-white/85 hover:bg-white/10 hover:text-white";

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="flex h-36 items-center justify-between">
          <Link href="/" className="flex items-center pt-6">
            <Image
              src={
                isLightBackgroundPage
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
              href="/faqs"
              className={`text-lg font-semibold transition ${navTextClass}`}
            >
              FAQs
            </Link>

            <Link
              href="/about-us"
              className={`text-lg font-semibold transition ${navTextClass}`}
            >
              About Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${contactClass}`}
            >
              Contact
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`block md:hidden p-2 rounded-lg transition ${
                isLightBackgroundPage
                  ? "text-slate-950 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className={`fixed inset-x-0 top-[9rem] bottom-0 z-40 flex flex-col p-6 md:hidden transition-all duration-350 ${
              isLightBackgroundPage
                ? "bg-white text-slate-950 border-t border-slate-100"
                : "bg-slate-950 text-white border-t border-white/10"
            }`}
          >
            <div className="flex flex-col gap-6 pt-8">
              <Link
                href="/model"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold transition hover:text-[#0077C8]"
              >
                Our Model
              </Link>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Partner With Us
                </p>
                {partnerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="pl-4 text-xl font-semibold transition hover:text-[#0077C8]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/faqs"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold transition hover:text-[#0077C8]"
              >
                FAQs
              </Link>

              <Link
                href="/about-us"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold transition hover:text-[#0077C8]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`mt-6 inline-flex items-center justify-center rounded-full py-4 text-lg font-bold transition ${contactClass}`}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}