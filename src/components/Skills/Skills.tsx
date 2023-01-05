import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
    return (
        <div 
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

            <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </h3>

            <div className='grid grid-cols-3 gap-5 mt-28 max-[320px]:grid-cols-4 max-[320px]:mt-36'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </div>
    )
}

export default Skills