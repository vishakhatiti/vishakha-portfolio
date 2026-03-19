import profileImg from "../assets/images/profile.png";
import siteConfig from "../data/siteConfig";

const actionLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    style:
      "border border-white/15 bg-white/[0.04] text-white shadow-xl shadow-black/20 hover:-translate-y-2 hover:scale-105 hover:border-fuchsia-400/40 hover:bg-white/[0.08]",
  },
  {
    label: "Contact",
    href: "#contact",
    style:
      "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-slate-950 shadow-2xl shadow-violet-500/20 hover:-translate-y-2 hover:scale-105",
  },
];

const Hero = () => {
  const { name, title, summary } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(34,211,238,0.14),_transparent_24%),radial-gradient(circle_at_50%_100%,_rgba(236,72,153,0.12),_transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:gap-10">
        <div className="relative text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-gray-300 shadow-xl shadow-black/20 backdrop-blur-xl sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
            Premium Developer Portfolio
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {name.split(" ")[0]}
            <span className="mt-3 block bg-gradient-to-r from-violet-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              {name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
            <p className="text-lg font-medium uppercase tracking-[0.35em] text-gray-400">
              {title || "Full-Stack Developer"}
            </p>
            <p className="max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              Full-stack developer crafting clean, recruiter-ready digital products with a
              focus on reliability, clarity, and refined user experience.
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
                className={`inline-flex min-w-[158px] items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${style}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-80 w-80 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/15 to-cyan-400/20 blur-3xl" />
          <div className="group relative rounded-full border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-violet-500/10 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-80" />
            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border border-white/10 bg-[#0b0b0f] shadow-2xl shadow-black/40 sm:h-[340px] sm:w-[340px]">
              <img
                src={profileImg}
                alt={name}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
