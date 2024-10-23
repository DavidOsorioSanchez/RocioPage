import Navbar from '../components/dump/Navbar.tsx';
import CopyButton from '../components/logic/CopyButton.tsx';

export default function Info() {
    return (
        <>
            <Navbar
                homeSelected={false}
                AbouSelected={true}
            />
            <main className="flex flex-col min-h-screen w-screen items-center justify-center p-4 gap-4 border-b-2 border-black/10">
                <section className="flex flex-wrap-reverse gap-4 items-center justify-center">
                    <div className="max-w-2xl flex flex-col gap-4 items-center mx-6">
                        <p className="text-xl font-semibold animate-aparecerLadoIzquierdo delay-150">Hola, Mi nombre es <i className="text-dark-blue underline decoration-solid">Rocio Sánchez.</i></p>

                        <p className="animate-aparecerLadoDerecho delay-200">
                            Descubre la deliciosa variedad de comidas internacionales que tenemos para ofrecerte.
                        </p>
                        <p className="animate-aparecerLadoIzquierdo delay-250">
                            Queremos ofrecerte platos frescos, deliciosos y elaborados con amor.
                            Con nuestra amplia selección de opciones,
                            encontrarás una comida que te guste y que te satisfaga.
                        </p>
                    </div>
                    <div className="-scale-x-100">
                        <img src="/mamiFoto.png" alt="foto Rocio" className="max-w-[20rem] max-h-[20rem] object-scale-down !aspect-square animate-aparecerLadoDerecho delay-100" />
                    </div>
                </section>
                <div className="w-screen flex flex-col gap-6 gap-x-10 items-center justify-center min-[560px]:flex-row">
                    <CopyButton textoCopiar="310 4745978" width="w-52" animation="animate-aparecerLadoIzquierdo">
                        <span className="w-fit text-xl font-bold flex items-center gap-2 text-black/80">
                            <img src="/whatsapp.svg" alt="whatsapp icono" className="size-10 " />
                            310 4745978
                        </span>
                    </CopyButton>
                    <CopyButton textoCopiar="a.osorio@misena.edu.co" width="w-64" animation="animate-aparecerLadoDerecho">
                        <span className="w-fit text-lg font-bold flex items-center text-black/80">
                            <img src="/gmail.svg" alt="gmail icono" className="size-10 " />
                            a.osorio@misena.edu.co
                        </span>
                    </CopyButton>
                </div>
            </main>
        </>
    )
}