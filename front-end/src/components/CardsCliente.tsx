import styled from 'styled-components';

export default function Planos() {
  return (
    <Container>
      <Card>
        <Title>Seu Plano</Title>

        <PlanName>Unitv</PlanName>

        <PlanDetails>
          <Detail>Plano: Básico - Mensal</Detail>
          <Detail>Vencimento: 10/02</Detail>
          <Status>Ativo</Status>
        </PlanDetails>

        <SubscribeButton>Renovar Assinatura</SubscribeButton>
      </Card>
    </Container>
  );
}

// Styled-components

const Container = styled.div`
  min-height: 100vh;
  /* background: linear-gradient(135deg, #141e30, #243b55); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Card = styled.div`
  background: #1f2833;
  border-radius: 16px;
  padding: 2rem;
  width: 320px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }
`;


const Title = styled.h1`
  font-size: 2rem;
  color: #00c6ff;
  margin-bottom: 1rem;
`;

const PlanName = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
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

const Status = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #00e676;
`;

const SubscribeButton = styled.button`
  background: #00c6ff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #007acc;
  }
`;
