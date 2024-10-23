import { createRoot } from 'react-dom/client'
import App from './layout/App.tsx'
import Info from './layout/Info.tsx'
import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/informacion',
        element: <Info />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
