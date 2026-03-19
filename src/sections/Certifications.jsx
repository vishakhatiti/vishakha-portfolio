import certificates from "../data/certificates";

const imageModules = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
});

const resolveCertificateImage = (image) => {
  if (!image) {
    return null;
  }

  const normalizedPath = `../assets/images/${image}`;
  return imageModules[normalizedPath] ?? image;
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-gradient-to-b from-[#13141a] to-[#11131a] px-6 py-20 text-white lg:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.08),_transparent_28%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-gray-500">
            Certifications
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Credentials presented in a clean and easily expandable layout.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Designed for straightforward manual image additions while maintaining a premium,
            structured, and professional visual standard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => {
            const imageSrc = resolveCertificateImage(certificate.image);

            return (
              <article
                key={certificate.title}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/35 backdrop-blur-xl sm:p-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-lg shadow-black/35">
                  {imageSrc ? (
                    <img src={imageSrc} alt={certificate.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-5 text-left">
                      <span className="text-[11px] uppercase tracking-[0.34em] text-gray-500">
                        Certificate {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-gray-300">Image placeholder</p>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          Add a certificate image in <span className="text-gray-400">src/assets/images</span>
                          and reference it in the data file when ready.
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/5" />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">
                  {certificate.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
