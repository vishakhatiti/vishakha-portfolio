import profile from "../assets/profile.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero">
        
        {/* LEFT */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Vishakha Mane</span>
          </h1>
          <p>
            Full Stack Developer specializing in building scalable and modern web applications.
          </p>

          <button className="btn">View Projects</button>
        </div>

        {/* RIGHT */}
        <div className="hero-img">
          <img src={profile} alt="Profile" />
        </div>

      </div>
    </section>
  );
};

export default Hero;