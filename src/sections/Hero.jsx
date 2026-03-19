import profileImg from "../assets/images/profile.png";
import siteConfig from "../data/siteConfig";

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    variant: "primary",
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    variant: "secondary",
  },
];

const buttonStyles = {
  primary:
    "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10",
  secondary:
    "border border-gray-500 text-white hover:bg-gray-800/80",
};

const Hero = () => {
  const { name, title, summary } = siteConfig;

  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col-reverse items-center justify-center gap-12 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-gray-300 backdrop-blur">
            Welcome to my portfolio
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          <h2 className="mt-4 text-xl text-gray-300 sm:text-2xl lg:text-3xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg md:mx-0">
            {summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {socialLinks.map(({ label, href, variant }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex min-w-[140px] items-center justify-center rounded-xl px-6 py-3 font-medium transition duration-200 ${buttonStyles[variant]}`}
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex min-w-[140px] items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-6 py-3 font-medium text-purple-200 transition duration-200 hover:bg-purple-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-cyan-500/30 blur-3xl" />
            <img
              src={profileImg}
              alt={name}
              className="h-64 w-64 rounded-full border border-white/10 object-cover shadow-2xl shadow-purple-500/10 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
