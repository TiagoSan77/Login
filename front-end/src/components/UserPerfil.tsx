import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function UserComponent() {
  const [nome,setNome] = useState("");

  async function DataUser(){
    try{
      const response = await axios.get('http://localhost:3001/user')
      const data = response.data;
      setNome(data.nome);
    }
    catch(error){
      console.error("Erro no server", error);
    }
  }

  useEffect(() => {
    DataUser();
  }
  , []);

  return (
    <Card>
      <Title>
        informações do usuário
      </Title>
      <p>Nome:{nome}</p> 
      <p>idade:</p>
      <p>email:</p>
      <p>Numero:</p>
      <p>alterar senha:</p>
      <p>Contas ativas:</p>
    </Card>
  );
}
const Card = styled.div`
  background: #3b4b5f;
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
  font-size: 1.03rem;
  color: #8be580;
  font-weight:bold;
`;