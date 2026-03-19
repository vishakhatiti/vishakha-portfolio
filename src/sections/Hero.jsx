import profileImg from "../assets/images/profile.png";
import siteConfig from "../data/siteConfig";

const actionLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    style:
      "border border-white/15 bg-white/[0.04] text-white hover:-translate-y-1 hover:rotate-[-1deg] hover:border-fuchsia-400/40 hover:bg-white/[0.08] hover:shadow-[0_18px_50px_-18px_rgba(244,114,182,0.45)]",
  },
  {
    label: "Contact",
    href: "#contact",
    style:
      "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-slate-950 shadow-[0_22px_60px_-20px_rgba(168,85,247,0.75)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_28px_70px_-18px_rgba(34,211,238,0.5)]",
  },
];

const Hero = () => {
  const { name, title, summary } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(34,211,238,0.14),_transparent_24%),radial-gradient(circle_at_50%_100%,_rgba(236,72,153,0.12),_transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:gap-10">
        <div className="relative text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-gray-300 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(255,255,255,0.35)] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
            Premium Developer Portfolio
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Building elegant,
            <span className="mt-3 block bg-gradient-to-r from-violet-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              modern digital experiences.
            </span>
          </h1>

          <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
            <p className="text-lg font-medium uppercase tracking-[0.35em] text-gray-400">
              {title || "Full-Stack Developer"}
            </p>
            <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              I&apos;m <span className="font-semibold text-white">{name}</span>, a full-stack developer crafting refined products with clean architecture, strong visual rhythm, and performance-first experiences.
            </p>
            <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              {summary}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {actionLinks.map(({ label, href, style }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={`inline-flex min-w-[158px] items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.18em] uppercase transition duration-300 ease-in-out ${style}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center [perspective:1400px] lg:justify-end">
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/15 to-cyan-400/20 blur-3xl sm:h-80 sm:w-80" />
          <div className="group relative w-full max-w-[380px] animate-[float_6s_ease-in-out_infinite] rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_40px_120px_-45px_rgba(168,85,247,0.7)] backdrop-blur-2xl transition duration-300 ease-in-out hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-80" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0b0f] transition duration-300 ease-in-out group-hover:rotate-[1.5deg] group-hover:scale-[1.01] [transform:rotateX(7deg)_rotateY(-9deg)] group-hover:[transform:rotateX(2deg)_rotateY(-4deg)]">
              <img
                src={profileImg}
                alt={name}
                className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
            </div>
            <div className="pointer-events-none absolute -bottom-6 left-6 right-6 h-16 rounded-full bg-cyan-400/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
