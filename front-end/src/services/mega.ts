import axios from "axios";

class Mega {
    async get() {
        try {
            const { data } = await axios.get('https://apiloterias.com.br/app/v2/resultado?loteria=ultimos&token=kJdfLjd38Jai2ek')
            console.log(data[0].resultado);
            return data;
        }
        catch (error: any) {
            console.error('Error fetching data:', error);
        }
    }
}

export const megaService = new Mega();