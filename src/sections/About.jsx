import siteConfig from "../data/siteConfig";

const About = () => {
  const { summary, title } = siteConfig;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111214] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_30%)]" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="space-y-5 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-gray-500">
            About
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Professional, practical, and focused on building work that lasts.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-white/15 sm:p-10">
          <p className="text-xl font-medium text-gray-200">{title}</p>
          <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
            {summary}
          </p>
          <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-7 text-gray-500">
            I approach product development with equal attention to engineering reliability,
            visual clarity, and user experience—delivering interfaces that feel polished,
            trustworthy, and recruiter-ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
