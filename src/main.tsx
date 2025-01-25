import { createRoot } from 'react-dom/client'
import App from './layout/App.tsx'
import Info from './layout/Info.tsx'
import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './layout/Cart.tsx'
import { Home, About, Cart, SignIn } from './utils/magicVariables.ts'
import SingIn from './layout/SingIn.tsx'

const router = createBrowserRouter([
    {
        path: `${Home}`,
        element: <App />,
    },
    {
        path: `${About}`,
        element: <Info />,
    },
    {  
        path: `${Cart}`,
        element: <CartPage />,
    },
    {
        path:`${SignIn}`,
        element: <SingIn/>
    }
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
