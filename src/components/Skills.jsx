import { useEffect, useState } from "react";

const skills = [
  { name: "C", level: 80 },
  { name: "C++", level: 75 },
  { name: "HTML5 & CSS3", level: 97 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
];

const Skills = () => {
  const [percentages, setPercentages] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setPercentages((prev) => {
          const updated = [...prev];
          if (updated[index] < skill.level) {
            updated[index]++;
          }
          return updated;
        });
      }, 50); // Adjust speed here
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="skills" className="py-16 bg-[#333333] text-white">
      <div className="container mx-auto px-4 md:px-0 mb-12">
        {/* Title */}
        <div className="flex justify-center">
          <h2 className="text-4xl font-extrabold text-center mb-20 tracking-wider relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
              MY SKILLS
            </span>
          </h2>
        </div>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 mx-auto">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="font-medium text-primary">
                  {percentages[idx]}%
                </span>
              </div>
              <div className="w-full bg-white h-[6px] rounded-full relative overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#ff0054] absolute top-0 left-0 transition-all duration-500"
                  style={{ width: `${percentages[idx]}%` }}
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
