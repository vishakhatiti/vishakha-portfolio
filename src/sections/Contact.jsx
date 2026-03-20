const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-transparent p-8 text-center shadow-2xl shadow-black/30 md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-purple-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let&apos;s build something thoughtful and high-impact.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I&apos;m open to internships, full-time opportunities, and meaningful
            collaborations where strong product thinking and clean frontend
            execution are valued. If my work aligns with your team&apos;s goals,
            I&apos;d love to connect.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
