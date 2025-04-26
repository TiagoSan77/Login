import styled from "styled-components";
import Cards from "../components/CardsCliente";
import NavBarPerfil from "../components/HeaderPerfil";

export default function HomePerfil() {
    return (
        <>
            <NavBarPerfil />
            <Container>
                <Cards />
                <Cards />
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap; /* permite quebrar linha se faltar espaço */
    justify-content: center;
    align-items: center;
    gap: 1rem; /* espaço entre os cards */
    padding: 1rem;

    @media (max-width: 768px) {
        flex-direction: column; /* empilha um embaixo do outro no mobile */
        gap: 0.5rem;
    }
  `