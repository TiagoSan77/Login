import gerarPag from "../controllers/MpController";
import { auth } from "../middlewares/AuthMiddleware";
import router from "./UserRoutes";

router.post('/pag',auth, gerarPag.Pag);

export default router;