import { useEffect, useState } from "react";

interface Props {
  PrinSelected: boolean;
  TrabSelected: boolean;
  ContSelected: boolean;
}

export default function Menu({PrinSelected, TrabSelected, ContSelected}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
      setShowMenu(!showMenu);
  };

  return (
    <span className="flex flex-col w-fit justify-between items-end min-h-[200px] h-auto absolute top-3 right-3 min-[685px]:hidden">
      <button className="cursor-hand z-50" onClick={handleClick}>
        <img src="/menu.svg" alt="menu" className={`size-12 rounded-full ${showMenu ? "bg-light-blue" : "bg-black/10"} p-2 block active:bg-blue`} />
      </button>
      {showMenu && (
        <ul className="flex flex-col items-center rounded-b-xl bg-black/10 text-black/80 text-lg font-bold z-10 animate-aparece ">
          <li className={`py-2 px-3 w-full ${PrinSelected ? "bg-light-blue" : ""} ${PrinSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <a href="/" className="block">🏠 Principal</a>
          </li>
          <li className={`py-2 px-3 w-full ${TrabSelected ? "bg-light-blue" : ""} ${TrabSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <a href="/trabajos" className="block">🧾 Trabajos</a>
          </li>
          <li className={`py-2 px-3 w-full rounded-b-xl ${ContSelected ? "bg-light-blue" : ""} ${ContSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <a href="/contactanos" className="block">📲 Contactanos</a>
          </li>
        </ul>
      )}
    </span>
  );
}