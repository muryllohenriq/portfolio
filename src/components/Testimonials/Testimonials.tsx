import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri'

export function Testimonials() {

    return (
        <>
            <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className="absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl">
                    Recomendações
                </h3>
                <RiSingleQuotesL size={40}/>
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
                    <SwiperSlide>
                        <p>'Foi ótimo trabalhar com o Muryllo, ele demonstrou grandes habilidades como lider de stack e estava sempre disposto a receber as demandas e feedbacks da stack de design.'</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>'Fizemos o trabalho de conclusão do curso da Gama juntos, e o Muryllo foi o líder da minha stack. Foi uma ótima experiência trabalhar com ele, pelo fato dele ser uma pessoa serena, organizada e com um ótimo domínio de metodologias ágeis. Além de ter um vasto conhecimento em React.'</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p>'Trabalhei com o Myrullo durante a realização do último projeto do XP-44 da Gama Academy. Mesmo em stacks diferentes, a comunicação do Muryllo foi muito assertiva e objetiva, permitindo que qualquer conflito da nossa aplicação fosse solucionado o mais rápido possível.'</p>
                    </SwiperSlide>
                    Recomendações do Linkedin
                </Swiper>
                
            </div>
            <RiSingleQuotesR size={40}/>
            </div>
        </>

    )
}