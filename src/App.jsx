const sectionClass = "rounded-xl border border-white/10 bg-[#111111] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105";

const summary =
  "Undergraduate Full-Stack Developer with hands-on experience building end-to-end web applications using Java, MySQL, and the MERN stack. Passionate about creating clean, responsive interfaces and dependable backend systems that solve practical user problems with clarity and professionalism.";

const education = [
  {
    degree: "BBA (Computer Applications)",
    school: "Savitribai Phule Pune University",
    year: "2023–2026",
    detail: "SGPA: 8.7",
  },
  {
    degree: "HSC (Commerce)",
    school: "Symbiosis Arts & Commerce College",
    year: "2023",
  },
  {
    degree: "SSC",
    school: "S. S. Keshrai Vidyalaya",
    year: "2021",
    detail: "79%",
  },
];

const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Core Java"] },
  { title: "Database", items: ["MySQL", "MongoDB"] },
  { title: "Tools", items: ["VS Code", "Eclipse", "Figma", "Postman"] },
  { title: "Other", items: ["REST APIs", "JWT", "OAuth2"] },
];

const projects = [
  {
    title: "Bodhayu – Awareness about Air Quality",
    tech: "MERN Stack",
    points: ["Real-time AQI & weather APIs", "Email + OTP alerts", "OAuth2 + JWT + bcrypt"],
    live: "https://bodhayu.vercel.app/",
    github: "https://bodhayu.vercel.app/",
  },
  {
    title: "Employee Tracker",
    tech: "Java, MySQL",
    points: ["Attendance tracking", "Salary calculation", "Role-based system"],
    live: "https://bodhayu.vercel.app/",
    github: "https://bodhayu.vercel.app/",
  },
  {
    title: "Airbnb Clone",
    tech: "MERN",
    points: ["Booking system", "Responsive UI"],
    live: "https://bodhayu.vercel.app/",
    github: "https://bodhayu.vercel.app/",
  },
];

const achievements = [
  "Google Cloud Arcade 2025",
  "Sigma 8.0 Web Dev",
  "UI/UX – Coursera",
  "AI & ChatGPT – Great Learning",
  "PPT Winner",
  "Avishkar Finalist (3 times)",
  "SPPU Startup Olympiad Top 50",
];

const contacts = [
  { label: "Phone", value: "7499752467", href: "tel:7499752467" },
  { label: "Email", value: "vishakhasm1234@gmail.com", href: "mailto:vishakhasm1234@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vishakha-mane-070053280",
    href: "https://linkedin.com/in/vishakha-mane-070053280",
  },
  { label: "GitHub", value: "github.com/vishakhatiti", href: "https://github.com/vishakhatiti" },
];

const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="mb-8 max-w-3xl">
    <p className="text-sm font-medium uppercase tracking-[0.28em] text-purple-300">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-7 text-gray-400">{description}</p> : null}
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.14),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.12),_transparent_25%)]" />

      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-6 py-20 min-h-screen flex items-center">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center w-full">
            <div className="space-y-8">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-gray-300">
                Full-Stack Developer Portfolio
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-gray-500">Hello, I&apos;m</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Vishakha <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mane</span>
                </h1>
                <p className="mt-4 text-xl text-gray-200 sm:text-2xl">Full-Stack Developer</p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">{summary}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://github.com/vishakhatiti"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className={`${sectionClass} lg:ml-auto`}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Profile Snapshot</p>
                <div className="mt-8 space-y-6">
                  {[
                    ["Specialization", "React, MERN Stack, Java & MySQL"],
                    ["Focus", "Responsive interfaces and end-to-end web development"],
                    ["Strength", "Clean execution with practical, user-centered solutions"],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <p className="text-xs uppercase tracking-[0.24em] text-gray-500">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-gray-200">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative">
        <section id="about">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <SectionHeader eyebrow="About" title="A premium, resume-led overview." />
            <div className={sectionClass}>
              <h3 className="text-2xl font-semibold text-white">Professional Summary</h3>
              <p className="mt-4 max-w-4xl text-base leading-8 text-gray-400">{summary}</p>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <SectionHeader eyebrow="Education" title="Academic foundation" />
            <div className="grid gap-6 md:grid-cols-3">
              {education.map((item) => (
                <article key={item.degree} className={sectionClass}>
                  <p className="text-sm uppercase tracking-[0.24em] text-purple-300">{item.year}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-2 text-gray-300">{item.school}</p>
                  {item.detail ? <p className="mt-4 text-sm text-gray-400">{item.detail}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <SectionHeader eyebrow="Skills" title="Technical toolkit" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {skillGroups.map((group) => (
                <article key={group.title} className={sectionClass}>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <SectionHeader
              eyebrow="Projects"
              title="Selected work"
              description="A concise showcase of projects with practical functionality, strong structure, and professional presentation."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className={sectionClass}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-purple-300">{project.tech}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-400">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex gap-3">
                    <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/10">Live</a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/10">GitHub</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <SectionHeader eyebrow="Certifications & Achievements" title="Continuous learning and recognition" />
            <div className={sectionClass}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300 transition-all duration-300 hover:scale-105">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <SectionHeader eyebrow="Contact" title="Let&apos;s connect" description="Available for internships, collaborations, and full-stack development opportunities." />
            <div className={sectionClass}>
              <div className="grid gap-4 md:grid-cols-2">
                {contacts.map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:scale-105 hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.24em] text-gray-500">{item.label}</p>
                    <p className="mt-3 text-base text-gray-200 break-all">{item.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
