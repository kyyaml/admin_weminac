import { Navigate, createBrowserRouter } from "react-router-dom";

import GuestLayout from "./pages/GuestLayout";

import DefaultLayout from "./pages/DefaultLayout";
import Dashboard from "./components/Dashboard";
import TablePoli from "./components/TablePoli"
import TableLayanan from "./components/TableLayanan";
import TableDoctors from "./components/TableDoctors";
import FormDokter from "./components/FormDokter";
import FormPoli from "./components/FormPoli";
import FormLayanan from "./components/FormLayanan";
import Login from "./components/Login";
import UpdatePoli from "./components/UpdatePoli";
import UpdateLayanan from "./components/UpdateLayanan";
import UpdateDokter from "./components/UpdateDokter";

const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />
            },
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: '/poli',
                element:<TablePoli />
            },
            {
                path: '/layanan',
                element:<TableLayanan />,
            },
            {
                path: '/dokter',
                element:<TableDoctors />,
            },
            {
                path: '/dokter/tambah',
                element:<FormDokter />,
            },
            {
                path: '/poli/tambah',
                element:<FormPoli />,
            },
            {
                path: '/layanan/tambah',
                element:<FormLayanan />,
            },
            {
                path: 'poli/:id/edit',
                element: <UpdatePoli />,
            },
            {
                path: 'layanan/:id/edit',
                element: <UpdateLayanan />,
            },
            {
                path: 'dokter/:id/edit',
                element: <UpdateDokter />,
            },
            
        ]
    },
        
{
    path: '/',
    element: <GuestLayout />,
    children: [
        {
            path: "/",
            element: <Navigate to ="/login" />
        },
        {
            path: "/login",
            element: <Login />
        },
    ]
},


]);

export default router;