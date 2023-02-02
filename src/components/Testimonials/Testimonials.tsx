import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'



export function Testimonials() {
    const testimonials = [{ testimonial: 'Muryllo is a awesome developer', recommendation: 'Linkedin Recommendations'},
    { testimonial: 'Muryllo is a awesome developer', recommendation: 'Linkedin Recommendations'}]
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index: number) => {
        setCurrentIndex(index);
    }
    

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-[#BFBFBF] text-2xl">
                Recomendações
            </h3>

            {testimonials.length && (
                <>
                    <div className="flex justify-center items-center"> {/* app__testimonial-item */}
                        <img src="https://avatars.githubusercontent.com/u/105292489?v=4" alt="recomendação" />
                        <div className=""> {/* app__testimonial-content */}
                            <p>{testimonials[0].testimonial}</p>
                            <div>
                                <h4>{testimonials[0].recommendation}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center"> {/* app__testimonial-btns */}
                        <div className="flex justify-center items-center" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>
                        <div className="flex justify-center items-center" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}