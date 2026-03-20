import images from "../data/images";

const Hero = () => {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 min-h-screen">
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Developer Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Vishakha Mane
            </span>
          </h1>

          <h2 className="mt-5 text-xl md:text-2xl font-medium text-gray-200">
            Full-Stack Developer crafting polished, high-performance web experiences.
          </h2>

          <p className="mt-6 max-w-lg text-base md:text-lg leading-8 text-gray-400 md:mx-0 mx-auto">
            I design and build modern applications with clean interfaces, scalable architecture, and thoughtful user experiences that feel reliable and premium.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-gray-200"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:border-gray-400 hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-2xl" />
            <img
              src={images.profile}
              alt="Vishakha Mane"
              className="relative h-64 w-64 md:h-80 md:w-80 rounded-full object-cover shadow-2xl ring-1 ring-white/10 transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
