import { useState } from "react";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <span className="flex flex-col w-fit justify-between items-end min-h-[200px] h-auto absolute top-3 right-3 min-[685px]:hidden">
      <button className="cursor-hand z-50 active:bg-dark-blue" onClick={handleClick}>
        <img src="/menu.svg" alt="menu" className="size-12 rounded-full bg-black/10 p-2 block " />
      </button>
      {showMenu && (
        <ul className="flex flex-col items-center rounded-b-xl bg-black/10 text-black/80 text-lg font-bold z-10">
          <li className="py-2 px-3 hover:bg-light-blue">
            <a href="/" className="block">🏠 principal</a>
          </li>
          <li className="py-2 px-3 hover:bg-light-blue">
            <a href="/trabajos" className="block">🧾 Trabajos</a>
          </li>
          <li className="py-2 px-3 rounded-b-xl hover:bg-light-blue">
            <a href="/contactanos" className="block">📲 contactanos</a>
          </li>
        </ul>
      )}
    </span>
  );
}