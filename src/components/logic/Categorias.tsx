import { Postre, PlatoFuerte, Bebida } from "../../utils/Comidas";
import Separador from "../dump/Separador";
import ProductsCards from "./ProductsCards";

export default function Categorias() {
    return (
        <main className="min-h-screen w-screen flex flex-col items-center justify-start p-6">
                <Separador
                    width="w-[90vw]"
                    text="Platos Fuertes."
                    size="text-2xl"
                    bold="font-bold"
                    italic="italic"
                />
                <ProductsCards 
                    Categorias={PlatoFuerte}
                />

                <Separador
                    width="w-[90vw]"
                    text="Postres."
                    size="text-2xl"
                    bold="font-bold"
                    italic="italic"
                />
                <ProductsCards 
                    Categorias={Postre}
                />

                <Separador
                    width="w-[90vw]"
                    text="Bebidas."
                    size="text-2xl"
                    bold="font-bold"
                    italic="italic"
                />
                <ProductsCards 
                    Categorias={Bebida}
                />

        </main>
    )
    
}