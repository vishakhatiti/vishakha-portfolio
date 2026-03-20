import images from "../data/images";

const projects = [
  {
    title: "Bodhayu",
    tech: ["React", "Tailwind CSS", "UI Design"],
    description: [
      "Designed a wellness-focused interface with a calm visual hierarchy and accessible layouts.",
      "Built responsive sections that adapt smoothly across mobile, tablet, and desktop screens.",
      "Emphasized trust, readability, and a premium presentation for a professional audience.",
    ],
    image: images.projects.bodhayu[0],
  },
  {
    title: "Employee Management System",
    tech: ["React", "JavaScript", "Dashboard UI"],
    description: [
      "Created an organized dashboard experience for handling employee workflows and information.",
      "Structured the interface for quick scanning with clear cards, sections, and content grouping.",
      "Focused on usability and maintainability to support practical day-to-day interactions.",
    ],
    image: images.projects.employee[0],
  },
  {
    title: "Airbnb Clone",
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    description: [
      "Recreated a polished booking-style browsing experience with strong visual consistency.",
      "Applied responsive layout techniques to preserve clarity and spacing across breakpoints.",
      "Prioritized sleek card design, image presentation, and intuitive content flow.",
    ],
    image: images.projects.airbnb[0],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-purple-300">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Selected work that reflects strong execution and design awareness.
          </h2>
          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            These projects highlight my ability to combine structure,
            responsiveness, and thoughtful user experience into clean,
            recruiter-friendly case studies.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-xl shadow-black/20 transition-all duration-300 hover:border-white/20"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-400">
                  {project.description.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
