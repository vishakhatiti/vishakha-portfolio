import siteConfig from "../data/siteConfig";

const Contact = () => {
  const { social } = siteConfig;

  const links = [
    { label: "GitHub", href: social.github },
    { label: "LinkedIn", href: social.linkedin },
  ].filter((item) => item.href);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0e11] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-12 text-center shadow-2xl shadow-black/35 backdrop-blur-xl sm:px-10 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-gray-500">
          Contact
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          Open to meaningful opportunities and professional collaborations.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-xl">
          If you are hiring for full-stack development, internships, or collaborative product
          work, I would be glad to connect and discuss how I can contribute.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-cyan-400/35 hover:bg-white/[0.08]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
