import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
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
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://avatars.githubusercontent.com/u/105292489?s=400&u=9707577a0a9a2671c242b28bbf364b48b20a7fd4&v=4" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Desenvolvedor Front-End</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
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
                </div>
            </div>
        </div>
    )
}