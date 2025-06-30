import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import projects from "/public/ProjectsData.json";
import "swiper/css";
import "swiper/css/navigation";
import { FcViewDetails } from "react-icons/fc";
import { TbListDetails } from "react-icons/tb";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-[#2d2b2b] py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
              MY PROJECTS
            </span>
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center bg-[#1e1e1e] rounded-xl shadow-md hover:shadow-primary transition-all duration-300"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              {/* Image / Swiper */}
              <div onClick={() => setSelectedProject(project)} className="cursor-pointer w-full lg:w-1/2" data-aos="fade-right">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  modules={[Autoplay]}
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-64 lg:h-[350px] object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-6 space-y-4" data-aos="fade-left">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>

                <ul className="list-disc list-inside text-sm text-gray-300">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-8 flex-wrap items-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-md hover:underline text-primary"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-md hover:underline text-primary"
                  >
                    GitHub <FaGithub />
                  </a>
                  {/* Details button */}
                  <a
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-md hover:underline text-primary cursor-pointer"
                  >
                   Details <TbListDetails />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#1e1e1e] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto relative p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>

            {/* Image Carousel */}
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
              className="mb-6"
            >
              {selectedProject.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${selectedProject.title} ${idx + 1}`}
                    className="w-full max-h-[400px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <div>
              <h4 className="font-semibold text-lg mb-2">Features</h4>
              <ul className="list-disc list-inside mb-4 text-gray-400">
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Challenges</h4>
              <p className="text-gray-400 mb-4">{selectedProject.challenges}</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Future Plans</h4>
              <p className="text-gray-400">{selectedProject.futurePlans}</p>
            </div>

            <div className="flex gap-6 mt-6 flex-wrap items-center">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-md hover:underline text-primary "
              >
                Live <FaExternalLinkAlt />
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-md hover:underline text-primary "
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
