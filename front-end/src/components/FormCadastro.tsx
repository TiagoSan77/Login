import styled from "styled-components";
import { InputBonito } from "../components/FormLogin";
import { useState } from "react";
import axios from "axios";

export default function FormCadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await Cadastrar();
  };

  async function Cadastrar() {
    try {
      await axios.post('http://localhost:3001/signup', {
        name, 
        email, 
        password
      });
      alert("Cadastro realizado com sucesso!");
      window.location.href = '/login';
    }
    catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  }

  return (
    <FormContainer>
      <Formulario onSubmit={handleSubmit}>
        <Title>Cadastro</Title>

        <InputBonito 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          type="text" 
          placeholder="Digite seu Nome" 
          required 
        />
        <InputBonito 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          placeholder="Digite seu Email" 
          required 
        />
        <InputBonito 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          placeholder="Digite sua Senha" 
          required 
        />

        <BotaoBonito type="submit">Cadastrar</BotaoBonito>

        <BotaoVoltar href="/home">Voltar</BotaoVoltar>
      </Formulario>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #141e30, #243b55);
  padding: 2rem;
`;

const Formulario = styled.form`
  background: #1f2833;
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 320px;
`;

const Title = styled.h1`
  color: #00c6ff;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const BotaoBonito = styled.button`
  background: #00c6ff;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #007acc;
  }
`;

export const BotaoVoltar = styled.a`
  background: transparent;
  border: 2px solid #00c6ff;
  color: #00c6ff;
  padding: 0.75rem;
  border-radius: 30px;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  margin-top: 0.5rem;

  &:hover {
    background: #00c6ff;
    color: white;
  }
`;

