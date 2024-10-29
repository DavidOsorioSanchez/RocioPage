/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function Paygateway() {
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");

    function handleEmail(e: any) {  
        setEmail(e.target.value)
    }

    function handleDireccion(e: any) {  
        setDireccion(e.target.value)
    }

    function onChange (value: any) {
        console.log(value);
    };

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log(email, direccion);
    }
    

    return (
        <form className='w-full p-4 bg-dark-blue/15 rounded-xl flex flex-col items-center gap-y-7 justify-center max-w-screen-tablet animate-aparece'>
            <span className="w-full flex justify-around items-center gap-2 ">
                <p className="text-2xl font-semibold underline">Pago online </p>
                <input type="number" minLength={1} min={1} maxLength={2} max={10} className="w-fit min-w-36 h-fit min-h-10 p-2 flex justify-center items-center bg-dark-blue/50 rounded-xl text-center text-lg font-semibold text-white border-none placeholder:text-white/80 placeholder:text-sm placeholder:text-nowrap focus:outline-none" placeholder="cuantas ordenes?" required/>
            </span>
            <div className="w-full flex justify-center items-center gap-6 flex-wrap">
                <span className='w-auto min-w-48 relative'>
                    <p className={`absolute ${email ? "-top-6 left-3 scale-75" : "top-[0.40rem] left-6"} pointer-events-none text-lg font-medium text-black/95 transition-all duration-200`}>Email</p>
                    <input type="text" onChange={handleEmail} className={`relative outline-none w-auto h-fit p-2 bg-dark-blue/5 border-b-2 ${email ? "border-dark-blue/70" : "border-black/70"} `} required/>
                </span>
                <span className='w-auto min-w-48 relative'>
                    <p className={`absolute ${direccion ? "-top-6 left-3 scale-75" : "top-[0.40rem] left-6"} pointer-events-none text-lg font-medium text-black/95 transition-all duration-200`}>Direccion</p>
                    <input type="text" onChange={handleDireccion} className={`relative outline-none w-auto h-fit p-2 bg-dark-blue/5 border-b-2 ${direccion ? "border-dark-blue/70" : "border-black/70"} `} required/>
                </span>
                
                
            </div>
            <ReCAPTCHA
                sitekey="6Ld86G8qAAAAACyGs2xeBuf_i1J3NAEhyzto_nS0"
                onChange={onChange}
            />
            <button type="submit" onClick={handleSubmit} className="min-w-40 w-fit h-fit p-3 bg-dark-blue/85 text-white font-semibold text-lg rounded-xl hover:bg-dark-blue/80 hover:text-white/80 transition-all duration-200 active:bg-dark-blue">
                Enviar
            </button>
        </form>
    )
}