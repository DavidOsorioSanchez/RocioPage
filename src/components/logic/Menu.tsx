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
      <svg viewBox="0 0 24 24" className={`size-12 rounded-full ${showMenu ? "bg-light-blue" : "bg-black/10"} p-2 block active:bg-blue`}  fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
      {showMenu && (
        <ul className="flex flex-col items-center rounded-b-xl bg-[#e3dfda] text-black/80 text-lg font-bold z-10 animate-aparece ">
          <li className={`py-2 px-3 w-full ${PrinSelected ? "bg-light-blue" : ""} ${PrinSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <a href="/" className="block">🍽️ Carta</a>
          </li>
          <li className={`py-2 px-3 w-full rounded-b-xl ${AbouSelected ? "bg-light-blue" : ""} ${AbouSelected ? "hover:bg-blue" : "hover:bg-light-blue"}`}>
            <a href="/informacion" className="block">🧾 Informacion</a>
          </li>
        </ul>
      )}
    </span>
  );
}