import {Router} from "express";
import { auth } from "../middlewares/AuthMiddleware";
const router = Router();

router.get('/home',auth,(_req,res)=>{
    res.json({message:'Autenticado'})
    if(!auth){console.log('Não autenticado')}}
);

export default router;