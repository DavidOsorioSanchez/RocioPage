import Navbar from "../components/logic/Navbar";

export default function Cart() {
    return (
        <>
            <Navbar
                homeSelected={false}
                AboutSelected={false}
                cartSelected={true}
            />
            <main className="min-h-screen w-screen flex flex-col items-center justify-start p-6">

            </main>
        </>
    )
}