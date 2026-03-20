import images from "../data/images";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT */}
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
            I build scalable web applications and solve real-world problems using modern technologies with clean UI/UX.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg">
              GitHub
            </button>
            <button className="px-6 py-3 border border-gray-500 rounded-lg">
              Contact
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={images.profile}
            alt="profile"
            className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-full border border-gray-700 shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;