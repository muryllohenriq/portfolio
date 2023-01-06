import React from 'react'
import { motion } from 'framer-motion'

export function Projects() {
    const projects = [1, 2, 3, 4, 5];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projetos
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://avatars.githubusercontent.com/u/105292489?v=4"
                            alt=""
                            className='xl:w-64 xl:h-64 xl:mt-16 -mt-44'
                        />
                        <div className="space-y-5 px-0 md:px-10 max-[320px]:pt-20 max-w-6xl">
                            <h4 className="text-3xl max-[320px]:text-2xl font-semibold text-center">
                                <span className="underline decoration-[#D72638]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{' '}
                                UPS clone
                            </h4>
                            
                            <div className="flex items-center space-x-2 justify-center">
                                <img className="h-10 w-10" src="https://camo.githubusercontent.com/1f14c9c472b21cf8790a4fb6914be3a3181e957ecc2b397775f06a989d20cb37/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f637373332d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                            </div>

                            <p className="text-lg text-center md:text-left max-[428px]:w-80">
                                É utilizado o react com typescript na criação da interface, o axios para conectar a api, redux para gerenciar os estados da aplicação, styled-components na estilização. Utilizamos também da metodologia kanban para controlar o fluxo do processo.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#D72638]/10 left-0 h-[400px] -skew-y-12" />
        </motion.div>
    )
}