import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserPerfil from "../pages/UserPerfil";
import Cadastro from "../pages/CadastroCli";
import Clientes from "../pages/Clientes";
import Inicio from "../pages/Inicio";
import Estatisticas from "../pages/Estatisticas";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/clientes/cadastrar" element={<Cadastro />} />
                <Route path="/clientes/estatisticas" element={<Estatisticas />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/perfil/user" element={<UserPerfil />} />
            </Routes>
        </>
    )
}