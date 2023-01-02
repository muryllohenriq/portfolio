import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";

function Home() {
    return (
        <>
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Header/>

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

            {/* Project */}

            {/* Contact Me */}
        </div>
        </>
    )
}

export default Home;