import images from "../data/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#0a0a0a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-gray-300">
              Recruiter-ready portfolio
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building refined digital products with a focus on clarity,
              performance, and real-world impact.
            </h1>

            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vishakha Mane
              </span>
            </h2>

            <p className="mt-4 text-xl text-gray-200 sm:text-2xl">
              Full-Stack Developer · Frontend-Focused Problem Solver
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:mx-0 md:text-lg">
              I create polished, responsive web experiences that balance clean
              design with practical engineering. My work centers on building
              intuitive interfaces, scalable project structures, and products
              that feel dependable from first impression to final interaction.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[160px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10"
              >
                Contact
              </a>
            </div>

            <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
              {[
                { label: "Core Focus", value: "React, UI systems, modern web apps" },
                { label: "Approach", value: "Clean architecture and thoughtful UX" },
                { label: "Goal", value: "Deliver production-ready experiences" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-gray-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-x-10 top-10 h-72 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
              <img
                src={images.profile}
                alt="Portrait of Vishakha Mane"
                className="h-[420px] w-full rounded-[1.5rem] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
