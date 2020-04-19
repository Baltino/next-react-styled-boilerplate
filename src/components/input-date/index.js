import React, { useState } from "react";
import { array, func, number, bool, string, oneOfType } from "prop-types";
import Calendar from "react-calendar";
import styled from "styled-components";
import { Flex } from "rebass/styled-components";
import moment from "moment";

import "react-calendar/dist/Calendar.css";
import Input from "../input";

const propTypes = {
  open: bool,
  placeholder: string,
  format: string,
  onChange: func,
  selectRange: bool,
  width: oneOfType([array, string, number])
};

const CalendarContainer = styled(Flex)`
  position: absolute;
  top: 50px;
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
`;

const InputDate = ({ 
  open, 
  placeholder = "", 
  format = "MM-DD-YYYY", 
  onChange = () => {}, 
  selectRange = false,
  width = 300,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [value, setValue] = useState()
  const handleClick = () => setIsOpen(!isOpen)
  const handleChange = value => {
    setIsOpen(false);
    setValue(value);
    onChange(value);
  };
  const formated = value ? 
    (selectRange ? 
      `${moment(value[0]).format(format)} - ${moment(value[1]).format(format)}` : moment(value).format(format)
    )
    : "";
  return (
    <Flex sx={{ position: "relative" }}>
      <Input onClick={handleClick} value={formated} placeholder={placeholder} width={width} readOnly/>
      <CalendarContainer width={width} isOpen={isOpen}>
        <Calendar onChange={handleChange} value={value} selectRange={selectRange} />
      </CalendarContainer>
    </Flex>
  );

}

InputDate.propTypes = propTypes;

export default InputDate;
