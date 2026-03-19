import projects from '../data/projects';

const imageModules = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
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
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300';

  const styles = {
    primary:
      'bg-white text-black shadow-lg shadow-white/10 hover:-translate-y-0.5 hover:bg-gray-200',
    secondary:
      'border border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10',
    disabled:
      'cursor-not-allowed border border-white/10 bg-white/5 text-gray-500',
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
    <section id="projects" className="bg-black px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projects that blend clean code with thoughtful product design.
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
            A curated collection of projects focused on performance, usability, and polished visual detail.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, projectIndex) => {
            const projectImages = getProjectImages(project);

            return (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_-30px_rgba(255,255,255,0.15)] transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_100px_-35px_rgba(255,255,255,0.25)] sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                        Project {projectIndex + 1}
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
                      {project.tech}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {projectImages.map((image, imageIndex) => (
                      <div
                        key={`${project.title}-${imageIndex}`}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"
                      >
                        {image.src ? (
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full items-end justify-between bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_45%)] p-4">
                            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                              Preview {imageIndex + 1}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-700">
                              Coming Soon
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 text-sm leading-7 text-gray-300 sm:text-base">
                    {project.description.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                    {renderLink(project.live, 'Live Demo', 'primary')}
                    {renderLink(project.github, 'GitHub', 'secondary')}
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
