const educationData = [
  {
    year: "2024 - 2028",
    degree: "B.Sc in Computer Science and Engineering (CSE)",
    institution: "World University of Bangladesh",
    description:
      "Currently pursuing my degree in Computer Science and Engineering, focusing on modern web development and software technologies.",
  },
  {
    year: "Jan 2025 - July 2025",
    degree: "Complete Web Development Level 1 (Course)",
    institution: "Programming Hero",
    description:
      "Completed foundational web development course covering HTML, CSS, JavaScript, and basic backend concepts.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#312f2f] py-12 lg:py-20 text-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Centered Section Title */}
        <div className="flex justify-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
              MY EDUCATION & COURSES
            </span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto place-items-center md:place-items-start">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] border border-secondary p-6 rounded shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="inline-block bg-yellow-500 text-black text-sm font-semibold px-4 py-1 rounded-full mb-3">
                {item.year}
              </span>
              <h3 className="text-xl font-bold">{item.degree}</h3>
              <p className="text-gray-400 font-medium mb-3">{item.institution}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
