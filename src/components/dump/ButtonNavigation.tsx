
interface Props {
	links: string;
    title: string;
    selected: boolean;
}

export default function ButtonNavigation({ links, title, selected }: Props) {
    return (
        <a href={links} className={`px-4 w-fit hidden items-center font-bold border-b-2 ${selected ? "border-blue" : "border-black/30"} text-nowrap hover:border-dark-blue hover:transition-all hover:duration-300 transition-all duration-300 min-[725px]:flex`}>
            {title}
        </a>
    )
}