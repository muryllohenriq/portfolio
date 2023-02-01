import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

type Props = {}

export default function Teste({}: Props) {
  return (
    <div className='w-[270px] flex-col m-8 p-4 rounded-[0.5rem] bg-white text-black cursor-pointer transition-[all_0.3s_ease] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]'> {/* app__work-item */}
                <div className='w-[100%] h-[230px] relative'> {/* app__work-img */}
                    <motion.img
                        // initial={{
                        //     y: -300,
                        //     opacity: 0,
                        // }}
                        // transition={{ duration: 1.2 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        src="https://avatars.githubusercontent.com/u/105292489?v=4"
                        alt=""
                        className='w-[100%] h-[100%] rounded-[0.5rem] object-cover'
                    />

                    <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        className='absolute top-0 left-0 bottom-0 right-0 w-[100%] h-[100%] bg-almost-black rounded-[0.5rem] opacity-0 transition-[all_0.3s_ease]'
                    > {/* app__work-hover */}
                        <a href="" target='_blank'>
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }}
                                transition={{ duration: 0.25 }}
                                className='w-[50px] h-[50px] rounded-[50%] bg-almost-black text-white m-4 font-extrabold cursor-pointer transition-[all_0.3s_ease]'
                            >
                                < AiFillEye className='w-[50%] h-[50%]' />
                            </motion.div>
                        </a>
                        <a href="" target='_blank'>
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }}
                                transition={{ duration: 0.25 }}
                                className='w-[50px] h-[50px] rounded-[50%] bg-almost-black text-white m-4 font-extrabold cursor-pointer transition-[all_0.3s_ease]'
                            >
                                < AiFillGithub className='w-[50%] h-[50%]' />
                            </motion.div>
                        </a>
                    </motion.div>
                </div>

                <div className='p-2 w-[100%] relative flex-col'> {/* app__work-content */}
                        <h4 className='mt-4 leading-6'>oi</h4>
                        <p className=''>joia</p>

                        <div className='absolute p-[0.5rem_1rem] rounded-[10px] bg-white -top-[25px]'> {/* app__work-tag */}
                            <p>joiao</p>
                        </div>
                </div>

            </div>
  )
}
