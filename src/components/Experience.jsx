import { FaBriefcase, FaLaptopCode, FaUserTie } from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Developer",
    company: "Creative Soft Ltd",
    duration: "Jan 2023 – Present",
    description:
      "Working on modern web apps using React, Tailwind, and REST APIs. Led multiple UI redesigns and improved performance across platforms.",
  },
  {
    icon: <FaBriefcase />,
    title: "Intern Developer",
    company: "NextGen Tech",
    duration: "Jul 2022 – Dec 2022",
    description:
      "Built internal tools with vanilla JS and worked on minor bug fixes in client apps. Learned version control and agile teamwork practices.",
  },
  {
    icon: <FaUserTie />,
    title: "Freelancer",
    company: "Remote",
    duration: "2021 – 2022",
    description:
      "Worked with international clients to deliver websites, landing pages, and small web tools using HTML, CSS, and Bootstrap.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#2d2b2b] py-20 text-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Centered Section Title */}
        <div className="flex justify-center">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
              MY EXPERIENCE
            </span>
          </h2>
        </div>

        <div className="relative border-l-2 border-primary pl-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 relative">
              {/* Dot with Icon */}
              <div className="absolute -left-[32px] top-0 w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center text-xl shadow-md">
                {exp.icon}
              </div>

              {/* Content */}
              <div className="bg-[#1e1e1e] p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-sm text-gray-400 font-medium mb-1">{exp.company} • {exp.duration}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
