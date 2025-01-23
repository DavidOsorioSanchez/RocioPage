/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    onButtonClick: any;
    showMenu: boolean;
}

export default function PayButton({onButtonClick, showMenu }: Props) {
    return (
            <button onClick={onButtonClick}  className={`flex items-center justify-center gap-1 min-w-fit bg-[#257180] text-white rounded-2xl h-fit w-fit px-2 py-4 font-semibold hover:-skew-x-12 hover:brightness-110 ${ showMenu ? "cursor-not-allowed brightness-75" : "cursor-money"} transition-all duration-150 phone:px-8`}>
                <img src="/money.svg" alt="Comprar" className="size-6" />
                <p>{showMenu ? "Cerrar" : "Comprar"}</p>
            </button>        
    );
}