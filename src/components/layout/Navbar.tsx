"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme/theme-toggle";
import LiquidGlass from "@/components/ui/liquid-glass";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/#aboutMe" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("/#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔍 Scroll spy
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;

      navItems.forEach((item) => {
        const id = item.href.replace("/#", "#");
        const el = document.querySelector(id);
        if (!el) return;

        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.clientHeight;

        if (y >= top && y < bottom) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-5 z-50 flex justify-center">
      <div className="relative">
        <LiquidGlass className="inline-flex items-center gap-4 px-6 h-18 rounded-full">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setActive("/#home")}
            className="flex items-center gap-2"
          >
            <Image
              src="/assets/logos/logo.svg"
              alt="Alessa Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg">Alessa</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`
                  px-4 py-2 rounded-full text-sm transition-all
                  ${
                    active === item.href
                      ? "bg-blue-500/60 text-blue-600 dark:text-gray-200 shadow-md"
                      : "text-gray-800 dark:text-gray-200 hover:bg-white/20"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/20 transition"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <ThemeToggle />
        </LiquidGlass>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-20 w-full px-6 md:hidden">
            <div className="rounded-3xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-xl p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setMobileOpen(false);
                  }}
                  className={`
                    block px-4 py-3 rounded-xl text-sm transition
                    ${
                      active === item.href
                        ? "bg-blue-500 text-white"
                        : "text-gray-800 dark:text-gray-200 hover:bg-white/20"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
