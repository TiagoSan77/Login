// src/pages/Planos.tsx
import styled from 'styled-components';
import { FaShoppingCart, FaTrashAlt, FaMoneyBillWave } from 'react-icons/fa';

export default function CartCard() {
  // Exemplo de dados; na prática, você traria do seu estado/contexto/API

    

  const cartItems = [
    { id: 1, name: 'Plano Mensal Básico', qty: 1, price: 29.9 },
    { id: 2, name: 'Mês Extra de Suporte', qty: 1, price: 9.9 },
  ];
  const subtotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  const shipping: number = 0; // ou calcula de acordo com regras
  const total = subtotal + shipping;

  return (
    <Container>
      <Card>
        <Header>
          <FaShoppingCart /> Carrinho de Compras
        </Header>

        <ItemsList>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ItemInfo>
                <Name>{item.name}</Name>
                <Qty>Qtde: {item.qty}</Qty>
              </ItemInfo>
              <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
              <RemoveButton>
                <FaTrashAlt />
              </RemoveButton>
            </CartItem>
          ))}
        </ItemsList>

        <Summary>
          <Row>
            <Label>Subtotal</Label>
            <Value>R$ {subtotal.toFixed(2)}</Value>
          </Row>
          <Row>
            <Label>Frete</Label>
            <Value>{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</Value>
          </Row>
          <Row total>
            <Label>Total</Label>
            <Value>R$ {total.toFixed(2)}</Value>
          </Row>
        </Summary>

        <CheckoutButton>
          <FaMoneyBillWave /> Finalizar Pagamento
        </CheckoutButton>
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
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Header = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: #00c6ff;

  svg {
    margin-right: 0.5rem;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: #1e293b;
  padding: 0.8rem 1rem;
  border-radius: 12px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const Name = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const Qty = styled.span`
  font-size: 0.9rem;
  color: #94a3b8;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #f87171;
  cursor: pointer;
  font-size: 1.1rem;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #334155;
`;

const Row = styled.div<{ total?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: ${({ total }) => (total ? '1.2rem' : '1rem')};
  font-weight: ${({ total }) => (total ? 'bold' : 'normal')};
  color: ${({ total }) => (total ? '#00e676' : '#cfd8dc')};
`;

const Label = styled.span``;

const Value = styled.span``;

const CheckoutButton = styled.button`
  background: linear-gradient(90deg, #00c6ff, #007acc);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.4s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: linear-gradient(90deg, #007acc, #005f99);
  }
`;
