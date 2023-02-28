import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import 'swiper/css'

export function Testimonials() {
    const depoinments = ['Foi ótimo trabalhar com o Muryllo, ele demonstrou grandes habilidades como lider de stack e estava sempre disposto a receber as demandas e feedbacks da stack de design.', 'Fizemos o trabalho de conclusão do curso da Gama juntos, e o Muryllo foi o líder da minha stack. Foi uma ótima experiência trabalhar com ele, pelo fato dele ser uma pessoa serena, organizada e com um ótimo domínio de metodologias ágeis. Além de ter um vasto conhecimento em React.', 'Trabalhei com o Myrullo durante a realização do último projeto do XP-44 da Gama Academy. Mesmo em stacks diferentes, a comunicação do Muryllo foi muito assertiva e objetiva, permitindo que qualquer conflito da nossa aplicação fosse solucionado o mais rápido possível.']

    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className="absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl">
                    Recomendações
                </h3>
                <RiDoubleQuotesL size={20} />
                <div className='text-center w-3/4'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={80}
                        slidesPerGroup={1}
                        loop={true}
                        pagination={{
                            type: 'fraction',
                        }}
                        modules={[Navigation, Pagination]}

                    >
                        {depoinments.map((depoiment, i) => {
                            return (
                                <SwiperSlide key={i} className='my-4'>
                                    <p>"{depoiment}"</p>
                                </SwiperSlide>)
                        }
                        )
                        }
                        <p className='mt-4'>
                            Recomendações do Linkedin
                        </p>
                    </Swiper>

                </div>
                <RiDoubleQuotesR size={20} />
            </motion.div>
        </>

    )
}