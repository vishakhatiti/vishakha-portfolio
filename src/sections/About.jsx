import siteConfig from "../data/siteConfig";

const About = () => {
  const { summary, title } = siteConfig;

  return (
    <section id="about" className="relative overflow-hidden bg-[#111214] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_30%)]" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-5 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-gray-500">
              About
            </p>
            <h2 className="max-w-lg text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
              Professional, practical, and focused on building work that lasts.
            </h2>
            <p className="max-w-lg text-lg leading-8 text-gray-400">
              A concise introduction that keeps the content readable, structured, and easy to scan.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-left shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10 lg:p-12">
            <p className="text-2xl font-semibold text-gray-200 md:text-3xl">{title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              {summary}
            </p>
            <p className="mt-6 max-w-2xl border-t border-white/10 pt-6 text-lg leading-8 text-gray-400">
              I approach product development with equal attention to engineering reliability,
              visual clarity, and user experience—delivering interfaces that feel polished,
              trustworthy, and recruiter-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
