// src/pages/Planos.tsx
import { useState } from 'react';
import styled from 'styled-components';

export default function Cards() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Card>
      <Title>Unitv</Title>
      <PlanDetails>
        <Detail>Canais + Filmes + Séries</Detail>
        <Price>R$ 25,00 / mensal</Price>
      </PlanDetails>

      <QuantitySelector>
        <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
      </QuantitySelector>

      <SubscribeButton ><Comprar href='/finalizar'>Comprar {quantity} crédito{quantity > 1 ? 's' : ''}</Comprar></SubscribeButton>
    </Card>
  );
}

// Styled-components

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

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const QuantityButton = styled.button`
  background: #00c6ff;
  border: none;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #007acc;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 1.5rem;
  color: #ffffff;
  width: 2rem;
  text-align: center;
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

const Comprar = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
`;