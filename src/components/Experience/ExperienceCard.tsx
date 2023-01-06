import { motion } from 'framer-motion'

export function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] h-[450px] mt-20 max-[320px]:h-[305px] md:w-[600px] md:h-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-28 h-28 rounded-full max-[320px]:-mt-5 xl:w-[150px] xl:h-[150px] object-cover object-center' src="https://avatars.githubusercontent.com/u/105292489?v=4" 
        alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Freelancer</h4>
            <p className='font-bold text-xl'>Myself</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
            </div>
            <p className='uppercase py-2 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-2 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 max-[428px]:hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}