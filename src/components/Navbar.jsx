import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const closeDrawer = () => setIsDrawerOpen(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className={`sticky top-0 z-50 transition-all duration-300  ${scrolled ? "bg-white text-black shadow-md" : " text-white"
          }`}>
        <div className="container mx-auto px-4 lg:px-0 py-4 md:px-0 navbar">
          {/* Logo */}
          <div className="navbar-start lobster-regular">
            <div
              className="flex items-end italic cursor-pointer"
              onClick={() => window.location.reload()}
              title="Reload Page"
            >
              <p className="text-4xl text-[#ff0054]">
                Yeasin <span className={scrolled ? "text-black" : "text-white"}>Islam</span>
              </p>
            </div>
          </div>


          {/* Desktop Nav */}
          <div className="navbar-end hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={900}
                offset={-70}
                spy={true}
                activeClass="active"
                className="cursor-pointer hover:text-[#ff0054] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/Yeasin_Resume.pdf"
              download='Yeasin_Resume.pdf'
              className="btn btn-primary flex items-center gap-2"
            >
              <FaDownload /> My Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-end lg:hidden">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="rounded-full cursor-pointer hover:bg-transparent hover:text-inherit"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </section >

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeDrawer}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 h-full w-1/2 p-6 flex flex-col gap-6 transition-all duration-300 transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} 
      ${scrolled ? "bg-white text-black" : "bg-[#333333] text-white"}`}
        >
          <button
            onClick={closeDrawer}
            className="absolute top-5 right-5 text-3xl rounded-full cursor-pointer"
            aria-label="Close Menu"
          >
            ✕
          </button>

          <div className="flex flex-col gap-6 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={900}
                offset={-70}
                spy={true}
                activeClass="active"
                onClick={closeDrawer}
                className="hover:text-[#ff0054] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="/Yeasin_Resume.pdf"
            download="Yeasin_Resume.pdf"
            className="btn btn-primary flex items-center gap-2 mt-6"
          >
            <FaDownload /> My Resume
          </a>
        </div>
      </div>
      {/* Active Link Styling */}
      <style jsx="true">{`
          .active {
            color: #ff0054;
            font-weight: 600;
          }
        `}</style>
    </>
  );
};

export default Navbar;
