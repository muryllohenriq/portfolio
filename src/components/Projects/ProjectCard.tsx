import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

type Props = {
    deploy: string;
    repo: string;
    cover: string;
    tag: string;
    name: string;
    skills: Array<React.ElementType>;
    summary: string;
    shadowColor: string;
    underlineColor: string;
}

export function ProjectCard({ deploy, repo, cover, tag, name, skills, summary, shadowColor, underlineColor }: Props) {
    return (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
                initial={{
                    y: -300,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`w-[270px] flex justify-center items-center flex-col m-8 p-4 rounded-[0.5rem] bg-almost-black text-BFBFBF transition-[all_0.3s_ease] cursor-pointer ${shadowColor} max-[320px]:mt-[130px]`}>
                <div className='flex justify-center items-center w-[100%] h-[230px] relative'>
                    <img
                        src={cover}
                        alt=""
                        className='w-[100%] h-[100%] rounded-[0.5rem] object-cover'
                    />

                    <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                        className='flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 w-[100%] h-[100%] bg-almost-black rounded-[0.5rem] opacity-0 transition-[all_0.3s_ease]'
                    >
                        <a href={deploy} target='_blank'>
                            <motion.div
                                whileInView={{ scale: [0, 1] }}
                                whileHover={{ scale: [1, 0.9] }}
                                transition={{ duration: 0.25 }}
                                className='flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-almost-black text-white m-4 font-extrabold cursor-pointer transition-[all_0.3s_ease]'
                            >
                                < AiFillEye className='w-[50%] h-[50%]' />
                            </motion.div>
                        </a>
                        <a href={repo} target='_blank'>
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
                        <p className='text-1xl'>{tag}</p>
                    </div>

                    <h4 className={`flex justify-center mt-4 leading-6 text-2xl font-semibold underline ${underlineColor}`}>{name}</h4>

                    <div className="flex mt-[20px] max-[320px]:hidden">
                        {
                            skills.map((CustomTag, i) => <CustomTag key={i} className="h-10 w-10 mx-[10px]" />)
                        }
                    </div>

                </div>

            </motion.div>

            <div className="space-y-5 px-0 md:px-10 max-[320px]:pt-20 max-[428px]:hidden max-w-6xl">
                <p className="text-lg text-center md:text-left max-[428px]:w-80">
                    {summary}
                </p>
            </div>

        </div>
    )
}