import {Router} from 'express';
import cliente from '../controllers/ClientesController';


const router = Router();
router.get('/clientes',cliente.read)
router.post('/clientes',cliente.create)
export default router;