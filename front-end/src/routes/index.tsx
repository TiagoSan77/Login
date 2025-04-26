import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    )
}