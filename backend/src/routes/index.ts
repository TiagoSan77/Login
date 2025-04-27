import UserRoutes from "./AuthRoutes";
import AuthRoutes from "./AuthRoutes";
import Protected from "./protected";
import {Router } from "express";

const router = Router();
router.use('/', AuthRoutes);
router.use('/', UserRoutes);
router.use('/', Protected);
router.use('/', AuthRoutes);

export default router;