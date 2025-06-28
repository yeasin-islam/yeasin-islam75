import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import projects from "/public/ProjectsData.json"; // adjust path as needed

import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
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
              <div className="w-full lg:w-1/2" data-aos="fade-right">
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

                <div className="flex gap-6 mt-4 flex-wrap items-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;