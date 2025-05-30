// src/components/Graphic.tsx
import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const fullData = [
  { month: 'Jan', unitvClients: 12 },
  { month: 'Feb', unitvClients: 18 },
  { month: 'Mar', unitvClients: 22 },
  { month: 'Apr', unitvClients: 30 },
  { month: 'May', unitvClients: 27 },
  { month: 'Jun', unitvClients: 35 },
  { month: 'Jul', unitvClients: 33 },
  { month: 'Aug', unitvClients: 40 },
  { month: 'Sep', unitvClients: 38 },
  { month: 'Oct', unitvClients: 45 },
  { month: 'Nov', unitvClients: 47 },
  { month: 'Dec', unitvClients: 52 },
];

const ITEMS_PER_PAGE = 3;

export default function Graphic() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(fullData.length / ITEMS_PER_PAGE);

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const data = fullData.slice(start, end);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Clientes Unitv</Title>
        <Subtitle>Visualização mensal de crescimento</Subtitle>
      </Header>

      <ChartContainer>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#2e3a59" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ background: '#1e2a3a', border: 'none', color: '#fff' }}
              labelStyle={{ color: '#00d1ff' }}
            />
            <Bar dataKey="unitvClients" fill="#00d1ff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <Pagination>
        <PageButton onClick={prevPage} disabled={page === 0}>←</PageButton>
        <PageIndicator>Página {page + 1} de {totalPages}</PageIndicator>
        <PageButton onClick={nextPage} disabled={page === totalPages - 1}>→</PageButton>
      </Pagination>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 420px;
  margin: 2rem auto;
  background: linear-gradient(145deg, #1b2735, #141d29);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  color: #00d1ff;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #a5b6c5;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const Pagination = styled.div`
  margin-top: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const PageButton = styled.button`
  background: #00d1ff;
  color: #0f172a;
  border: none;
  padding: 0.4rem 0.9rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 4px 10px rgba(0, 209, 255, 0.4);
  transition: all 0.3s;

  &:hover:enabled {
    background: #00a8cc;
  }

  &:disabled {
    background: #555f6f;
    cursor: not-allowed;
    box-shadow: none;
    color: #ccc;
  }
`;

const PageIndicator = styled.span`
  font-size: 0.9rem;
  color: #cfd8dc;
`;
