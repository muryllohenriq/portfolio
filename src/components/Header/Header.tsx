import { SocialIcon } from "react-social-icons"
import { motion } from 'framer-motion'

export function Header() {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
             initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
             }}
             animate={{
                x: 0,
                opacity: 1,
                scale: 1,
             }}
             transition={{
                duration: 1.5,
             }}
             className='flex flex-row items-center'>
                <SocialIcon url="https://www.linkedin.com/in/muryllohenrique/"
                    fgColor='gray'
                    bgColor='transparent'
                    target={"_blank"}               
                />
                <SocialIcon url="https://github.com/muryllohenriq"
                    fgColor='gray'
                    bgColor='transparent'
                    target={"_blank"}
                />
                <SocialIcon url="https://api.whatsapp.com/send?phone=5564996959519"
                    fgColor='gray'
                    bgColor='transparent'
                    target={"_blank"}
                />
            </motion.div>

             <a href={"#contact"}>
            <motion.div  
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center text-[#878D9B] cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    />
                <p className='uppercase hidden md:inline-flex text-sm text-[#878D9B]'>Entre em contato</p>
            </motion.div>
                    </a>
        </header>
    )
}