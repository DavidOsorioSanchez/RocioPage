import FloatWhatsapp from '../components/dump/FloatWhatsapp'
import Navbar from '../components/logic/Navbar'
import ProductCard from '../components/logic/ProductsCards'
import Separador from '../components/dump/Separador'
import './../App.css'
import Footer from '../components/dump/Footer'

export default function Home() {
    return (
        <>
            <Navbar
                homeSelected={true}
                AboutSelected={false}
                cartSelected={false}
            />
            <main className="min-h-screen w-screen flex flex-col items-center justify-start p-6">
                <Separador
                    width="w-[90vw]"
                    text="Menu."
                    size="text-2xl"
                    bold="font-bold"
                    italic="italic"
                />

                <ProductCard />


            </main>
            <FloatWhatsapp />
            <Footer />
        </>
    )
}