import UserRoutes from "./AuthRoutes";
import AuthRoutes from "./AuthRoutes";
import {Router } from "express";

const router = Router();
router.use('/', AuthRoutes);
router.use('/', UserRoutes);

export default router;