import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section
            id="home"
            className="lg:py-11 py-20  text-white text-center md:text-left flex items-center justify-center"
        >
            <div
                className="container mx-auto px-4 md:px-0 flex flex-col-reverse md:flex-row-reverse items-center gap-12"
                data-aos="fade-up"
            >
                {/* Left Text Content */}
                <div className="flex-1" data-aos="fade-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Hi, I'm <span className="text-[#ff0054]">Md.Yeasin Islam</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl mt-3 font-extrabold ">
                        {" "}
                        <span className="text-yellow-300 text-2xl md:text-3xl lg:text-4xl ">
                            <Typewriter
                                words={[
                                    "a MERN Stack Developer",
                                    "a Frontend Specialist",
                                    "a Problem Solver",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h2>

                    <p className="mt-4 text-base text-white max-w-md mx-auto md:mx-0">
                        I build dynamic and responsive web apps with a passion for solving
                        real-world problems through clean code and creative interfaces.
                    </p>

                    {/* Social Icons */}
                    <div
                        className="mt-6 flex justify-center md:justify-start gap-5 text-white"
                        data-aos="zoom-in"
                    >
                        <a
                            href="https://www.facebook.com/yeasin.islam2018"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative w-11 h-11 rotate-45 bg-[#3b3b3b] hover:bg-[#ff0054] transition rounded-xl duration-300"
                        >
                            <div className="absolute inset-0 flex items-center justify-center -rotate-45 text-xl group-hover:text-black">
                                <FaFacebook />
                            </div>
                        </a>
                        <a
                            href="https://linkedin.com/in/yeasin-islam75"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative w-11 h-11 rotate-45 bg-[#3b3b3b] hover:bg-[#ff0054] transition rounded-xl duration-300"
                        >
                            <div className="absolute inset-0 flex items-center justify-center -rotate-45 text-xl group-hover:text-black">
                                <FaLinkedin />
                            </div>
                        </a>
                        <a
                            href="https://github.com/yeasin-islam"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative w-11 h-11 rotate-45 bg-[#3b3b3b] hover:bg-[#ff0054] transition rounded-xl duration-300"
                        >
                            <div className="absolute inset-0 flex items-center justify-center -rotate-45 text-xl group-hover:text-black">
                                <FaGithub />
                            </div>
                        </a>
                    </div>

                    {/* Buttons */}
                    <div
                        className="mt-6 flex flex-row gap-4 items-center justify-center md:justify-start md:items-start"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <a
                            href="/Yeasin_Resume.pdf"
                            download="Yeasin_Resume.pdf"
                            className="btn btn-primary flex items-center gap-2"
                        >
                            <FaDownload /> My Resume
                        </a>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={900}
                            offset={-70}
                            className="cursor-pointer hover:text-[] btn btn-secondary"
                        >
                            <FaPhoneAlt /> Contact Me
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1" data-aos="fade-right">
                    <img
                        src="/yeasin-profile.jpg"
                        alt="Yeasin Islam"
                        className="w-[80%] h-[80%] rounded-xl object-cover border-2 border-secondary mx-auto transform transition duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
