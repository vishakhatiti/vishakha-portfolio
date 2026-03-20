import images from "../data/images";

const certificateItems = [
  ...images.certificates,
  ...images.avishkar.map((image, index) => ({
    title: `Avishkar Zonal ${2024 + index}`,
    image,
  })),
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-purple-300">
            Certifications
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Learning milestones and recognitions that support my technical growth.
          </h2>
          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            A curated showcase of certifications and achievements that reflect
            continuous learning, participation, and hands-on engagement with the
            broader tech ecosystem.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificateItems.map((certificate) => (
            <div
              key={`${certificate.title}-${certificate.image}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-4 shadow-xl shadow-black/20 transition-all duration-300 hover:border-white/20"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-52 w-full rounded-xl object-cover"
              />
              <p className="mt-4 text-sm font-medium leading-6 text-gray-200">
                {certificate.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
