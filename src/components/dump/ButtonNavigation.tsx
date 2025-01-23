import { Link } from "react-router-dom";

interface Props {
	links: string;
    title: string;
    selected: boolean;
    cantidad?: number;
}

export default function ButtonNavigation({ links, title, selected, cantidad }: Props) {
    return (
        <Link to={links} className={`px-4 w-fit hidden items-center flex-nowrap gap-x-2 font-bold border-b-2 ${selected ? "border-blue" : "border-black/30"} text-nowrap hover:border-dark-blue hover:transition-all hover:duration-300 transition-all duration-300 min-[725px]:flex`}>
            <p>{title}</p>
            {(cantidad !== undefined) && (<p className="size-5 flex justify-center items-center bg-dark-blue rounded-full text-white font-normal text-sm">{(cantidad > 9) ? "+9" : cantidad}</p>)}
        </Link>
    )
}