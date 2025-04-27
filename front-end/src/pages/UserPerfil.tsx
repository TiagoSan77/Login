import styled from "styled-components";
import NavBarPerfil from "../components/HeaderPerfil";
import UserComponent from "../components/UserPerfil";
import { useEffect } from "react";

export default function UserPerfil() {
       async function Requisicao() {
            try {
                const destravar = await fetch("http://localhost:3001/protected", {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,  // importante: mandar o token!
                    },
                });
                if (destravar.status === 401) {
                    console.warn("Não autorizado, redirecionando para login");
                     window.location.href = '/login'
                    return;
                  }
    
    
                const data = await destravar.json();
                console.log(data);
            } catch (error) {
                console.error("Erro ao fazer requisição:", error);
            }
        }
    
        useEffect(() => {
            Requisicao();
        }, []);
    
    return (
        <>
        <NavBarPerfil/>
        <Container>
            <UserComponent/>
        </Container>
        
        </>
        
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center;
    gap: 1rem; 
    padding: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;