import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import Info from "./pages/Info";
import CartPage from "./pages/Cart";
import { About, Cart, SignIn} from "./utils/magicVariables";
import SingInPage from "./pages/SingIn";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route element={<Info/>} path={`${About}`}/>
          <Route element={<CartPage/>} path={`${Cart}`}/>
          <Route element={<SingInPage/>} path={`${SignIn}`}/>
          <Route element={<>noPage</>} path="*"/>
        </Routes>
      </BrowserRouter>
  )
}