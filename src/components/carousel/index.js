import React, { useState } from "react";
import { any, array, oneOfType, number, string } from "prop-types";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";

const propTypes = {
  items: any,
  height: oneOfType([number, array, string]),
  width: oneOfType([number, array, string])
};

const Container = styled(Flex)`
  position: relative;
  overflow: hidden;
`;

const BulletContainer = styled(Flex)`
  position: absolute;
  z-index: 9;
  width: 100%;
  justify-content: center;
  bottom: 25px;
`;

const CircleBullet = styled(Flex)({
  border: "1px solid",
  borderColor: "white",
  cursor: "pointer",
  width: 14,
  height: 14,
  borderRadius: 3,
  backgroundColor: ({ active }) => active ? "white" : "transparent"
});

const Carousel = ({ items, height = ["400px"], width = ["100%"] }) => {
  const [current, setCurrent] = useState(0);
  const handleClickItem = i => () => setCurrent(i);
  return (
    <Container height={height} width={width}>
      {items.map((Item, index) => (
        <Item 
          key={index} 
          height={height} 
          width={"100%"} 
          onClick={handleClickItem( (index + 1) % items.length )} 
          sx={{ 
            position: "absolute", 
            transition: "0.5s all ease-in",
            left: current < index ? "100%" : (current < index ? "-100%" : 0) 
          }}
        />
      ))}
      <BulletContainer>
        {items.map((_, index) => (
          <CircleBullet mx={2} key={index} active={index === current} onClick={handleClickItem(index)} />
        ))}
      </BulletContainer>
    </Container>
  );
};

Carousel.propTypes = propTypes;

export default Carousel;
