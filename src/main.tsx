import { createRoot } from 'react-dom/client'
import App from './layout/App.tsx'
import Info from './layout/Info.tsx'
import Error from './layout/Error404.tsx'
import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './layout/Cart.tsx'
import { Home, About, Cart } from './utils/magicVariables.ts'

const router = createBrowserRouter([
    {
        path: `${Home}`,
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: `${About}`,
        element: <Info />,
        errorElement: <Error />,
    },
    {  
        path: `${Cart}`,
        element: <CartPage />,
        errorElement: <Error />,
    }
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
