import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";

function Home() {
    return (
        <>
            <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                <Header />

                <section id="hero" className="snap-start">
                    <Hero />
                </section>

                <section id="about" className="snap-center">
                    <About />
                </section>

                <section id="experience" className="snap-center">
                    <Experience />
                </section>

                <section id="skills" className="snap-start">
                    <Skills />
                </section>

                <section id="projects" className="snap-start">
                    <Projects />
                </section>

                <section id="contact" className="snap-start">
                    <Contact />
                </section>

                <a href="#hero">
                    <footer className="sticky bottom-5 w-full cursor-pointer">
                        <div className="flex items-center justify-center">
                            <ArrowLongUpIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"/>
                        </div>
                    </footer>
                </a>
            </div>
        </>
    )
}

export default Home;