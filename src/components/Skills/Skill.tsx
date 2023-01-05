type Props = {

}

function Skill({ }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <img
        src="https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
        className='rounded-full border border-gray-500 object-cover w-20 h-20 max-[320px]:w-16 max-[320px]:h-16 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 max-[320px]:w-16 max-[320px]:h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className='text-2xl font-bold text-black opacity-100'>
            100%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill