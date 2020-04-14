import React, { useState } from "react";
import { Flex, Text } from "rebass/styled-components";

import Search from "./index";

export default { title: "Search address" };

export const Google = () => {
  const [selection, setSelection] = useState({})
  const handleSelect = place => {
    setSelection(place);
    console.log(place)

  };
  return (
    <Flex flexDirection={"column"}>
      <Search onSelect={handleSelect}/>
      <Text>{selection.id}</Text>
    </Flex>
  );
};
