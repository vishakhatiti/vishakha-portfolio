const About = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 shadow-2xl shadow-black/30 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-purple-300">
                About
              </p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Professional summary built around consistency and quality.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-gray-400 md:text-lg">
              <p>
                I am a developer focused on creating modern digital experiences
                that are visually clean, technically solid, and easy to use. I
                enjoy translating complex ideas into simple interfaces that feel
                premium without becoming distracting.
              </p>
              <p>
                My strengths include frontend development with React, responsive
                interface design, component-driven thinking, and structuring
                projects so they remain maintainable as they grow. I care deeply
                about readability, consistency, and delivering work that feels
                production-ready.
              </p>
              <p>
                Whether collaborating on new features, refining user journeys,
                or presenting technical work to stakeholders, I aim to bring a
                calm, detail-oriented approach that helps teams build products
                people can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
