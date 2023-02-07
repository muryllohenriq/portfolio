import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { SiReact, SiTypescript, SiStyledcomponents, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import pokedexIcon from '../../assets/pokedex-icon.jpg'

export function Projects() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
                <h3 className="absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl">
                    Projetos
                </h3>

                <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80">
                    <ProjectCard deploy='https://pokedex-gamma-pearl.vercel.app' repo='https://github.com/muryllohenriq/Pokedex' cover={pokedexIcon} tag='Web-app' name='Pokédex' skills={[SiReact, SiTypescript, SiStyledcomponents ]} summary='Projeto de pokedex desenvolvido com react'/>
                    <ProjectCard deploy='' repo='' cover='https://images.pexels.com/photos/4118958/pexels-photo-4118958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' tag='Teste' name='Teste' skills={[SiTailwindcss, SiBootstrap]} summary='Teste'/>
                </div>
            </motion.div>
        </>
    )
}