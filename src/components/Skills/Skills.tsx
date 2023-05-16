import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiRedux, SiMysql, SiStyledcomponents, SiNextdotjs } from 'react-icons/si'
import { IoLogoVue, IoLogoCss3, IoLogoSass } from 'react-icons/io5';
import { TiHtml5 } from 'react-icons/ti';
import { Skill } from './Skill'

export function Skills() {
    return (
        <div 
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] max-[320px]:tracking-[16px] text-[#BFBFBF] text-2xl'>Habilidades</h3>

            <h3 className='absolute top-32 uppercase tracking-[3px] text-[#BFBFBF] text-sm'>
                Passe o mouse em cima de uma skill para saber o seu nome e o meu tempo de experiência.
            </h3>

            <div className='grid grid-cols-4 gap-8 mt-36 max-[320px]:mt-52 xl:pt-24'>
                <Skill SkillIcon={SiJavascript} level='1 a' skillName='JavaScript / 1 ano'/>
                <Skill SkillIcon={SiTypescript} level='9 m' skillName='TypeScript / 9 meses'/>
                <Skill SkillIcon={TiHtml5} level='1 a' skillName='HTML / 1 ano'/>
                <Skill SkillIcon={IoLogoCss3} level='1 a' skillName='CSS / 1 ano'/>
                <Skill SkillIcon={SiReact} level='9 m' skillName='React / 9 meses'/>
                <Skill SkillIcon={SiNextdotjs} level='3 m' skillName='Nextjs / 3 meses'/>
                <Skill SkillIcon={IoLogoVue} level='1 m' skillName='Vue.js / 1 mês'/>
                <Skill SkillIcon={SiRedux} level='6 m' skillName='Redux / 6 meses'/>
                <Skill SkillIcon={SiBootstrap} level='6 m' skillName='Bootstrap / 6 meses'/>
                <Skill SkillIcon={SiTailwindcss} level='3 m' skillName='Tailwind css / 3 meses'/>
                <Skill SkillIcon={SiStyledcomponents} level='6 m' skillName='styled-components / 6 meses'/>
                <Skill SkillIcon={IoLogoSass} level='3 m' skillName='Sass / 3 meses'/>
                <Skill SkillIcon={SiMysql} level='1 m' skillName='MySQL / 1 mês'/>
            </div>
        </div>
    )
}