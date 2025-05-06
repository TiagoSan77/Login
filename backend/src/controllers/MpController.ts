import axios from "axios";
import { Request, Response } from "express";

const preco = 25.00;

class MercadoPago {
    async Pag(req: Request, res: Response):Promise<void> {
    try{
        const {preco_receb, quantidade, produto} = req.body;
        if(preco_receb !== preco){
            res.send('Erro ao gerar pagamento');
            return;
        }
        const MERCADOPAGO_ACCESS_TOKEN = 'APP_USR-8046456444619071-042711-ef21b3ab61cfbbacdcefd59c396b52d2-2408121671'
        const api = axios.create({
            baseURL: "https://api.mercadopago.com",
            headers: {
                Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`
            }
        });
        const response = await api.post("/checkout/preferences",{
            items: [
              {
                title: produto,        
                unit_price: preco_receb,           
                quantity: quantidade,
                currency_id: "BRL"           
              }
            ],
            back_urls: {                   
              success: "https://seusite.com/sucesso",
              failure: "https://seusite.com/erro",
              pending: "https://seusite.com/pendente"
            }
        });
        console.log(response.data.sandbox_init_point);
        res.send(response.data.sandbox_init_point); 
    }
    catch (error) {
        res.send("Erro ao criar preferência:");
        }
    }
}

const gerarPag = new MercadoPago();
export default gerarPag;