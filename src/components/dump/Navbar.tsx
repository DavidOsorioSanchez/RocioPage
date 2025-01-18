import '../../App.css';
import ButtonNavigation from './ButtonNavigation.tsx';
import Menu from './../logic/Menu.tsx';
import LadleIcon from '/ladle-icon.svg';

interface Props {
	homeSelected: boolean;
	AboutSelected: boolean;
    cartSelected: boolean;
}

export default function Navbar({ homeSelected, AboutSelected, cartSelected }: Props) {
    return (
        <nav className="min-h-16 sticky top-0 px-2 flex items-center justify-between bg-[#e3dfda]/90 shadow-xl z-30 max-w-screen animate-bajada min-[340px]:px-4">
            <span className="w-fit flex items-center gap-2 text-black/80 font-bold flex-nowrap py-2 ">
                <img src={LadleIcon} alt="ladle" className="size-16" />
                <p id="Caveat" className="text-3xl block">Comida a un click</p>
            </span>
            <div className="flex items-center gap-2 flex-nowrap ">
                <ButtonNavigation links="/" title="🍽️ Carta" selected={homeSelected} />
                <ButtonNavigation links="/informacion" title="🧾 Informacion" selected={AboutSelected} />
                <ButtonNavigation links='/' title='🛒 Carrito' cantidad={100} selected={cartSelected}/>
                <Menu
                    PrinSelected={homeSelected}
                    AboutSelected={AboutSelected}
                    cartSelected={cartSelected}
                    cantidad={100}
                />
            </div>
        </nav>

    )
}