import styled from "styled-components";

export const InputBonito = styled.input`
  width: 120px;
  height: 10px;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #6200ea;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #7b1fa2;
    box-shadow: 0px 4px 6px rgba(123, 31, 162, 0.2);
  }
`;