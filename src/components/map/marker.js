import styled from "styled-components";

const Mark = styled.div`
  background-color: #e74c3c;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  width: 20px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
`;

export default Mark;
