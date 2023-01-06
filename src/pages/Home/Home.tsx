import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Experience } from "../../components/Experience/Experience";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";

function Home() {
    return (
        <>
            <div className="bg-[#050505] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80">
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

            </div>
        </>
    )
}

export default Home;