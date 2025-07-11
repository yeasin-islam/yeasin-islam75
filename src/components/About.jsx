import Lottie from "lottie-react";
import CountUpStats from "./CountUp";
import LottieAnimation from "/public/lottieAnimationforHero.json";

const About = () => {
  return (
    <section id="about" className="bg-[#312f2f] text-white">
      <div className="container mx-auto px-4 md:px-0 py-16">
        {/* Section Title */}
        <div className="flex justify-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold mb-12 tracking-wider text-center relative inline-block">
            <span className="relative z-10 drop-shadow-[2px_2px_0px_#ff0054]">
              ABOUT ME
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-[#ffbd39] mb-1">I'm Md. Yeasin Islam</h3>
            <h4 className="text-xl font-semibold text-[#ff0054] mb-4">MERN Stack Web Developer</h4>

            <p className="leading-relaxed text-lg text-white">
              I'm a MERN stack developer passionate about building clean and user-friendly web applications. I have spent a lot of time learning and practicing the skills needed to create dynamic, responsive projects. I’m eager to grow, take on new challenges, and contribute my best to every project I work on.
            </p>

            {/* Quick Info */}
            <div className="gap-x-8 space-y-4 mt-6 text-base text-gray-300">
              <p><span className="font-bold text-white">🎯 Address:</span> Uttara, Dhaka, Bangladesh</p>
              <p><span className="font-bold text-white">🎂 Age:</span> 21</p>
              <p><span className="font-bold text-white">🛡️ Nationality:</span> Bangladeshi</p>
              <p><span className="font-bold text-white">🌐 Languages:</span> Bangla, English</p>
            </div>
          </div>

          {/* Animation */}
          <div className="w-full lg:w-1/2 text-center" data-aos="fade-left">
            <Lottie style={{ width: "400px", margin: "0 auto" }} animationData={LottieAnimation} loop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
