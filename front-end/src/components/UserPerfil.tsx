// src/components/UserComponent.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUser, FaEnvelope, FaPhoneAlt, FaKey, FaCheckCircle } from "react-icons/fa";

export default function UserComponent() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");

  async function DataUser() {
    try {
      const response = await axios.get('http://localhost:3001/user');
      const data = response.data;
      setNome(data.nome);
      setIdade(data.idade);
      setEmail(data.email);
      setNumero(data.numero);
    } catch (error) {
      console.error("Erro no server", error);
    }
  }

  useEffect(() => {
    DataUser();
  }, []);

  return (
    <Container>
      <Card>
        <ProfileIcon>
          <FaUser size={80} />
        </ProfileIcon>

        <Title>Perfil do Usuário</Title>

        <UserInfo>
          <FaUser />
          <span>Nome: {nome || "Não disponível"}</span>
        </UserInfo>
        <UserInfo>
          <FaUser />
          <span>Idade: {idade || "Não disponível"}</span>
        </UserInfo>
        <UserInfo>
          <FaEnvelope />
          <span>Email: {email || "Não disponível"}</span>
        </UserInfo>
        <UserInfo>
          <FaPhoneAlt />
          <span>Número: {numero || "Não disponível"}</span>
        </UserInfo>
        <UserInfo>
          <FaKey />
          <span>Alterar Senha</span>
        </UserInfo>
        <UserInfo>
          <FaCheckCircle />
          <span>Contas Ativas</span>
        </UserInfo>
      </Card>
    </Container>
  );
}

// Styled Components

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
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  }
`;

const ProfileIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00c6ff;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #8be580;
  font-weight: bold;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: #cfd8dc;
  justify-content: flex-start;
  margin-left: 10px;

  svg {
    color: #00c6ff;
    font-size: 1.4rem;
  }
`;
