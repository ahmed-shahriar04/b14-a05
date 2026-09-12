function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>


        <a href="#home" className="flex items-center gap-2">
          <img
            src="/src/assets/logo-text.png"
            alt="Dev Stack"
            className="h-8 w-auto object-contain"
          />
        </a>


        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-[#DB2777] transition hover:text-orange-500"
          >
            Home
          </a>
          <a
            href="#technologies"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>


        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">
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
    </header>
  );
}

export default Navbar;
