// src/components/FormLogin.tsx
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BotaoVoltar } from './FormCadastro';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await Logar();
  };

  async function Logar() {
    try {
      // Basic client-side validation
      if (!email || !password) {
        alert("Por favor, preencha todos os campos!");
        return;
      }
  
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });
  
      if (response.status === 200) {
        const token = response.data.token || response.headers['authorization']?.split(' ')[1];
        
        if (!token) {
          console.error("Token não recebido");
          alert("Erro durante a autenticação");
          return;
        }
  
        localStorage.setItem('token', token);
        
        alert("Login realizado com sucesso!");
        window.location.href = '/home';
      }
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || "Erro desconhecido";
  
        switch (status) {
          case 401:
            alert("Credenciais inválidas");
            break;
          case 403:
            alert("Conta desativada");
            break;
          case 500:
            alert("Erro no servidor");
            break;
          default:
            alert(`Erro na autenticação: ${message}`);
        }
      } else {
        console.error('Erro desconhecido:', error);
        alert("Erro inesperado durante o login");
      }
    }
  }

  return (
    <FormContainer>
      <Formulario onSubmit={handleSubmit}>
      <Title>Login:</Title>
        <InputBonito
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <InputBonito
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <BotaoBonito type="submit">Entrar</BotaoBonito>
        <BotaoVoltar href='/home'>Voltar</BotaoVoltar>
        <a href="/register" style={{color:"white", textDecoration:"none" }}>Cadastre-se</a>
      </Formulario>
    </FormContainer>
  );
}


const FormContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
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


 export const InputBonito = styled.input`
  width: 250px;
  height: 30px;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #1e78c2;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #7b1fa2;
    box-shadow: 0px 4px 6px rgba(123, 31, 162, 0.2);
  }
`;

