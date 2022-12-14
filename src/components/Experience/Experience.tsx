import { motion } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl max-[320px]:text-xl'>
                Experiência
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80'>
                <ExperienceCard cover='https://avatars.githubusercontent.com/u/105292489?v=4' job={"Freelancer"} company={"My self"} skill="js,html" time={"Started work... - Ended..."} summaryPoint={["summarypoint", "SummaryPoints", "oi", "hello"]}/>
                <ExperienceCard cover='https://avatars.githubusercontent.com/u/105292489?v=4' job={"Freelancer"} company={"My self"} skill="js,html" time={"Started work... - Ended..."} summaryPoint={["summarypoint", "SummaryPoints", "oi", "hello"]}/>
            </div>
        </motion.div>
    )
}