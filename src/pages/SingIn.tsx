import Navbar from "../components/logic/Navbar";
import ResponsiveImage from "../components/logic/ResponsiveImage";


export default function SingIn() {
    
    return (
        <>
            <Navbar
                AboutSelected={false}
                cartSelected={false}
                homeSelected={false}
            />
            <main className="">
                <ResponsiveImage/>
            </main>
        </>

    )
}