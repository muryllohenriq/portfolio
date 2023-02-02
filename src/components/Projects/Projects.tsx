import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { SiReact, SiTypescript, SiTailwindcss, SiBootstrap } from 'react-icons/si'

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
                    <ProjectCard deploy='' repo='' cover='https://avatars.githubusercontent.com/u/105292489?v=4' tag='E-commerce' name='Shopping' skills={[SiReact, SiTypescript]} summary='É utilizado o react com typescript na criação da interface, o axios para conectar a api, redux para gerenciar os estados da aplicação, styled-components na estilização. Utilizamos também da metodologia kanban para controlar o fluxo do processo.'/>
                    <ProjectCard deploy='' repo='' cover='https://avatars.githubusercontent.com/u/105292489?v=4' tag='Social Media' name='Parrot' skills={[SiTailwindcss, SiBootstrap]} summary='Foi difícil sabia'/>
                </div>
            </motion.div>
        </>
    )
}