import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { Flex } from "rebass/styled-components";
import moment from "moment";

import "react-calendar/dist/Calendar.css";
import Input from "../input";

const CalendarContainer = styled(Flex)`
  position: absolute;
  top: 50px;
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
`;

const InputDate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState()
  const handleClick = () => setIsOpen(!isOpen);
  const handleChange = value => {
    setIsOpen(false);
    setValue(value);
  };
  const formated = value ? moment(value).format("DD-MM-YYYY") : "";
  return (
    <Flex sx={{ position: "relative" }}>
      <Input onClick={handleClick} value={formated} placeholder={"Inicio"} width={300} readOnly/>
      <CalendarContainer width={300} isOpen={isOpen}>
        <Calendar onChange={handleChange} value={value} />
      </CalendarContainer>
    </Flex>
  );

}

export default InputDate;
