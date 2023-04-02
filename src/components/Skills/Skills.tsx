import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiRedux, SiMysql, SiStyledcomponents, SiNextdotjs } from 'react-icons/si'
import { IoLogoVue, IoLogoCss3, IoLogoSass } from 'react-icons/io5';
import { TiHtml5 } from 'react-icons/ti';
import { Skill } from './Skill'

export function Skills() {
    return (
        <div 
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl'>Habilidades</h3>

            <h3 className='absolute top-32 uppercase tracking-[3px] text-[#BFBFBF] text-sm'>
                Passe o mouse em cima de uma skill para saber o meu tempo de experiência e o seu nome.
            </h3>

            <div className='grid grid-cols-4 gap-8 mt-36 max-[320px]:grid-cols-4 xl:pt-24'>
                <Skill SkillIcon={SiJavascript} level='9 m' skillName='JavaScript'/>
                <Skill SkillIcon={SiTypescript} level='6 m' skillName='TypeScript'/>
                <Skill SkillIcon={TiHtml5} level='9 m' skillName='HTML'/>
                <Skill SkillIcon={IoLogoCss3} level='9 m' skillName='CSS'/>
                <Skill SkillIcon={SiReact} level='6 m' skillName='React'/>
                <Skill SkillIcon={SiNextdotjs} level='3 m' skillName='Nextjs'/>
                <Skill SkillIcon={IoLogoVue} level='1 m' skillName='Vue.js'/>
                <Skill SkillIcon={SiRedux} level='6 m' skillName='Redux'/>
                <Skill SkillIcon={SiBootstrap} level='6 m' skillName='Bootstrap'/>
                <Skill SkillIcon={SiTailwindcss} level='3 m' skillName='Tailwind css'/>
                <Skill SkillIcon={SiStyledcomponents} level='6 m' skillName='styled-components'/>
                <Skill SkillIcon={IoLogoSass} level='6 m' skillName='Sass'/>
                <Skill SkillIcon={SiMysql} level='1 m' skillName='MySQL'/>
            </div>
        </div>
    )
}