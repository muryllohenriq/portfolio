import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles'
import foto1 from "../../assets/foto-1.jpg"

export function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Developer",
            "Designer",
            "Creator"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={foto1} alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-[#BFBFBF] pb-2 tracking-[15px]'>Desenvolvedor Front-End</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#D72638' />
                </h1>

                <div className='pt-5 max-[428px]:grid max-[428px]:grid-cols-2'>
                    <a href={"#about"}>
                    <button className='heroButton'>Sobre</button>
                    </a>
                    <a href={"#experience"}>
                    <button className='heroButton'>Experiência</button>
                    </a>
                    <a href={"#skills"}>
                    <button className='heroButton'>Habilidades</button>
                    </a>
                    <a href={"#projects"}>
                    <button className='heroButton'>Projetos</button>
                    </a>
                    <a href={"#testimonials"}>
                    <button className='heroButton'>Recomendações</button>
                    </a>
                </div>
            </div>
        </div>
    )
}