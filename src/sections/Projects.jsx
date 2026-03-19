import projects from "../data/projects";

const imageModules = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
});

const getProjectImages = (project) => {
  const images = Array.isArray(project.images) ? project.images : [];

  if (!images.length) {
    return Array.from({ length: 3 }, (_, index) => ({
      src: null,
      alt: `${project.title} preview ${index + 1}`,
    }));
  }

  return images.slice(0, 3).map((image, index) => {
    const normalizedPath = `../assets/images/${image}`;

    return {
      src: imageModules[normalizedPath] ?? image,
      alt: `${project.title} preview ${index + 1}`,
    };
  });
};

const renderLink = (href, label, variant) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 ease-in-out";

  const styles = {
    primary:
      "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-slate-950 shadow-[0_18px_55px_-18px_rgba(168,85,247,0.8)] hover:-translate-y-1 hover:scale-[1.02]",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:shadow-[0_18px_45px_-20px_rgba(34,211,238,0.45)]",
    disabled:
      "cursor-not-allowed border border-white/10 bg-white/[0.03] text-gray-500",
  };

  if (!href) {
    return (
      <span className={`${baseClasses} ${styles.disabled}`} aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClasses} ${styles[variant]}`}
    >
      {label}
    </a>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.1),_transparent_28%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-gray-500">
            Selected Work
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Luxury-grade interfaces backed by robust engineering.
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
            A premium collection of projects focused on product clarity, visual polish, and thoughtful user experiences across every screen size.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, projectIndex) => {
            const projectImages = getProjectImages(project);

            return (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_90px_-40px_rgba(0,0,0,0.95)] backdrop-blur-xl transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-[1.01] hover:border-white/20 hover:shadow-[0_40px_120px_-45px_rgba(168,85,247,0.55)] sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 transition duration-300 ease-in-out group-hover:opacity-100" />
                <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl transition duration-300 ease-in-out group-hover:bg-fuchsia-500/20" />

                <div className="relative flex h-full flex-col gap-7">
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.34em] text-gray-500">
                        Project {projectIndex + 1}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      {project.tech}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {projectImages.map((image, imageIndex) => (
                      <div
                        key={`${project.title}-${imageIndex}`}
                        className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_15px_40px_-24px_rgba(0,0,0,0.9)] transition duration-300 ease-in-out group-hover:-translate-y-1"
                      >
                        {image.src ? (
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-[1.08]"
                          />
                        ) : (
                          <div className="flex h-full items-end justify-between bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_40%)] p-4">
                            <span className="text-[11px] uppercase tracking-[0.34em] text-gray-400">
                              Preview {imageIndex + 1}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                              Coming Soon
                            </span>
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5 opacity-80" />
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 text-sm leading-7 text-gray-300 sm:text-base">
                    {project.description.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                    {renderLink(project.live, "Live Demo", "primary")}
                    {renderLink(project.github, "GitHub", "secondary")}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
