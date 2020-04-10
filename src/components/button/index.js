import styled from "styled-components";
import { Button } from "rebass/styled-components";

const MyButton = styled(Button)`
  border: none;
  border-radius: 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 12px 18px;
  cursor: pointer;
  outline: none;
  background-position: center;
  transition: background 0.8s;
`;

export default MyButton;
