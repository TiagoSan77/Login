import styled from "styled-components";
import Cards from "../components/CardCadastro";
import NavBarPerfil from "../components/HeaderPerfil";
import { useEffect } from "react";

export default function Cadastro() {

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
            <NavBarPerfil />
            <Container>
                <Cards />
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem; /* espaço entre os cards */

    @media (max-width: 768px) {
        flex-direction: column; /* empilha um embaixo do outro no mobile */
        gap: 0.5rem;
    }
  `