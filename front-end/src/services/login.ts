import api from "./api";

export let token: string = '';

export async function login(email:string,password:string) {
  const response = await api.post('/login', {email,password});
  token = response.headers['authorization'];
  console.log(token);
}

