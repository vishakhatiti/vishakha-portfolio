import profileImg from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Vishakha Mane
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
            Full-Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg">
            I build scalable web applications using modern technologies like
            React, Node.js, and MongoDB. Passionate about solving real-world
            problems with clean UI/UX and efficient backend systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/vishakhatiti"
              target="_blank"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={profileImg}
            alt="profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;