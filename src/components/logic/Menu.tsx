import { useState } from "react";
import { Home, About, Cart } from "../../utils/magicVariables";
import { Link } from "react-router-dom";

interface Props {
  PrinSelected: boolean;
  AboutSelected: boolean;
  cartSelected: boolean;
  cantidad?: number;
}

export default function Menu({PrinSelected, AboutSelected, cartSelected, cantidad = 0}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
      setShowMenu(!showMenu);
  };

  return (
    <span className="flex flex-col w-fit justify-between items-end min-h-[156px] h-auto absolute top-3 right-3 min-[725px]:hidden">
      <button className="cursor-hand z-50" onClick={handleClick}>
        <svg viewBox="0 0 24 24" className={`size-12 rounded-full ${showMenu ? "bg-light-blue" : "bg-black/10"} p-2 block active:bg-blue`}  fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>
      {showMenu && (
        <ul className="absolute top-[4.3rem] w-44 flex flex-col items-center rounded-b-xl bg-[#e3dfda] text-black/80 text-lg font-bold z-10 animate-aparece">
          <li className={`py-2 px-3 w-full ${PrinSelected ? "bg-light-blue" : ""} ${PrinSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            
            <Link to={`${Home}`} className="block">🍽️ Carta</Link>
          </li>          
          <li className={`py-2 px-3 w-full flex flex-nowrap justify-between items-center rounded-b-xl ${cartSelected ? "bg-light-blue" : ""} ${cartSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <Link to={`${Cart}`} className="block">🛒 Carrito</Link>
            <p className="size-5 flex justify-center items-center bg-dark-blue rounded-full text-white text-sm">{(cantidad > 9) ? "+9" : cantidad}</p>
          </li>
          <li className={`py-2 px-3 w-full  ${AboutSelected ? "bg-light-blue" : ""} ${AboutSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <Link to={`${About}`} className="block">🧾 Informacion</Link>
          </li>
        </ul>
      )}
    </span>
  );
}