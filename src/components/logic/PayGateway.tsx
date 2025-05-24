/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";
// import React from "react";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Paygateway({Lista, precioTotal} : {Lista: any, precioTotal: number}) {
    const [verified, setVerified] = useState(false);
    const [payMode, setPayMode] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [Address, setAddress] = useState("");
    const [listaRecado, setListaRecado] = useState<any>([]);
    
    const regexNum = /^[0-9-]+$/;
    const regexAddress = /^[a-zA-Z0-9# -]+$/;

    useEffect(() => {
        if (Lista) {
            const lisaInfo = Object.keys(Lista).map((clave: string) => ({
                title: Lista[clave].title,
                cantidad: Lista[clave].cantidad
            }));
            console.log("Lista Info:", lisaInfo);

            setListaRecado(lisaInfo);
        }
    }, []);

    async function PostInfo(): Promise<void> {

        const ApiURL = import.meta.env.VITE_URLSERVIDOR as string;
        const data = JSON.stringify({
            "UserName": name,
            "UserEmail": email,
            "UserAddress": Address.toLowerCase(),
            "UserPhone": phone,
            "Lista": listaRecado,
            "TotalPagar": precioTotal
        });

        console.log("informacion de la api: " + data);
        console.log("ruta de la api: " + ApiURL);
        console.log("precio: " + precioTotal);

        // axios.post(ApiURL, data)
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

    function handleEmail(e: any) {
        setEmail(e.target.value)
    }


    function handlePhone(e: any) {
        if (regexNum.test(e.target.value)) {
            if (e.target.value.length === 4 && e.target.value.charAt(3) !== "-") {
                const value = e.target.value.slice(0, 3) + "-" + e.target.value.slice(3);
                setPhone(value);
            } else if (e.target.value.length === 8 && e.target.value.charAt(7) !== "-") {
                const value = e.target.value.slice(0, 7) + "-" + e.target.value.slice(7);
                setPhone(value);
                // }else if (e.target.value.length === 1 && e.target.value.charAt(0) !== "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
                //     setPhone("");
            } else {
                setPhone(e.target.value);
            }
        }
    }

    function handleCaptchaChange() {
        setVerified(true);
    };

    

    function handleName(e: any) {
        setName(e.target.value)
    }

    function handleDireccion(e: any) {
        if (regexAddress.test(e.target.value)) {
            setAddress(e.target.value);
        }
    }

    async function handleSubmit(e: any) {
        localStorage.setItem("+FormularioSubmited", JSON.stringify({ UserName: name, UserEmail: email, UserAddress: Address.toLowerCase, UserPhone: phone, listaRecado: listaRecado, TotalPagar: precioTotal }));
        e.preventDefault();
        setPayMode(!payMode);
    }

    return (
        <>
            {!payMode ? (
                <form onSubmit={handleSubmit} className={`w-full p-4 rounded-xl flex flex-col items-center gap-y-7 justify-center max-w-screen-tablet animate-aparece`}>
                    <span className="w-full flex justify-around items-center gap-2 ">
                        <p className="text-2xl font-semibold underline">Pago online </p>
                    
                    </span>
                    <div className="w-full flex justify-center items-center gap-6 flex-wrap">
                        <div className='w-auto min-w-48 relative'>
                            <span className={`absolute ${name ? "-top-6 left-3 scale-75" : "top-[0.40rem] left-6"} pointer-events-none font-medium flex flex-nowrap transition-all duration-200`}>
                                <p className="text-lg text-black/95">Nombre</p>
                            </span>
                            <input type="text" onChange={handleName} className={`relative outline-none w-auto h-fit p-2 border-b-2 ${name ? "border-dark-blue/70 bg-white/25" : "border-black/70 bg-dark-blue/5"} `} />
                        </div>
                        <div className='w-auto min-w-48 relative'>
                            <span className={`absolute ${email ? "-top-6 left-3 scale-75" : "top-[0.40rem] left-6"} pointer-events-none font-medium flex flex-nowrap transition-all duration-200`}>
                                <p className="text-lg text-black/95">Email</p>
                                {!name && (
                                    <p className="text-md text-[#FF8000]">*</p>
                                )}
                            </span>
                            <input type="email" onChange={handleEmail} className={`relative outline-none w-auto h-fit p-2 border-b-2 ${email ? "border-dark-blue/70 bg-white/25" : "border-black/70 bg-dark-blue/5"} `} required />
                        </div>
                        <div className='w-auto min-w-48 relative'>
                            <span className={`absolute ${Address ? "-top-6 left-3 scale-75" : "top-[0.40rem] left-6"} pointer-events-none font-medium flex flex-nowrap transition-all duration-200`}>
                                <p className="text-lg text-black/95">Direccion</p>
                                {!Address && (
                                    <p className="text-md text-[#FF8000]">*</p>
                                )}
                            </span>
                            <p className={`absolute -top-4 right-2 text-xs text-[#ff0000] ${Address ? "opacity-0" : "opacity-100"} transition-all duration-200`}>Solo Medellin - Colombia</p>
                            <input type="text" minLength={7} value={Address} onChange={handleDireccion} className={`relative outline-none uppercase w-auto h-fit p-2 border-b-2 ${Address ? "border-dark-blue/70 bg-white/25" : "border-black/70 bg-dark-blue/5"} `} required />
                        </div>
                        <div className={`w-fit flex border-b-2 flex-nowrap ${phone ? "border-dark-blue/70" : "border-black/70"} transition-all duration-200`}>
                            <span className={`p-2 flex items-center flex-nowrap gap-1 bg-white/60`}>
                                <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M62 32H2c0 5.5 1.5 10.6 4 15h52c2.6-4.4 4-9.5 4-15" fill="#2a5f9e"></path><path d="M32 2C15.5 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2z" fill="#ffe62e"></path><path d="M32 62c11.1 0 20.8-6 26-15H6c5.3 9 14.9 15 26 15" fill="#ed4c5c"></path></g></svg>
                                <p>+57</p>
                            </span>
                            <span className="relative max-w-36">
                                <p className={`w-auto absolute text-md text-black/95 top-1.5 text-nowrap left-2.5 ${phone ? "opacity-0" : "opacity-100"}`}>000-0000000</p>
                                <input type="text" minLength={12} maxLength={12} onChange={handlePhone} value={phone} className={`relative outline-none !min-w-36 w-full h-fit p-2 ${phone ? " bg-white/25" : " bg-dark-blue/5"} transition-all duration-200`} required />
                            </span>
                        </div>
                    </div>
                    <ReCAPTCHA
                        sitekey="6Ld86G8qAAAAACyGs2xeBuf_i1J3NAEhyzto_nS0"
                        onChange={handleCaptchaChange}
                    />
                    {email && Address && verified && phone ? (
                        <button onClick={PostInfo} type="submit" className="min-w-40 w-fit h-fit p-3 bg-dark-blue/85 text-white font-semibold text-lg rounded-xl hover:bg-dark-blue/80 hover:text-white/80 transition-all duration-200 active:bg-dark-blue">
                            Enviar
                        </button>
                    ) : (
                        <></>
                    )}
                </form>
            ) : (
                <article className={`w-full p-4  rounded-xl flex flex-col items-center gap-y-7 justify-center max-w-screen-tablet animate-aparece`}>
                    <p>Nombre: {name ? `${name}` : "Usuario"}</p>
                    <p>Email: {email}</p>
                    <p>Direccion: {Address}</p>
                    <p>Telefono: {phone}</p>
                    
                    {Lista && (
                        console.log(listaRecado),
                        Object.keys(listaRecado).map((clave: string) => (
                            <p key={clave}>
                                {listaRecado[clave].title} - {listaRecado[clave].cantidad}
                            </p>
                        ))
                    )}
                </article>
            )

            }
        </>
    )
}