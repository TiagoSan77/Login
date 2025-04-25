import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:3001/',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// let token: string;

// async function login() {
//     const response = await api.post('/login', {
//         email: 'usuario123@gmail.com',
//         password: '12345'
//     });
//     token = response.headers['authorization'];
//     console.log(token);
// }

// async function getUser() {
//     const response = await api.get('/home', {
//         headers: { 'Authorization': `Bearer ${token}` }
//     });
//     console.log(response.data);
// }

// async function main() {
//     await login(); // Garante que o token seja gerado
//     await getUser(); // Usa o token gerado
// }

// main();

// axios.get('https://apiloterias.com.br/app/v2/resultado?loteria=ultimos&token=kJdfLjd38Jai2ek')
//     .then((response) => {
//         console.log(response.data[0].resultado.nome);
//         console.log(response.data[0].resultado.data_concurso);
//         console.log(response.data[0].resultado.dezenas);
//     })
//     .catch((error) => {
//         console.error('Error fetching data:', error);
//     });


class mega {
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

const megaService = new mega();
megaService.get()