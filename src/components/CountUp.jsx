import CountUp from "react-countup";
import { FaCode, FaUsers, FaTrophy, FaCoffee } from "react-icons/fa";

const stats = [
  { icon: <FaCode />, label: "Projects", value: 3 },
  { icon: <FaUsers />, label: "Clients", value: 0 },
  { icon: <FaTrophy />, label: "Awards", value: 0 },
  { icon: <FaCoffee />, label: "Cups of Coffee", value: 500 },
];

const CountUpStats = () => {
  return (
    <section className="bg-[#312f2f]">
      <div className="container mx-auto md:px-0 px-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card rounded-xl p-8 text-left space-y-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl border border-secondery"
              data-aos="zoom-in"
              data-aos-delay={idx * 100} // 0ms, 100ms, 200ms, ...
            >
              <div className="card-body items-center">
                <div className="text-4xl text-[#ff0054] mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-white">
                  <CountUp end={stat.value} duration={4.5} />
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
