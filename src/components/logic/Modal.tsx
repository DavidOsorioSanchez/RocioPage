/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import PayButton from '../dump/PayButton.tsx';
import Paygateway from './PayGateway.tsx';
import CartButton from './CartButton.tsx';
import { MaximoPedidos, tiempoDeCarruselModal } from '../../utils/magicVariables.ts';
import { Slide, ToastContainer, toast } from 'react-toastify';

interface Props {
    id: number;
    title: string;
    price: number;
    descripcion: string;
    imagenes: string[];
    picante: boolean;
    categoria: string[];
    porciones: number;
    URL: string;
    onOpen: any;
}

export default function Modal({
    id,
    title,
    price,
    descripcion,
    imagenes,
    picante,
    categoria,
    URL,
    onOpen
}: Props) {
    const [Picture] = useState(imagenes);
    const [showMenu, setShowMenu] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [indiceActual, setIndiceActual] = useState(0);
    const [maximaCantidad, setMaximaCantidad] = useState(false);

    if (Picture.length > 2) {
        return null;
    } else {
        useEffect(() => {
            const intervalo = setInterval(() => {
                setIndiceActual((prevIndice) => {
                    const nuevoIndice = (prevIndice + 1) % Picture.length;
                    return nuevoIndice;
                });
            }, tiempoDeCarruselModal);

            return () => clearInterval(intervalo);
        }, [Picture]);
    }
    

    const handleButtonClick = (clicked: boolean) => {
        if (clicked) {
            setShowAdd(false);
        }
        setShowMenu(clicked);
    };

    const handleButtonAdd = (clicked: boolean) => {

        if (localStorage.getItem(title)) {
            const item = JSON.parse(localStorage.getItem(title) || '{}');
            const cantidad: number = item.cantidad + 1;
            if(cantidad > MaximoPedidos) {
                setMaximaCantidad(true);
                localStorage.setItem(title, JSON.stringify({id: id, title: title, price: price, image: imagenes[0], cantidad: MaximoPedidos}));
            } else {
                localStorage.setItem(title, JSON.stringify({id: id, title: title, price: price, image: imagenes[0], cantidad: cantidad}));
            }
            if(cantidad <= MaximoPedidos) {
                
                toast.success(`Se han agregado ${cantidad} unidades de ${title}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            }
            if(cantidad > MaximoPedidos) {
                
                toast.warning(`Has llegado al limite de ${title}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                
            }
            if (clicked) {
                setShowMenu(false);
            }
            setShowAdd(clicked);
            return;
        }
        localStorage.setItem(title, JSON.stringify({id:id, title: title, price: price, image: imagenes[0], cantidad: 1}));
        
        toast.success('Se a agregado al carrito.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });

        if (clicked) {
            setShowMenu(false);
        }
        
        setShowAdd(clicked);
    };

    const foto = Picture[indiceActual];
    return (
        <section className='w-screen h-screen fixed z-40' key={id}>
            <button onClick={onOpen} className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-40 animate-aparece cursor-default max-[800px]:hidden"></button>
            <article className="fixed flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen rounded-none flex-1 overflow-y-scroll bg-white z-50 animate-aparece min-[800px]:flex-row min-[800px]:max-w-[80vw] min-[800px]:h-[95vh] min-[800px]:overflow-y-hidden min-[800px]:rounded-md">
                <button onClick={onOpen} className="size-12 p-1 fixed bg-white/75 top-4 left-4 border-2 border-black/50 rounded-full hover:blur-[1px] hover:brightness-125 transition-all duration-150">
                    <img src="/back.svg" alt="Back" className="size-full" />
                </button>
                <img src={`/recetas/${foto}`} alt={`Una foto de ${title}`} className="!static w-full h-[40vh] rounded-none aspect-16/9 object-cover border-b-2 border-dark-blue/70 min-[800px]:w-screen  min-[800px]:rounded-l-md  min-[800px]:max-h-screen min-[800px]:max-w-[40%] min-[800px]:aspect-9/16 min-[800px]:border-b-0 min-[800px]:border-r-2 min-[800px]:min-h-full" />
                <section className='absolute top-[40vh] flex justify-center items-center w-full h-auto p-4  min-[800px]:relative min-[800px]:top-0 min-[800px]:w-full min-[800px]:overflow-y-auto'>
                    <div className='flex flex-col justify-start items-center flex-shrink w-screen py-1  gap-y-4 gap-x-0  min-[800px]:w-full min-[800px]:h-auto min-[800px]:justify-center phone:gap-y-6 phone:gap-x-3'>
                        <div className='w-full p-4 bg-dark-blue/15 rounded-xl flex flex-col items-center max-w-screen-tablet '>
                            <header className="flex flex-wrap gap-4 items-center justify-center py-2 px-4">
                                <div className="flex gap-2 text-center items-center flex-nowrap">
                                    <span className="flex gap-2">
                                        <h1 className="text-2xl font-bold text-center text-nowrap">
                                            {title}
                                        </h1>
                                        <p className="text-center text-xl font-bold text-nowrap underline">
                                            <span>$</span>{price} <span className="text-sm text-black/75">Mil</span>
                                        </p>
                                    </span>
                                    {
                                        picante && (
                                            <img src="/spicy.svg" alt="Picante" className="w-8 h-8" />
                                        )
                                    }
                                </div>
                                <span className="flex justify-center flex-wrap gap-2">
                                    {categoria.map((categoria: string) => (
                                        <span className="text font-semibold text-white bg-dark-blue/70  py-2 px-4 rounded-full">
                                            {categoria}
                                        </span>
                                    ))}
                                </span>
                            </header>

                            <p className="text-center text-md font-medium">
                                {descripcion}
                            </p>
                            {/* <div className="flex flex-wrap gap-2 items-center justify-center py-2 px-4">
                                <span className="text font-semibold text-white bg-dark-blue/70  py-2 px-4 rounded-full">
                                    Porciones: {porciones}
                                </span>
                                <span className="text font-semibold text-white bg-dark-blue/70  py-2 px-4 rounded-full">
                                    Picante: {picante ? 'Si' : 'No'}
                                    </span>
                            </div> */}
                            <div className='w-fit mt-2 px-1 py-4 bg-dark-blue/15 rounded-xl flex flex-wrap flex-row text-nowrap items-center gap-x-1 gap-y-2 justify-center max-w-screen-tablet phone:px-8 phone:gap-x-8 phone:rounded-xl min-[800px]:hidden'>
                                <CartButton showAdd={showAdd} onAddCard={handleButtonAdd} maximaCantidad={maximaCantidad}/>
                                <PayButton showMenu={showMenu} onButtonClick={handleButtonClick} />
                                <a href={URL} target="_blank" rel="contactar">
                                    <button className='flex items-center justify-center gap-1 min-w-fit bg-[#5BD066] text-white rounded-2xl h-fit w-fit px-2 py-4 font-semibold hover:-skew-x-12 cursor-help hover:brightness-110 transition-all duration-150 phone:px-8'>
                                        <img src="whatsapp-outline.svg" alt="Contactar" className="size-6" />
                                        <p>Contactar</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <article className='w-full py-4 bg-dark-blue/15 rounded-b-xl flex !flex-wrap flex-row text-nowrap items-center gap-y-2 justify-center max-w-screen-tablet px-8 gap-x-8 rounded-xl max-[800px]:hidden'>
                            <CartButton showAdd={showAdd} onAddCard={handleButtonAdd} maximaCantidad={maximaCantidad}/>
                            <PayButton showMenu={showMenu} onButtonClick={handleButtonClick} />
                            <a href={URL} target="_blank" rel="contactar">
                                <button className='flex items-center justify-center gap-1 min-w-fit bg-[#5BD066] text-white rounded-2xl h-fit w-fit px-2 py-4 font-semibold hover:-skew-x-12 cursor-help hover:brightness-110 transition-all duration-150 phone:px-8'>
                                    <img src="whatsapp-outline.svg" alt="Contactar" className="size-6" />
                                    <p>Contactar</p>
                                </button>
                            </a>
                        </article>
                        {showMenu && !showAdd && (
                            <Paygateway
                                title={title}
                                esCarrito={false}
                            />
                        )}
                        {showAdd && !showMenu && (
                            <>
                                <div className='hidden !absolute w-fit z-50 bg-dark-blue min-[530px]:block'>
                                    <ToastContainer
                                        position="bottom-center"
                                        autoClose={5000}
                                        hideProgressBar
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light"
                                        transition={Slide}
                                    /> 
                                </div>
                                <div className='block !absolute w-fit z-50 bg-dark-blue min-[530px]:hidden'>
                                    <ToastContainer
                                        position="top-center"
                                        autoClose={5000}
                                        hideProgressBar
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light"
                                        transition={Slide}
                                    /> 
                                </div>
                            </>
                            
                        )}
                    </div>
                </section>
            </article>
        </section>
    )

}