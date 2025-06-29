// App.jsx
import { useEffect, useState } from "react";
import Loader from "./components/Loader.jsx";
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
// import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import GetInTouch from './components/GetInTouch.jsx'
import Footer from './components/Footer.jsx'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true, // animations trigger once
        });
    }, []);

    useEffect(() => {
        // simulate loading (e.g. 2 seconds)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="rubik-regular">
            <div className="fixed top-0 left-0 w-full h-screen bg-[url('/HeroImg1.jpg')] opacity-80 bg-cover bg-center -z-10" />
            <Navbar className=" overflow-hidden" />
            <div className="overflow-x-hidden">
                <Hero />
                <About />
                <Skills />
                {/* <Experience /> */}
                <Education />
                <Projects />
                <GetInTouch />
                <Footer />
                <ScrollToTop />
            </div>
        </div>
    );
}

export default App;
