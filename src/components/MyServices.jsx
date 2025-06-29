import { FaCode, FaLaptopCode, FaDatabase, FaMobileAlt, FaPaintBrush, FaCloud } from "react-icons/fa";
import CountUpStats from "./CountUp";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-[#ff0054]" />,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive UI using React, Tailwind, DaisyUI.",
  },
  // {
  //   icon: <FaDatabase className="text-4xl text-[#ff0054]" />,
  //   title: "Backend Development",
  //   desc: "Secure APIs & databases using Node.js, Express, and MongoDB.",
  // },
  {
    icon: <FaMobileAlt className="text-4xl text-[#ff0054]" />,
    title: "Responsive Design",
    desc: "Mobile-first designs that look and work great on all devices.",
  },
  {
    icon: <FaCode className="text-4xl text-[#ff0054]" />,
    title: "Clean Code & Optimization",
    desc: "Reusable, maintainable, and scalable code that performs fast.",
  },
  {
    icon: <FaCloud className="text-4xl text-[#ff0054]" />,
    title: "Deployment & Hosting",
    desc: "Deploy apps using Vercel, Firebase, or custom servers.",
  },
  // {
  //   icon: <FaPaintBrush className="text-4xl text-[#ff0054]" />,
  //   title: "UI/UX & Branding",
  //   desc: "Eye-catching visuals with Figma & Canva for branding support.",
  // },
];

const MyServices = () => {
  return (
    <section id="services" className="bg-[#333333] text-white pt-16">
      <div className="container mx-auto lg:px-0 px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider">
          <span className="drop-shadow-[2px_2px_0px_#ff0054]">MY SERVICES</span>
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e1e]/20 border border-secondary rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform-transition duration-300 text-center"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CountUpStats />
    </section>
  );
};

export default MyServices;
