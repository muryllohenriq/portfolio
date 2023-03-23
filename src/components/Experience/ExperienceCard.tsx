import { motion } from 'framer-motion'

type Props = {
    cover: string;
    job: string;
    company: string;
    skill: string;
    time: string;
    summaryPoint: Array<string>;
}

export function ExperienceCard({cover, job, company, skill, time, summaryPoint}: Props) {

  return (
    <>
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] h-[450px] mt-20 max-[320px]:h-[305px] md:w-[600px] md:h-[600px] xl:w-[400px] xl:h-[450px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-scroll scrollbar'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-28 h-28 rounded-full max-[320px]:-mt-5 xl:w-[100px] xl:h-[100px] object-cover object-center' src={cover} 
        alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>{job}</h4>
            <p className='font-bold text-lg'>{company}</p>
            <div className='flex space-x-2 my-2'>
                <img src={`https://skillicons.dev/icons?i=${skill}&perline=9`} alt={skill} />
            </div>
            <p className='uppercase py-2 text-gray-300'>{time}</p>

            <ul className='list-disc space-y-2 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 max-[428px]:hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#fafafa]/80'>
            {summaryPoint.map((item, i) => {
               return <li key={item}>{summaryPoint[i]}</li>
            })}
            </ul>
        </div>
    </article>
    </>
  )
}