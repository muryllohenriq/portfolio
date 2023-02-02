import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { SiReact, SiTypescript, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { motion } from 'framer-motion'

export function Projects() {
    const projects = [1, 2, 3];

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
                    {projects.map((project, i) => (
                        <div key={project} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                            <motion.div
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='w-[270px] flex justify-center items-center flex-col m-8 p-4 rounded-[0.5rem] bg-almost-black text-BFBFBF cursor-pointer transition-[all_0.3s_ease] hover:shadow-[0_0_25px_#D72638] max-[320px]:mt-[130px]'>
                                <div className='flex justify-center items-center w-[100%] h-[230px] relative'>
                                    <img
                                        src="https://avatars.githubusercontent.com/u/105292489?v=4"
                                        alt=""
                                        className='w-[100%] h-[100%] rounded-[0.5rem] object-cover'
                                    />

                                    <motion.div
                                        whileHover={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                        className='flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 w-[100%] h-[100%] bg-almost-black rounded-[0.5rem] opacity-0 transition-[all_0.3s_ease]'
                                    >
                                        <a href="" target='_blank'>
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 0.9] }}
                                                transition={{ duration: 0.25 }}
                                                className='flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-almost-black text-white m-4 font-extrabold cursor-pointer transition-[all_0.3s_ease]'
                                            >
                                                < AiFillEye className='w-[50%] h-[50%]' />
                                            </motion.div>
                                        </a>
                                        <a href="" target='_blank'>
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 0.9] }}
                                                transition={{ duration: 0.25 }}
                                                className='flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-almost-black text-white m-4 font-extrabold cursor-pointer transition-[all_0.3s_ease]'
                                            >
                                                < AiFillGithub className='w-[50%] h-[50%]' />
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>

                                <div className='p-2 w-[100%] flex justify-center items-center relative flex-col'>
                                    <div className='flex justify-center items-center absolute p-[0.5rem_1rem] rounded-[10px] bg-black -top-[25px]'>
                                        <p className='text-1xl'>E-commerce</p>
                                    </div>

                                    <h4 className='flex justify-center mt-4 leading-6 text-2xl font-semibold underline decoration-[#D72638]/70'>Shopping</h4>

                                    <div className="flex mt-[20px] max-[320px]:hidden">
                                    <SiReact className="h-10 w-10 mx-[10px]"/>
                                    <SiTypescript className="h-10 w-10 mx-[10px]"/>
                                    <SiTailwindcss className="h-10 w-10 mx-[10px]"/>
                                    <SiBootstrap className="h-10 w-10 mx-[10px]"/>
                                    </div>
                                    
                                </div>

                            </motion.div>

                            <div className="space-y-5 px-0 md:px-10 max-[320px]:pt-20 max-[428px]:hidden max-w-6xl">
                                <p className="text-lg text-center md:text-left max-[428px]:w-80">
                                    É utilizado o react com typescript na criação da interface, o axios para conectar a api, redux para gerenciar os estados da aplicação, styled-components na estilização. Utilizamos também da metodologia kanban para controlar o fluxo do processo.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}