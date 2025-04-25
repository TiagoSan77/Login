import UserRoutes from "./AuthRoutes";
import AuthRoutes from "./AuthRoutes";
import {Router } from "express";
import HomePage from "./HomePage";

const router = Router();
router.use('/', AuthRoutes);
router.use('/', UserRoutes);
router.use('/', HomePage);

export default router;