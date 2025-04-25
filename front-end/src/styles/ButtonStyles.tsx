import styled from "styled-components";

export const BotaoBonito = styled.button`
  background-color: #6200ea;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #7b1fa2;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;