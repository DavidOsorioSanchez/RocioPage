import Navbar from "../components/logic/Navbar";

export default function Cart() {
    return (
        <>
            <Navbar
                homeSelected={false}
                AboutSelected={false}
                cartSelected={true}
            />
            hola carta
        </>
    )
}