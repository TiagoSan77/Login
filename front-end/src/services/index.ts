import { getUser } from "./home";
import { login } from "./login";

export default async function chamar(){
    await login();
    await getUser()
}

chamar();