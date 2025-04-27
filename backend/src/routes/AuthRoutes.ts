import UserController from "../controllers/UserController";
import user from "../controllers/UserController";
import { auth } from "../middlewares/AuthMiddleware";
import router from "./UserRoutes";

router.post('/signup', user.create);
router.post('/login', user.login);
router.use('/sair',auth,UserController.logout)
export default router;