import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserPerfil from "../pages/UserPerfil";
import Perfil from "../pages/HomePerfil";
import HomeComprar from "../pages/HomeComprar";
import Pag from "../pages/Carrinho";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<HomePage />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/perfil/user" element={<UserPerfil />} />
                <Route path="/comprar" element={<HomeComprar />} />
                <Route path="/finalizar" element={<Pag />} />
            </Routes>
        </>
    )
}