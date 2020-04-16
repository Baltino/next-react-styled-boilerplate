import React, { useState } from "react";
import { Flex } from "rebass/styled-components";

import InputDate from "./index";

export default { title: "Input Date" };

export const Simple = () => <InputDate placeholder={"Simple date"} />;

export const Range = () => {
  const [dates, setDates] = useState();
  const FORMAT = "DD-MM-YYYY";
  const handleOnChange = value => setDates(value)
  console.log(dates)
  return (
    <Flex flexDirection={"column"}>
      <Flex>
        <InputDate placeholder="Inicio" format={FORMAT} selectRange={true} onChange={handleOnChange} />
      </Flex>
    </Flex>
  );
}
