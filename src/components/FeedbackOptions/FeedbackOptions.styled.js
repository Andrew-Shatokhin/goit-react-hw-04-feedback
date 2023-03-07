import styled from 'styled-components';

export const ListBtn = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Button = styled.button`
  border-radius: 5px;
  border-color: gray;
  background-color: white;
  font-weight: 500;
  text-transform: capitalize;
  font-style: italic;
  font-size: 24px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  &:hover {
  
    background-color: rgb(28, 185, 236);
    cursor: pointer;
  }
`;
