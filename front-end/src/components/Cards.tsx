// src/pages/Planos.tsx
import styled from 'styled-components';
import NavBar from '../components/Header';

export default function Cards() {
  return (
    <Container>
      <NavBar />
      <Content>
        <Card>
          <Title>Unitv</Title>
          <PlanDetails>
            <Detail>Canais + Filmes + Séries</Detail>
            <Price>R$ 25,00 / mensal</Price>
          </PlanDetails>
          <SubscribeButton>Assinar Agora</SubscribeButton>
        </Card>
      </Content>
    </Container>
  );
}

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
`;

const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;
`;

const Card = styled.div`
  background: #1f2833;
  border-radius: 12px;
  padding: 2rem;
  width: 280px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #00c6ff;
  margin-bottom: 0.5rem;
`;

const PlanDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Detail = styled.p`
  font-size: 1rem;
  color: #cfd8dc;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
`;

const SubscribeButton = styled.button`
  background: #00c6ff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #007acc;
  }
`;
