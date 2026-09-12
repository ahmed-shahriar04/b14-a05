function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-row justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#technologies"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-52"
              style={{ background: "var(--brand-gradient)" }}
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 text-sm font-bold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 sm:w-52"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-10 -z-10 rounded-full bg-orange-100/50 blur-3xl" />

          <img
            src="/src/assets/banner-stack.png"
            alt="Developer workspace"
            className="w-full max-w-3xl object-contain lg:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
