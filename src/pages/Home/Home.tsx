import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Experience } from "../../components/Experience/Experience";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import { Testimonials } from "../../components/Testimonials/Testimonials";

function Home() {
    return (
        <>
            <div className="bg-[#050505] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80 max-sm:scrollbar-none">
                <Header />

                <section id="hero">
                    <Hero />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="experience">
                    <Experience />
                </section>

                <section id="skills">
                    <Skills />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="testimonials">
                    <Testimonials />
                </section>

                <section id="contact">
                    <Contact />
                </section>

            </div>
        </>
    )
}

export default Home;