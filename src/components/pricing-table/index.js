import React, { useState } from "react";
import { shape, array, string, bool } from "prop-types";
import styled from "styled-components";
import { Flex, Text } from "rebass/styled-components";

import Check from "../icons/lens";
import Button from "../button";
import PLANS from "./plans";

const propTypesPlan = {
  plan: shape({
    details: array,
    id: string
  }),
  current: bool
};

const Board = styled(Flex)`
  flex-direction: column;
  min-height: 450px;
  &:nth-child(2) {
    ${({ theme }) => `
      border-right: 1px solid ${theme.colors.gray};
      border-left: 1px solid ${theme.colors.gray};
    `}
    
  }
`
const BannerText = styled(Text)`
  font-weight: bold;
  color: white;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const ButtonTitle = styled(Button)`
  button {  
    border-radius: 0;  
  }
`

const PlanView = ({ plan, current }) => {
  return (
    <Board 
      justifyContent={"space-between"} 
      flex={[1]}
      sx={{
        pb: [0, 3],
        //ToDo: de donde sale el flex, tuve que poner !important
        display: [ current ? "flex" : "none !important", "flex !important"]
      }}>
      <Flex pt={3} px={[1, 4]} flex={10} flexDirection={"column"}>
        {plan.details.map(d => (
          <Flex key={d} alignItems={"center"} my={1}>
            <Check height={24} width={24} />
            <Text>{d}</Text>
          </Flex>
        ))}
      </Flex>
      <Button mt={2} mx={[0, 4]} variant={"primary"} flex={1}>¡Adquiere este plan!</Button>
    </Board>
  );
};
PlanView.propTypes = propTypesPlan;

const PricingTable = () => {
  const [current, setCurrent] = useState("medium");
  const handleClickTitle = p => () => setCurrent(p.id);

  return (
    <Flex bg={"lightgray"} flexDirection={"column"}>
      <Flex flex={1} justifyContent={"space-around"}>
        {PLANS.map(p => (
          <ButtonTitle 
            key={p.id}
            flex={1}
            variant={p.id === current ? "primary" : "simple"} 
            onClick={handleClickTitle(p)}
          >
            {p.name}
          </ButtonTitle>
        ))}
      </Flex>
      <Flex sx={{ display: ["none", "100%"] }} bg={"gray"} height={50} alignItems={"center"}>
        <BannerText>
          Datos Estadísticos del informe
        </BannerText>
      </Flex>
      <Flex>
        {PLANS.map(p => (
          <PlanView 
            key={p.id}
            plan={p}
            current={p.id === current}
          />
        ))}
      </Flex>
    </Flex>
  )
};

export default PricingTable;
