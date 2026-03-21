import profile from "./assets/profile.png";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <motion.img
          src={profile}
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-xl mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Mana Vishakha
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-indigo-400 mt-2"
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-gray-400 mt-4"
        >
          Building scalable, real-world applications with clean UI and powerful backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-6 flex-wrap justify-center"
        >
          <a href="mailto:vishakhasm1234@gmail.com"
             className="px-6 py-2 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition shadow-lg">
            Contact
          </a>

          <a href="https://github.com/vishakhatiti" target="_blank"
             className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
            GitHub
          </a>

          <a href="https://linkedin.com/in/vishakha-mane-070053280" target="_blank"
             className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
            LinkedIn
          </a>
        </motion.div>

      </section>

      {/* SKILLS */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            "React", "Node.js", "MongoDB",
            "Java", "MySQL", "Tailwind",
            "APIs", "JWT Auth", "GitHub"
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 py-4 rounded-xl"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[ 
            {
              title: "Bodhayu",
              desc: "AQI monitoring with alerts, auth & APIs"
            },
            {
              title: "Employee Tracker",
              desc: "Attendance & salary automation system"
            },
            {
              title: "Airbnb Clone",
              desc: "Full-stack booking platform"
            }
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 Vishakha Mane
      </footer>

    </div>
  );
}

export default App;