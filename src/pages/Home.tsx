import FloatWhatsapp from '../components/dump/FloatWhatsapp'
import Navbar from '../components/logic/Navbar'

import './../App.css'
import Footer from '../components/dump/Footer'
import Categorias from '../components/logic/Categorias'

export default function Home() {
    return (
        <>
            <Navbar
                homeSelected={true}
                AboutSelected={false}
                cartSelected={false}
            />
            <Categorias />
            <FloatWhatsapp />
            <Footer />
        </>
    )
}