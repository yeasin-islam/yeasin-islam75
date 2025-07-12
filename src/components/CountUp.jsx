import CountUp from "react-countup";
import { FaTrophy, FaCoffee, FaProjectDiagram } from "react-icons/fa";
import { IoGitCommit } from "react-icons/io5";

const stats = [
  { icon: <FaProjectDiagram />, label: "Complete Projects", value: 3 },
  { icon: <IoGitCommit />, label: "GitHub Commit", value: 200 },
  { icon: <FaTrophy />, label: "Awards", value: 1 },
  { icon: <FaCoffee />, label: "Cups of Coffee", value: 500 },
];

const CountUpStats = () => {
  return (
    <section className="bg-[#333333]">
      <div className="container mx-auto md:px-0 px-4 py-20">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className=" border border-secondary rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transform-transition duration-300 text-center"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="card-body items-center">
                <div className="text-4xl text-[#ff0054] mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-white">
                  <CountUp start={0} end={stat.value} duration={2.5} /> +
                </h3>
                <p className="text-white text-lg mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default CountUpStats;
