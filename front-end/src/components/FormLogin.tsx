// src/components/FormLogin.tsx
import { useState } from 'react';
import { BotaoBonito } from "../styles/ButtonStyles";
import { InputBonito } from "../styles/InputStyles";
import { FormContainer, Formulario } from "../styles/FormStyles";
import { Title } from "../styles/TextsStyle";
import axios from 'axios';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await Logar();
  };

  async function Logar() {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password
      });
      const token = response.headers['authorization'];
      localStorage.setItem('token', token);
      
      if (!token) {
        console.log("token not found")
      }
      if (token === undefined) {
        console.log("token invalid")
      }
     
      if (token === response.headers['authorization']) {
        alert("Login realizado com sucesso!");
        window.location.href = '/home';
      }
      console.log('Token:', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <FormContainer>
      <Title>Login:</Title>
      <Formulario onSubmit={handleSubmit}>
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
        <a href="/register">Cadastre-se</a>
      </Formulario>
    </FormContainer>
  );
}