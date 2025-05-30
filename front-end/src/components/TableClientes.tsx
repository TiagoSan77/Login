// src/components/TableClientes.tsx
import { useState } from 'react';
import styled from 'styled-components';

const clientData = [
  { name: "João Silva", phone: "(11) 91234-5678", dueDate: "2025-05-10", status: "Ativo" },
  { name: "Maria Souza", phone: "(21) 98765-4321", dueDate: "2025-05-12", status: "Ativo" },
  { name: "Pedro Almeida", phone: "(31) 99876-1234", dueDate: "2025-06-01", status: "Inativo" },
  { name: "Ana Costa", phone: "(41) 96654-9876", dueDate: "2025-05-15", status: "Ativo" },
  { name: "Carlos Pereira", phone: "(51) 93322-7654", dueDate: "2025-06-05", status: "Inativo" },
  { name: "Lucia Mendes", phone: "(61) 92345-6789", dueDate: "2025-05-20", status: "Ativo" },
  { name: "Roberto Oliveira", phone: "(71) 97654-1234", dueDate: "2025-05-25", status: "Ativo" },
  { name: "Fernanda Santos", phone: "(81) 98876-5432", dueDate: "2025-06-10", status: "Inativo" },
  // Adicione mais clientes fictícios aqui
];

export default function TableClientes() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastClient = currentPage * itemsPerPage;
  const indexOfFirstClient = indexOfLastClient - itemsPerPage;
  const currentClients = clientData.slice(indexOfFirstClient, indexOfLastClient);

  const totalPages = Math.ceil(clientData.length / itemsPerPage);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Vencimento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentClients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.dueDate}</td>
              <td>{client.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{currentPage} de {totalPages}</span>
        <button onClick={() => handlePagination(currentPage + 1)} disabled={currentPage === totalPages}>
          Próximo
        </button>
      </Pagination>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 3rem auto;
  background: #1f2833;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  color: #ffffff;

  th, td {
    padding: 14px;
    text-align: left;
    border-bottom: 1px solid #333;
  }

  th {
    background-color: #00c6ff;
  }

  tr:hover {
    background-color: #333;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  button {
    background: #00c6ff;
    border: none;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background 0.3s;

    &:hover {
      background: #007acc;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    color: #ffffff;
    font-size: 1.1rem;
  }
`;
