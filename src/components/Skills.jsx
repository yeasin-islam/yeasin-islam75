const skills = [
  { name: "C & C++", level: 97 },
  { name: "HTML5 & CSS3", level: 97 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 75 },
  { name: "React Router", level: 70 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[#333333] text-white">
      <div className="container mx-auto px-4 md:px-0 mb-12">
        {/* Centered Section Title */}
        <div className="flex justify-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-20 tracking-wider relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
              MY SKILLS
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 mx-auto">
          {skills.map((skill, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-white h-[6px] rounded-full relative overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#ff0054] absolute top-0 left-0 transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
