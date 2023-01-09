import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

export function Contact() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:muryllo.henrique@hotmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
    };

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-[#878D9B] text-2xl">
                Contato
            </h3>

            <div className="flex flex-col space-y-4 mt-20">
                <h4 className="text-3xl font-semibold text-center max-[320px]:hidden max-[360px]:text-2xl max-[360px]:w-80 max-[360px]:mx-auto">
                    I have got just what you need.{" "}
                    <span className="decoration-[#D72638]/70 underline">
                        Lets Talk.
                    </span>
                </h4>

                <div className="space-y-3 max-[320px]:space-y-1">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#D72638] h-7 w-7 animate-pulse" />
                        <p className="text-xl">64-996959519</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#D72638] h-7 w-7 animate-pulse" />
                        <p className="text-xl">muryllo.henrique@hotmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#D72638] h-7 w-7 animate-pulse" />
                        <p className="text-xl">Catalão, Goiás</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-1 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input {...register('name')} placeholder="Name" className="contactInput max-[320px]:h-14" type="text" />
                        <input {...register('email')} placeholder="E-mail" className="contactInput max-[320px]:h-14" type="email" />
                    </div>

                    <input {...register('subject')} placeholder="Subject" className="contactInput max-[320px]:h-14" type="text" />

                    <textarea {...register('message')} placeholder="Message" className="contactInput resize-none max-[320px]:h-14" />
                    <button type="submit" className="bg-[#D72638] py-5 max-[428px]:py-3 max-[320px]:py-2 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}