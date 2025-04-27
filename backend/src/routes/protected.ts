import { Router } from "express";
import { auth } from "../middlewares/AuthMiddleware";
const router = Router();

router.use('/protected', auth, (_req, res) => {
    res.status(200).json({ message: "Perfil do usuário" });
}
);

export default router;