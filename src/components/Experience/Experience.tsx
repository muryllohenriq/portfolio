import { motion } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'
import gamaIcon from '../../assets/gama-icon.png'
import duChefLogo from '../../assets/duChef-logo.svg'
import iecLogo from '../../assets/iec-logo.png'

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

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80'>
                <ExperienceCard cover={gamaIcon} job={"Dev Full-Stack"} company={"Gama Academy"} skill="js,ts,vite,html,css,styledcomponents,bootstrap,sass,react,redux,jest,nodejs,mysql,git,github,figma" time={"22/06/2022 - 05/12/2022"} summaryPoint={["Desenvolvimento de aplicações web", "Desenvolvimento de APIs"]}/>
                <ExperienceCard cover={duChefLogo} job={"Dev Front-End"} company={"DuChef"} skill="ts,react,redux,vite,styledcomponents,bootstrap,git" time={"01/11/2022 - o momento"} summaryPoint={["Crição da aplicação web", "Conexão com o banco de dados", "Conexão com API"]}/>
                <ExperienceCard cover='https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=600' job={"Freelancer"} company={"Me, Myself and I"} skill="js,ts,vite,nextjs,html,css,tailwind,styledcomponents,bootstrap,sass,react,redux,vue,nodejs,mysql,sqlite,prisma,git,figma" time={"05/12/2022 - o momento"} summaryPoint={["Desenvolvimento de aplicações web", "E-commerces", "Landing pages", 'Conexões com APIs', "Criação de APIs"]}/>
                <ExperienceCard cover={iecLogo} job={"Voluntário"} company={"IEC"} skill="ts,vite,react,styledcomponents,git" time={"07/12/2022 - o momento"} summaryPoint={["Desenvolvimento de páginas estáticas"]}/>
            </div>
        </motion.div>
    )
}