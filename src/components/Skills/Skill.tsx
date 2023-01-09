type Props = {
  SkillIcon: React.ElementType,
  level: string
}

export function Skill({ SkillIcon, level}: Props) {
  const CustomTag = SkillIcon

  return (
    <>
    <div className='group relative flex cursor-pointer'>
      <CustomTag className=' border border-[#878D9B] object-cover w-20 h-20 max-[320px]:w-16 max-[320px]:h-16 filter group-hover:grayscale transition duration-300 ease-in-out'/>
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-black h-20 w-20 max-[320px]:w-16 max-[320px]:h-16  z-0">
        <div className="flex items-center justify-center">
          <p className='text-2xl font-bold text-[#D72638] opacity-100'>
            {level}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}