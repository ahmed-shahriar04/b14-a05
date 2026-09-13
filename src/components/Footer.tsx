import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="hidden gap-6 text-left md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-16">

          <div className="lg:col-span-1">
            <a href="#home" className="inline-block">
              <img
                src={logoText}
                alt="Dev Stack logo footer"
                className="h-8 w-auto object-contain"
              />
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex items-center gap-5">
              <a
                href="#"
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <div className="mt-3 space-y-2">
              <a
                href="#home"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <div className="mt-3 space-y-2">
              <a
                href="#about"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <div className="mt-3 space-y-2">
              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-sm text-slate-500 transition hover:text-slate-900"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center md:hidden">
          <a href="#home" className="inline-block">
            <img
              src={logoText}
              alt="Dev Stack Logo"
              className="mx-auto h-8 w-auto object-contain"
            />
          </a>

          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-4 flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              GitHub
            </a>

            <span className="text-slate-300">•</span>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Twitter
            </a>

            <span className="text-slate-300">•</span>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-slate-400 transition hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
