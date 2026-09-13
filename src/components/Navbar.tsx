import { useState } from "react";
import logoText from "../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12M6 18L18 6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <img
            src={logoText}
            alt="Dev Stack logo navbar"
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-(--brand-nav-hover) transition hover:text-gray-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-600 transition hover:text-(--brand-nav-hover)"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-(--brand-nav-hover)"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-(--brand-nav-hover)"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-(--brand-nav-hover)"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm font-semibold text-gray-700 hover:text-(--brand-nav-hover)">
            Sign In
          </button>

          <button
            className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5"
            style={{ background: "var(--brand-pink-col)" }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#DB2777]"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;