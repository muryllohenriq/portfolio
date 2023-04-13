import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'

export function Testimonials() {
    const depoinments = ['Fizemos o trabalho de conclusão do curso da Gama juntos, e o Muryllo foi o líder da minha stack. Foi uma ótima experiência trabalhar com ele, pelo fato dele ser uma pessoa serena, organizada e com um ótimo domínio de metodologias ágeis. Além de ter um vasto conhecimento em React.', 'Trabalhei com o Murillo durante a realização do último projeto do XP-44 da Gama Academy. Mesmo em stacks diferentes, a comunicação do Muryllo foi muito assertiva e objetiva, permitindo que qualquer conflito da nossa aplicação fosse solucionado o mais rápido possível.', 'O Muryllo foi de longe o melhor líder de trabalho em grupo que eu já tive. Compreensível, solícito, empático... Parava o que estava fazendo para ajudar. Mesmo comigo que tive dificuldades não deixou de estender a mão. Espero que tenhamos novas oportunidades de trabalhar juntos. Qualquer um que o tiver como líder ou colega de equipe estará muito bem acompanhado.', 'Muryllo foi líder da stack de Front-End no último projeto da Gama Academy, entregou o trabalho à contento e no prazo, foi bom trabalhar com ele, não tem problemas em buscar conteúdo e tem facilidade de aprendizado.']

    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className="absolute top-20 uppercase tracking-[20px] max-[320px]:tracking-[8px] max-sm:tracking-[10px] text-[#BFBFBF] text-2xl">
                    Recomendações
                </h3>

                <div className='text-center w-3/4 max-[320px]:w-72'>

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
                                <SwiperSlide key={i} className='my-4 max-[320px]:mt-44'>
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

            </motion.div>
        </>

    )
}