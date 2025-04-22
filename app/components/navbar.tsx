// components/navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export function NavbarDemo() {
  const navItems = [
    { name: "Hlavní Stránka", link: "/" },
    { name: "Práce",         link: "/prace" },
    { name: "O Mně",         link: "/o-mne" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop */}
        <NavBody>
          <NavbarLogo />
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-neutral-600 hover:text-neutral-900 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/* Tlačítko Kontakt jako Next.js Link */}
            <NavbarButton
              as={Link}
              href="/contact"
              variant="primary"
            >
              Kontakt
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-600 dark:text-neutral-300"
                >
                  {item.name}
                </Link>
              ))}
              <NavbarButton
                as={Link}
                href="/contact"
                variant="primary"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
