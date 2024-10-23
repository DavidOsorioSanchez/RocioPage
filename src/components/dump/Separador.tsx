interface Props {
    width: string;
    text: string;
    size: "text-2xl" | "text-xl" | "text-lg" | "text-md";
    bold?: "font-bold" | "font-semibold" | "font-medium";
    italic?: "italic";
}

export default function Separador({ width, text, size, bold, italic }: Props) {
    return (
        <div className={`relative flex flex-col items-center justify-center w-screen animate-aparece my-8`}>
            <span className={`${width} min-w-0 bg-black/50 min-h-0.5 relative`}>  </span>
            <p className={` absolute ${size} ${bold} ${italic} text-black/90 bg-white px-3 h-fit`}>{text}</p>
        </div>
    )
}