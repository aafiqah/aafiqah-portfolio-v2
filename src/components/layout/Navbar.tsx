"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme/theme-toggle";
import LiquidGlass from "@/components/ui/liquid-glass";
import logo from "@/assets/logos/logo.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#aboutMe" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.clientHeight;
        if (y >= top && y < bottom) setActive(item.href);
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-5 z-50 flex justify-center">
      <LiquidGlass className="inline-flex items-center gap-6 px-6 h-18 rounded-full">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <Image src={logo} alt="Alessa Logo" width={40} height={40} />
          <span className="font-bold text-lg">Alessa</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
        </div>

        <ThemeToggle />
      </LiquidGlass>
    </header>
  );
}
