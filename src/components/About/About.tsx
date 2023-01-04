import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                src='https://pbs.twimg.com/profile_images/1608638352839827456/MdkF13Mx_400x400.jpg'
                className='mt-28 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 md:ml-20 xl:w-[400px] xl:h-[400px] xl:ml-32'
            />
            <div className='space-y-5 px-0 md:px-10'>
                <h4 className='text-2xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p className='text-base text-justify md:w-96 md:h-40 xl:w-4/5'>
                    Olá, sou o Muryllo, dev Full-Stack com especialidade em front. Já desenvolvi sites e aplicações do 0 utilizando das várias tecnologias que vocês tanto ouvem falar e a vaga exige (pode ser visto no meu github :D), já liderei uma equipe front-end no desenvolvimento de uma aplicação white-label no meu projeto de conclusão de curso e também participo de alguns projetos voluntários e faço alguns freelas enquanto não recebo o meu tão aguardado SIM!
                    Me chama pra trocar uma ideia, seria um prazer
                </p>
            </div>
        </motion.div>
    )
}

export default About