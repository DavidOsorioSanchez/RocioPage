import '../../App.css';
import ButtonNavigation from '../dump/ButtonNavigation.tsx';
import Menu from './Menu.tsx';
import LadleIcon from '/ladle-icon.svg';
import { useEffect, useState } from 'react';
import { Home, About, Cart, TituloPagina } from '../../utils/magicVariables.ts';

interface Props {
    homeSelected: boolean;
    AboutSelected: boolean;
    cartSelected: boolean;
}

export default function Navbar({ homeSelected, AboutSelected, cartSelected }: Props) {
    const [totalCantidad, setTotalCantidad] = useState(0);

    useEffect(() => {
        let sumaTotal = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if (!clave) {
                continue;
            }
            const valorString = localStorage.getItem(clave);
            if (!valorString) {
                continue;
            }
            const objeto = JSON.parse(valorString);

            if (objeto && objeto.cantidad) {
                sumaTotal += objeto.cantidad;
            }
        }
        setTotalCantidad(sumaTotal);
    }, []);

    return (
        <nav className="min-h-16 sticky top-0 px-2 flex items-center justify-between bg-[#e3dfda]/90 shadow-xl z-30 max-w-screen animate-bajada min-[340px]:px-4">
            <span className="w-fit flex items-center gap-2 text-black/80 font-bold flex-nowrap py-2 ">
                <img src={LadleIcon} alt="ladle" className="size-16" />
                <p id="Caveat" className="text-3xl block">{TituloPagina}</p>
            </span>
            <div className="flex items-center gap-2 flex-nowrap ">
                <ButtonNavigation links={`${Home}`} title="🍽️ Carta" selected={homeSelected} />
                <ButtonNavigation links={`${Cart}`} title='🛒 Carrito' cantidad={totalCantidad} selected={cartSelected} />
                <ButtonNavigation links={`${About}`} title="🧾 Informacion" selected={AboutSelected} />
                <Menu
                    PrinSelected={homeSelected}
                    AboutSelected={AboutSelected}
                    cartSelected={cartSelected}
                    cantidad={totalCantidad}
                />
            </div>
        </nav>

    )
}