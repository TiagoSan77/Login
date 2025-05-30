// src/pages/TabelaClientes.tsx
import { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

interface Cliente {
  nome: string;
  vencimento: string;
  plano: string;
}

export default function TabelaClientes() {
  const clientes: Cliente[] = [
    { nome: 'João Silva', vencimento: '2025-05-05', plano: 'Unitv' },
    { nome: 'Maria Oliveira', vencimento: '2025-05-03', plano: 'BrPro' },
    { nome: 'Carlos Souza', vencimento: '2025-04-30', plano: 'Unitv' },
    { nome: 'Ana Martins', vencimento: '2025-05-01', plano: 'BrPro' },
    { nome: 'Fernanda Costa', vencimento: '2025-05-06', plano: 'Unitv' },
    { nome: 'Rafael Lima', vencimento: '2025-05-04', plano: 'BrPro' },
    { nome: 'Lucas Rocha', vencimento: '2025-04-29', plano: 'Unitv' },
    { nome: 'Juliana Dias', vencimento: '2025-05-02', plano: 'BrPro' }
  ];

  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 4;
  const clientesPaginados = clientes.slice((paginaAtual - 1) * itensPorPagina, paginaAtual * itensPorPagina);
  const totalPaginas = Math.ceil(clientes.length / itensPorPagina);

  const handleSendMessage = (nome: string) => {
    alert(`Mensagem enviada para ${nome} pelo WhatsApp!`);
  };

  return (
    <Wrapper>
      <Titulo>Controle de Vencimentos</Titulo>
      <Tabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Plano</th>
            <th>Vencimento</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clientesPaginados.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nome}</td>
              <td>{cliente.plano}</td>
              <td>{cliente.vencimento}</td>
              <td>
                <MensagemButton onClick={() => handleSendMessage(cliente.nome)}>
                  <FaWhatsapp size={16} />
                </MensagemButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Tabela>
      <Paginacao>
        <Botao disabled={paginaAtual === 1} onClick={() => setPaginaAtual(p => p - 1)}>◀</Botao>
        <span>Página {paginaAtual} de {totalPaginas}</span>
        <Botao disabled={paginaAtual === totalPaginas} onClick={() => setPaginaAtual(p => p + 1)}>▶</Botao>
      </Paginacao>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 700px;
  margin: 2rem auto;
  background: #1e293b;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Titulo = styled.h2`
  color: #00c6ff;
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #f8fafc;

  th, td {
    padding: 0.9rem;
    text-align: left;
    border-bottom: 1px solid #334155;
    font-size: 0.95rem;
  }

  th {
    color: #94a3b8;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }

  tr:hover {
    background: #2e3a4f;
  }
`;

const Paginacao = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  color: #cbd5e1;
  font-size: 0.95rem;
  align-items: center;
`;

const Botao = styled.button`
  background: #00c6ff;
  color: #0f172a;
  border: none;
  padding: 0.5rem 1.1rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(0, 198, 255, 0.3);
  transition: background 0.3s;

  &:disabled {
    background: #475569;
    color: #cbd5e1;
    box-shadow: none;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #009dd6;
  }
`;

const MensagemButton = styled.button`
  background: #25d366;
  color: white;
  border: none;
  padding: 0.45rem 0.6rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);

  &:hover {
    background: #128c7e;
  }
`;
