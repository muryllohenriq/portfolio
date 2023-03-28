import { motion } from 'framer-motion'
import foto2 from "../../assets/foto-2.jpg"

export function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl'>
                Sobre
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
                src={foto2}
                className='max-[320px]:mt-24 max-[320px]:w-28 max-[320px]:h-28 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 md:ml-20 xl:w-[400px] xl:h-[400px] xl:mt-14 max-sm:hidden'
            />
            <div className='space-y-5 px-0 md:px-10 xl:-mt-40'>
                <h4 className='text-2xl max-[360px]:text-xl font-semibold'>Um <span className='underline decoration-[#D72638]/70'>pouco</span> sobre mim</h4>
                <p className='text-base text-justify md:w-96 md:h-40 xl:w-4/5'>
                    Muryllo é curioso, fã de tecnologia e computadores desde sempre. Se interessou por programação após uma conversa com uma amiga que trabalha na área, foi quando encontrou a Gama Academy, onde iniciou uma formação em Desenvolvimento Web Full Stack, desenvolvendo projetos sozinho e em grupos, utilizando e desenvolvendo as suas hard e soft skills. Conhecendo as linguagens e entendendo como tudo que sempre usou era feito, ficou encantado pelo desenvolvimento da interface gráfica do usuário, o front-end, área em que ele trabalha e desenvolve projetos no momento.
                </p>
            </div>
        </motion.div>
    )
}