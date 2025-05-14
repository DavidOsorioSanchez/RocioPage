interface Props {
    width: string;
    text: string;
    size: "text-2xl" | "text-xl" | "text-lg" | "text-md";
    bold?: "font-bold" | "font-semibold" | "font-medium";
    italic?: "italic";
    position?: "items-center" | "items-start" | "items-end";
}

export default function Separador({ width, text, size, bold, italic, position="items-center" }: Props) {
    return (
        <div className={`relative flex flex-col ${position} justify-center w-screen animate-aparece my-8`}>
            <span className={`${width} min-w-0 bg-black/50 min-h-0.5 relative flex items-center justify-center`}> <p className={` absolute ${size} ${bold} ${italic} text-black/90 bg-[#fefdff] px-3 h-fit`}>{text}</p> </span>
        </div>
    )
}