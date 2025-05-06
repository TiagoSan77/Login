import axios from "axios";

const MERCADOPAGO_ACCESS_TOKEN = 'APP_USR-8046456444619071-042711-ef21b3ab61cfbbacdcefd59c396b52d2-2408121671'
const api = axios.create({
    baseURL: "https://api.mercadopago.com",
    headers: {
        Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`
    }
});


async function GerarPag(){
    try{
        const response = await api.post("/checkout/preferences",{
            items: [
              {
                title: "unitv",        
                unit_price: 0.01,           
                quantity: 2,
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
    }
    catch (error) {
        console.error("Erro ao criar preferência:", error);
    }
}
GerarPag()