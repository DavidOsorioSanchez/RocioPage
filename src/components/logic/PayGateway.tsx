/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function Paygateway() {

    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");

    function handleEmail(e: any) {  
        setEmail(e.target.value)
    }

    function handleDireccion(e: any) {  
        setDireccion(e.target.value)
    }


    return (
        <form className='w-full p-4 bg-dark-blue/15 rounded-xl flex flex-col items-center gap-y-12 justify-center max-w-screen-tablet animate-aparece'>
            <span className="w-full flex justify-around items-center gap-2 ">
                <p className="text-xl font-semibold underline">Pago online </p>
                <input type="number" minLength={1} min={1} maxLength={2} max={10} className="w-fit min-w-36 h-fit min-h-10 p-2 flex justify-center items-center bg-dark-blue/50 rounded-xl text-center text-lg font-semibold text-white border-none placeholder:text-white/80 placeholder:text-sm placeholder:text-nowrap focus:outline-none" placeholder="cuantas ordenes?" />
            </span>
            <div className="w-full flex justify-center gap-x-10">
                <span className='w-auto min-w-48  relative'>
                    <p className={`absolute ${email ? "-top-6 left-3 scale-75" : "top-[0.40rem] left-6"} pointer-events-none text-lg font-medium text-black/95 transition-all duration-200`}>Email</p>
                    <input type="text" onChange={handleEmail} className={`absolute outline-none w-auto h-fit p-2 bg-dark-blue/5 border-b-2 ${email ? "border-dark-blue/70" : "border-black/70"} `}/>
                </span>
                <span className='w-auto min-w-48 relative'>
                    <p className={`absolute ${direccion ? "-top-6 left-3 scale-75" : "top-[0.40rem] left-6"} pointer-events-none text-lg font-medium text-black/95 transition-all duration-200`}>Direccion</p>
                    <input type="text" onChange={handleDireccion} className={`absolute outline-none w-auto h-fit p-2 bg-dark-blue/5 border-b-2 ${direccion ? "border-dark-blue/70" : "border-black/70"} `}/>
                </span>
                
            </div>
            <div className="w-full grid grid-cols-2 justify-center items-center gap-2 tablet:grid-cols-3 laptop:grid-cols-4">
                
            </div>
        </form>
    )
}