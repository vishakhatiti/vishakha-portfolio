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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-300";

  const styles = {
    primary:
      "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-slate-950 shadow-xl shadow-violet-500/20",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white shadow-lg shadow-black/20 hover:border-cyan-400/40 hover:bg-white/[0.08]",
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
    <section id="projects" className="relative overflow-hidden bg-[#17191d] px-6 py-20 text-white lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.08),_transparent_28%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-gray-500">
            Projects
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Selected work presented with clarity, structure, and visual polish.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A refined project showcase designed to highlight problem solving, technical depth,
            and clean execution across responsive web experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, projectIndex) => {
            const projectImages = getProjectImages(project);

            return (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />
                <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="relative flex h-full flex-col gap-7">
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.34em] text-gray-500">
                        Project {projectIndex + 1}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-300 shadow-inner shadow-white/5">
                      {project.tech}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {projectImages.map((image, imageIndex) => (
                      <div
                        key={`${project.title}-${imageIndex}`}
                        className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-xl shadow-black/40"
                      >
                        {image.src ? (
                          <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.2),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_40%)] p-4">
                            <span className="text-[11px] uppercase tracking-[0.34em] text-gray-400">
                              Preview {imageIndex + 1}
                            </span>
                            <span className="text-xs text-gray-500">
                              Image slot ready for project screen
                            </span>
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/5" />
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                      Highlights
                    </p>

                    <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-300 sm:text-base">
                      {project.description.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.35)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
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
