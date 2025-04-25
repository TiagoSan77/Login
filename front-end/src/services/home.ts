import api from "./api";
import { token } from "./login";

export async function getUser() {
    const response = await api.get('/home', {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    console.log(response.data);
}
