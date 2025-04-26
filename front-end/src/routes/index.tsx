import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePerfil from "../pages/HomePerfil";
import NavBarPerfil from "../components/HeaderPerfil";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<HomePage />} />
                <Route path="/home-perfil" element={<HomePerfil />} />
                <Route path="/perfil" element={<NavBarPerfil />} />
            </Routes>
        </>
    )
}