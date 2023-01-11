import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiRedux, SiMysql, SiStyledcomponents } from 'react-icons/si'
import { IoLogoVue, IoLogoCss3, IoLogoSass } from 'react-icons/io5';
import { TiHtml5 } from 'react-icons/ti';
import { Skill } from './Skill'

export function Skills() {
    return (
        <div 
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl'>Habilidades</h3>

            <h3 className='absolute top-32 uppercase tracking-[3px] text-[#BFBFBF] text-sm'>
                Hover over a skill for current proficiency
            </h3>

            <div className='grid grid-cols-3 gap-8 mt-36 max-[320px]:grid-cols-4 xl:pt-24'>
                <Skill SkillIcon={SiJavascript} level='80%' skillName='JavaScript'/>
                <Skill SkillIcon={SiTypescript} level='70%' skillName='TypeScript'/>
                <Skill SkillIcon={TiHtml5} level='90%' skillName='HTML'/>
                <Skill SkillIcon={IoLogoCss3} level='90%' skillName='CSS'/>
                <Skill SkillIcon={SiReact} level='70%' skillName='React'/>
                <Skill SkillIcon={IoLogoVue} level='30%' skillName='Vue.js'/>
                <Skill SkillIcon={SiRedux} level='30%' skillName='Redux'/>
                <Skill SkillIcon={SiBootstrap} level='90%' skillName='Bootstrap'/>
                <Skill SkillIcon={SiTailwindcss} level='90%' skillName='Tailwind css'/>
                <Skill SkillIcon={SiStyledcomponents} level='90%' skillName='styled-components'/>
                <Skill SkillIcon={IoLogoSass} level='80%' skillName='Sass'/>
                <Skill SkillIcon={SiMysql} level='50%' skillName='MySQL'/>
            </div>
        </div>
    )
}