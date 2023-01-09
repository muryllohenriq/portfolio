import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiRedux, SiMysql, SiStyledcomponents } from 'react-icons/si'
import { IoLogoVue, IoLogoCss3, IoLogoSass } from 'react-icons/io5';
import { TiHtml5 } from 'react-icons/ti';
import { Skill } from './Skill'

export function Skills() {
    return (
        <div 
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-[#878D9B] text-2xl'>Habilidades</h3>

            <h3 className='absolute top-32 uppercase tracking-[3px] text-[#878D9B] text-sm'>
                Hover over a skill for current proficiency
            </h3>

            <div className='grid grid-cols-3 gap-8 mt-36 max-[320px]:grid-cols-4 xl:pt-24'>
                <Skill SkillIcon={SiJavascript} level='80%' />
                <Skill SkillIcon={SiTypescript} level='70%' />
                <Skill SkillIcon={TiHtml5} level='90%' />
                <Skill SkillIcon={IoLogoCss3} level='90%' />
                <Skill SkillIcon={SiReact} level='70%' />
                <Skill SkillIcon={IoLogoVue} level='30%' />
                <Skill SkillIcon={SiRedux} level='30%' />
                <Skill SkillIcon={SiBootstrap} level='90%' />
                <Skill SkillIcon={SiTailwindcss} level='90%' />
                <Skill SkillIcon={SiStyledcomponents} level='90%' />
                <Skill SkillIcon={IoLogoSass} level='50%' />
                <Skill SkillIcon={SiMysql} level='50%' />
            </div>
        </div>
    )
}