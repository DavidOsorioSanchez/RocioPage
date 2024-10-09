import { useState } from "react";

interface Props {
  PrinSelected: boolean;
  AbouSelected: boolean;
}

export default function Menu({PrinSelected, AbouSelected}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
      setShowMenu(!showMenu);
  };

  return (
    <span className="flex flex-col w-fit justify-between items-end min-h-[156px] h-auto absolute top-3 right-3 min-[725px]:hidden">
      <button className="cursor-hand z-50" onClick={handleClick}>
        <img src="/menu.svg" alt="menu" className={`size-12 rounded-full ${showMenu ? "bg-light-blue" : "bg-black/10"} p-2 block active:bg-blue`} />
      </button>
      {showMenu && (
        <ul className="flex flex-col items-center rounded-b-xl bg-[#e3dfda] text-black/80 text-lg font-bold z-10 animate-aparece ">
          <li className={`py-2 px-3 w-full ${PrinSelected ? "bg-light-blue" : ""} ${PrinSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <a href="/" className="block">🍽️ Carta</a>
          </li>
          <li className={`py-2 px-3 w-full ${AbouSelected ? "bg-light-blue" : ""} ${AbouSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <a href="/informacion" className="block">🧾 Informacion</a>
          </li>
        </ul>
      )}
    </span>
  );
}