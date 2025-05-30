// src/pages/Clientes.tsx
import styled from 'styled-components';

export default function Clientes() {
  return (
    <Container>
      <Card>
        <Title>Cadastro de Cliente</Title>

        <Form>
          <Label>
            Nome:
            <Input type="text" placeholder="Digite o nome completo" />
          </Label>

          <Label>
            Telefone:
            <Input type="tel" placeholder="(XX) XXXXX-XXXX" />
          </Label>

          <Label>
            Plano:
            <Select>
              <option value="">Selecione um plano</option>
              <option value="brpro">BRPRO</option>
              <option value="unitv">UNITV</option>
            </Select>
          </Label>

          <Label>
            Data da compra:
            <Input type="date" />
          </Label>

          <Label>
            Vencimento:
            <Input type="date" />
          </Label>

          <Label>
            Observações:
            <TextArea placeholder="Informações adicionais..." />
          </Label>

          <SubmitButton>Cadastrar Cliente</SubmitButton>
        </Form>
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
  max-width: 500px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #00c6ff;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #cfd8dc;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.7rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
`;

const Select = styled.select`
  margin-top: 0.5rem;
  padding: 0.7rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background: white;
  color: black;
`;

const TextArea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.7rem;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  min-height: 80px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #00c6ff, #007acc);
  color: white;
  border: none;
  padding: 0.9rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: linear-gradient(90deg, #007acc, #005f99);
  }
`;
