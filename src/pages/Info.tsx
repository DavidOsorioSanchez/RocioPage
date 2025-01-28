import Navbar from '../components/logic/Navbar.tsx';
import CopyButton from '../components/logic/CopyButton.tsx';

export default function Info() {
    return (
        <>
            <Navbar
                homeSelected={false}
                AboutSelected={true}
                cartSelected={false}
            
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
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-10' aria-label="Gmail" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#e3dfda"></rect><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"></path><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"></path><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"></path></g></svg>
                            a.osorio@misena.edu.co
                        </span>
                    </CopyButton>
                </div>
            </main>
        </>
    )
}