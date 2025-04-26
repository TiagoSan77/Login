// src/pages/Home.tsx
import styled from 'styled-components';
import NavBar from '../components/Header';

export default function Home() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <HeroSection>
          <HeroTitle>Bem-vindo à StreamPlus</HeroTitle>
          <HeroSubtitle>O melhor conteúdo de streaming em um só lugar</HeroSubtitle>
          <ButtonContainer>
            <PrimaryButton >
              Ver Planos
            </PrimaryButton>
            <SecondaryButton>Saiba Mais</SecondaryButton>
          </ButtonContainer>
        </HeroSection>
      </MainContainer>
    </>
  );
}

// Styled components (no mesmo arquivo)
export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
`;

export const HeroSection = styled.section`
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #cfd8dc;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const PrimaryButton = styled.button`
  background: #00c6ff;
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #007acc;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: #00c6ff;
  border: 2px solid #00c6ff;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #00c6ff;
    color: #fff;
  }
`;
