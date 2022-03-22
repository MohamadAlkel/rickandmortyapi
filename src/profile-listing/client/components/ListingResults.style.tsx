import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EmptyList = styled.div`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  margin: 100px;
  padding: 50px 100px;
  font-size: var(--subtitle);
  border-radius: 10px;
  text-align: center;
`;
