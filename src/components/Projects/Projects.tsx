import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { SiReact, SiTypescript, SiStyledcomponents, SiNextdotjs } from 'react-icons/si'
import { GrStripe } from 'react-icons/gr'
import pokedexIcon from '../../assets/pokedex-icon.jpg'
import ecommerceIcon from '../../assets/e-commerce.png'
import andreiaIcon from '../../assets/andreiaIcon.png'

export function Projects() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
                <h3 className="absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl">
                    Projetos
                </h3>
        
                <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fafafa]/80">
                    <ProjectCard deploy='https://andreia-duarte-modas.vercel.app' repo='https://github.com/muryllohenriq/loja-andreia' cover={andreiaIcon} tag='E-Commerce' name='Andreia Duarte Modas' skills={[SiNextdotjs, SiReact, GrStripe]} summary='Meu primeiro trabalho como freelancer 🎇🎇😊. E-commerce desenvolvido com react e nextjs, sanity como o backend e stripe para o sistema de pagamentos. A estilização foi feita com CSS puro.' shadowColor='hover:shadow-[0_0_25px_#F49FBC]' underlineColor='decoration-[#F49FBC]'/>
                    <ProjectCard deploy='https://ecommerce-mh.vercel.app' repo='https://github.com/muryllohenriq/ecommerce-muryllohenriq' cover={ecommerceIcon} tag='E-Commerce' name='MH Ecommerce' skills={[SiNextdotjs, SiReact, GrStripe]} summary='E-commerce de tecnologia desenvolvido para treinar e testar meus conhecimentos para realizar freelas. Foi feito com react e nextjs, sanity no backend e stripe para o sistema de pagamentos. A estilização foi feita no CSS.' shadowColor='hover:shadow-[0_0_25px_#284B63]' underlineColor='decoration-[#284B63]'/>
                    <ProjectCard deploy='https://pokedex-gamma-pearl.vercel.app' repo='https://github.com/muryllohenriq/Pokedex' cover={pokedexIcon} tag='Web-app' name='Pokédex' skills={[SiReact, SiTypescript, SiStyledcomponents ]} summary='Pokedex realizada no XP-44, desenvolvida no react acompanhado do vite, typescript e styled-components na estilização.' shadowColor='hover:shadow-[0_0_25px_#709972]' underlineColor='decoration-[#709972]'/>
                </div>
            </motion.div>
        </>
    )
}