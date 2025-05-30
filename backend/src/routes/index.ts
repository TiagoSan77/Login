import UserRoutes from "./AuthRoutes";
import AuthRoutes from "./AuthRoutes";
import ClientesRoutes from "./ClientesRoutes";
import Pagamento from "./pgto";
import Protected from "./protected";
import {Router } from "express";

const router = Router();
router.use('/', AuthRoutes);
router.use('/', UserRoutes);
router.use('/', Protected);
router.use('/', AuthRoutes);
router.use('/', Pagamento)
router.use('/', ClientesRoutes)

export default router;