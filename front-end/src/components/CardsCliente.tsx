// src/pages/Planos.tsx
import styled from 'styled-components';
import { FaRegCreditCard, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

export default function Planos() {
  return (
    <Container>
      <Card>
        <Title>Seu Plano</Title>

        <PlanName>Unitv</PlanName>

        <PlanDetails>
          <Detail>
            <FaRegCreditCard /> Básico - Mensal
          </Detail>
          <Detail>
            <FaCalendarAlt /> Vencimento: 10/02
          </Detail>
          <Status>
            <FaCheckCircle /> Ativo
          </Status>
        </PlanDetails>

        <SubscribeButton>Renovar Assinatura</SubscribeButton>
      </Card>
    </Container>
  );
}

// Styled-components

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
`;

const Card = styled.div`
  background: #0f172a;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #00c6ff;
`;

const PlanName = styled.h2`
  font-size: 1.8rem;
  color: #ffffff;
`;

const PlanDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  margin: 0 auto;
  width: fit-content;

  svg {
    color: #00c6ff;
    margin-right: 8px;
  }
`;

const Detail = styled.p`
  font-size: 1.1rem;
  color: #cfd8dc;
  display: flex;
  align-items: center;
`;

const Status = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #00e676;
  display: flex;
  align-items: center;
`;

const SubscribeButton = styled.button`
  background: linear-gradient(90deg, #00c6ff, #007acc);
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: linear-gradient(90deg, #007acc, #005f99);
  }
`;
