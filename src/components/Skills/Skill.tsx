import { motion } from "framer-motion"

type Props = {
  SkillIcon: React.ElementType,
  level: string,
  skillName: string
}

export function Skill({ SkillIcon, level, skillName }: Props) {
  const CustomTag = SkillIcon

  return (
    <>
      <abbr title={skillName}>
        <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.3, type: 'tween' }}
           className='group relative flex cursor-pointer'>
            <CustomTag className='object-cover w-16 h-16' />
            <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-[#050505] h-16 w-16 z-0">
              <div className="flex items-center justify-center">
                <p className='text-2xl font-bold text-[#D72638]'>
                  {level}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </abbr>
    </>
  )
}