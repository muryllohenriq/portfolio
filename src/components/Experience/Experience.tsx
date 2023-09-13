import { motion } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'
import abinbev from '../../assets/abinbev.png'
import descomplica from '../../assets/descomplica.png'
import gamaIcon from '../../assets/gama-icon.png'
import iecLogo from '../../assets/iec-logo.png'
import aws from '../../assets/aws.png'
import duChefLogo from '../../assets/duChef-logo.svg'

export function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center max-[320px]:mt-28'>
            <h3 className='absolute top-20 uppercase tracking-[20px] max-[320px]:tracking-[18px] text-[#BFBFBF] text-2xl max-[320px]:text-xl'>
                Experiência
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80 max-[320px]:mt-10'>
                <ExperienceCard cover={abinbev} job={"Dev Full-Stack"} company={"BEES"} skill="react,typescript" time={"09/2023 - O momento"} summaryPoint={["", ""]}/>
                <ExperienceCard cover={descomplica} job={"Ciência da Computação"} company={"Faculdade Descomplica"} skill="java" time={"04/2023 - O momento"} summaryPoint={["Análise e Levantamento de Requisitos de Software", "Criação de Aplicações e Sistemas"]}/>
                <ExperienceCard cover={aws} job={"AWS re/Start"} company={"Escola da Nuvem"} skill="aws" time={"05/2023 - 07/2023"} summaryPoint={["Treinamento e desenvolvimento para carreira na nuvem", "Conteúdo teórico e laboratórios práticos"]}/>
                <ExperienceCard cover={gamaIcon} job={"Dev Full-Stack"} company={"Gama Academy"} skill="js,ts,vite,html,css,styledcomponents,bootstrap,sass,react,redux,jest,nodejs,express,mysql,git,github,figma" time={"06/2022 - 12/2022"} summaryPoint={["Desenvolvimento de aplicações web", "Desenvolvimento de APIs"]}/>
                {/* <ExperienceCard cover={duChefLogo} job={"Dev Front-End"} company={"DuChef"} skill="ts,react,redux,vite,styledcomponents,bootstrap,git" time={"11/2022 - o momento"} summaryPoint={["Crição da aplicação web", "Conexão com o banco de dados", "Conexão com API"]}/> */}
                <ExperienceCard cover='https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=600' job={"Dev Full-Stack"} company={"Freelancer"} skill="js,ts,nextjs,html,css,tailwind,styledcomponents,bootstrap,sass,react,redux,nodejs,graphql,git,figma" time={"12/2022 - 08/2023"} summaryPoint={["Desenvolvimento de aplicações web", "E-commerces", "Landing pages", 'Conexões e criação de APIs']}/>
                <ExperienceCard cover={iecLogo} job={"Dev Front-End - Voluntário"} company={"IEC"} skill="ts,vite,react,styledcomponents,git" time={"12/2022 - 05/2023"} summaryPoint={["Desenvolvimento e estilização de páginas estáticas"]}/>
            </div>
        </motion.div>
    )
}