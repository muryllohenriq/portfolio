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
                className='max-[320px]:mt-24 max-[320px]:w-28 max-[320px]:h-28 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 md:ml-20 xl:w-[450px] xl:h-[500px] xl:mt-14'
            />
            <div className='space-y-5 px-0 md:px-10 min-[360px]:-mt-32 xl:-mt-40'>
                <h4 className='text-2xl max-[360px]:text-xl font-semibold'>Um <span className='underline decoration-[#D72638]/70'>pouco</span> sobre mim</h4>
                <p className='text-base text-justify md:w-96 md:h-40 xl:w-4/5'>
                    Olá, sou o Muryllo, dev Full-Stack com especialidade em front. Gosto de desenvolver sites com designs bonitos, modernos e que me sinto confortável
                </p>
            </div>
        </motion.div>
    )
}