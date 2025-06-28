import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-xl border shadow-lg 
    transition-all duration-300 ease-in-out bg-[#ff0054] text-white hover:bg-white hover:text-black  group w-11 h-11 rotate-45    duration-300"

    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
        >

            <div className="flex items-center justify-center -rotate-45 text-xl">
                <FaArrowUp size={20} />
            </div>
        </button>

    );
};

export default ScrollToTop;
