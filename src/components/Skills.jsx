// card view
import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaCuttlefish,
  FaCloud,
} from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiExpress, SiCanva, SiVercel, SiDaisyui, SiPostman } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";



const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "API", icon: <SiPostman className="text-orange-500" /> },
  { name: "C", icon: <FaCuttlefish className="text-blue-300" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
];

const SkillCard = ({ skill }) => (
  <div className="flex-shrink-0 w-32 h-32 lg:w-36 lg:h-36 bg-[#1f1f1f] border border-secondary rounded-xl flex flex-col items-center justify-center text-white mx-3 hover:scale-105 transition-transform duration-300">
    <div className="text-4xl mb-2">{skill.icon}</div>
    <p className="font-semibold text-center">{skill.name}</p>
  </div>
);

const MarqueeRow = ({ reverse }) => {
  const [paused, setPaused] = useState(false);

  const animation = {
    animation: `${reverse ? "marqueeReverse" : "marquee"} 100s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  return (
    <div
      className=" whitespace-nowrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex w-max" style={animation}>
        {skills.concat(skills).map((skill, idx) => (
          <SkillCard key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-[#2d2b2b]">
      <section id="skills" className="py-16 overflow-hidden relative">
        {/* Keyframes in global style */}
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

        <div className="lg:px-0 px-4 py-8 lg:py-0">
          <h2 className="text-4xl font-extrabold text-center text-white mb-14 tracking-wider" data-aos="fade-up" data-aos-delay="200">
            <span className="drop-shadow-[2px_2px_0px_#ff0054]">MY SKILLS</span>
          </h2>

          <div className="space-y-12" data-aos="fade-up" data-aos-delay="200">
            <MarqueeRow reverse={false} />
            <MarqueeRow reverse={true} />
            {/* <MarqueeRow reverse={false} /> */}
          </div>
        </div>
      </section>
    </div>

  );
};

export default Skills;





// % view

// import { useEffect, useState } from "react";

// const skills = [
//   { name: "C", level: 80 },
//   { name: "C++", level: 75 },
//   { name: "HTML5 & CSS3", level: 97 },
//   { name: "JavaScript", level: 70 },
//   { name: "React", level: 75 },
//   { name: "Tailwind CSS", level: 95 },
//   { name: "Node.js", level: 75 },
//   { name: "MongoDB", level: 70 },
// ];

// const Skills = () => {
//   const [percentages, setPercentages] = useState(
//     skills.map(() => 0)
//   );

//   useEffect(() => {
//     const intervals = skills.map((skill, index) => {
//       return setInterval(() => {
//         setPercentages((prev) => {
//           const updated = [...prev];
//           if (updated[index] < skill.level) {
//             updated[index]++;
//           }
//           return updated;
//         });
//       }, 50); // Adjust speed here
//     });

//     return () => intervals.forEach(clearInterval);
//   }, []);

//   return (
//     <section id="skills" className="py-16 bg-[#333333] text-white">
//       <div className="container mx-auto px-4 md:px-0 mb-12">
//         {/* Title */}
//         <div className="flex justify-center">
//           <h2 className="text-4xl font-extrabold text-center mb-20 tracking-wider relative inline-block">
//             <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
//               MY SKILLS
//             </span>
//           </h2>
//         </div>

//         {/* Skills List */}
//         <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 mx-auto">
//           {skills.map((skill, idx) => (
//             <div key={idx}>
//               <div className="flex justify-between mb-1">
//                 <span className="font-medium">{skill.name}</span>
//                 <span className="font-medium text-primary">
//                   {percentages[idx]}%
//                 </span>
//               </div>
//               <div className="w-full bg-white h-[6px] rounded-full relative overflow-hidden">
//                 <div
//                   className="h-full rounded-full bg-[#ff0054] absolute top-0 left-0 transition-all duration-500"
//                   style={{ width: `${percentages[idx]}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



// % view

// import { useEffect, useState } from "react";

// const skills = [
//   { name: "C", level: 80 },
//   { name: "C++", level: 75 },
//   { name: "HTML5 & CSS3", level: 97 },
//   { name: "JavaScript", level: 70 },
//   { name: "React", level: 75 },
//   { name: "Tailwind CSS", level: 95 },
//   { name: "Node.js", level: 75 },
//   { name: "MongoDB", level: 70 },
// ];

// const Skills = () => {
//   const [percentages, setPercentages] = useState(
//     skills.map(() => 0)
//   );

//   useEffect(() => {
//     const intervals = skills.map((skill, index) => {
//       return setInterval(() => {
//         setPercentages((prev) => {
//           const updated = [...prev];
//           if (updated[index] < skill.level) {
//             updated[index]++;
//           }
//           return updated;
//         });
//       }, 50); // Adjust speed here
//     });

//     return () => intervals.forEach(clearInterval);
//   }, []);

//   return (
//     <section id="skills" className="py-16 bg-[#333333] text-white">
//       <div className="container mx-auto px-4 md:px-0 mb-12">
//         {/* Title */}
//         <div className="flex justify-center">
//           <h2 className="text-4xl font-extrabold text-center mb-20 tracking-wider relative inline-block">
//             <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
//               MY SKILLS
//             </span>
//           </h2>
//         </div>

//         {/* Skills List */}
//         <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 mx-auto">
//           {skills.map((skill, idx) => (
//             <div key={idx}>
//               <div className="flex justify-between mb-1">
//                 <span className="font-medium">{skill.name}</span>
//                 <span className="font-medium text-primary">
//                   {percentages[idx]}%
//                 </span>
//               </div>
//               <div className="w-full bg-white h-[6px] rounded-full relative overflow-hidden">
//                 <div
//                   className="h-full rounded-full bg-[#ff0054] absolute top-0 left-0 transition-all duration-500"
//                   style={{ width: `${percentages[idx]}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
