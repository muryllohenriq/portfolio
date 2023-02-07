import { motion } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'
import gamaIcon from '../../assets/gama-icon.png'

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
                <ExperienceCard cover={gamaIcon} job={"Dev Full-Stack"} company={"Gama Academy"} skill="js,ts,html,css,styledcomponents,bootstrap,sass,react,redux,jest,nodejs,mysql,git,github,figma" time={"22/06/2022 - 05/12/2022"} summaryPoint={["summarypoint", "SummaryPoints", "oi", "hello"]}/>
                <ExperienceCard cover='https://avatars.githubusercontent.com/u/105292489?v=4' job={"Dev Front-End"} company={"DuChef"} skill="js,html" time={"Inicio... - Término..."} summaryPoint={["summarypoint", "SummaryPoints", "oi", "hello"]}/>
                <ExperienceCard cover='https://avatars.githubusercontent.com/u/105292489?v=4' job={"Freelancer"} company={"Me, Myself and I"} skill="js,html" time={"Inicio... - Término..."} summaryPoint={["summarypoint", "SummaryPoints", "oi", "hello"]}/>
                <ExperienceCard cover='https://avatars.githubusercontent.com/u/105292489?v=4' job={"Voluntário"} company={"IEC"} skill="js,html" time={"Inicio... - Término..."} summaryPoint={["summarypoint", "SummaryPoints", "oi", "hello"]}/>
            </div>
        </motion.div>
    )
}