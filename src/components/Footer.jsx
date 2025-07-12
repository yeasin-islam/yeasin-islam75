import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// import Img from "/public/NavbarLogo.png"

const Footer = () => {
  return (
    <section className="bg-[#333333] text-white">
      <div className="container mx-auto px-4 md:px-0 text-center space-y-6 py-8">
        {/* Social Icons */}
        {/* <div className="flex justify-center">
          <img src={Img} alt="Yeasin" className="w-36 brightness-200" />
        </div> */}
        <div className="flex justify-center gap-5">
          {[
            {
              href: "https://www.facebook.com/yeasin.islam2018",
              icon: <FaFacebook />,
              label: "Facebook",
            },
            {
              href: "https://linkedin.com/in/yeasin-islam75",
              icon: <FaLinkedin />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/yeasin-islam",
              icon: <FaGithub />,
              label: "GitHub",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="group relative w-11 h-11 rotate-45 bg-[#3b3b3b] hover:bg-[#ff0054] transition rounded-xl duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center -rotate-45 text-xl group-hover:text-black">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="text-[#ff0054] font-semibold">Yeasin Islam</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
