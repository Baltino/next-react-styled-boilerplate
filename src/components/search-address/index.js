import React, { useEffect, useState } from "react";
import { array, number, oneOfType, string, func } from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { Flex } from "rebass/styled-components";

import Input from "../input";
import { MAPBOX_KEY } from "../../utils/constants";

const propTypes = {
  onSelect: func,
  value: string,
  width: oneOfType([array, number, string])
};

const ResultsContainer = styled(Flex)`
  position: absolute;
  flex-direction: column;
  top: 50px;
`;

const Result = styled(Flex)`
  margin: 5px 0;
  text-align: left;
  cursor: pointer;
`;

const getResults = text => axios
  .get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${MAPBOX_KEY}&country=es&types=address&language=es`
  )
  .then(({ data }) => data.features)

const Search = ({ onSelect = () => {}, value = "", width = 300 }) => {
  const [text, setText] = useState(value);
  const [results, setResults] = useState([]);
  const [inputState, setInputState] = useState();
  const handleSelectResult = result => () => {
    onSelect(result);
    setText("");
  };
  useEffect(() => {
    if (!text) { 
      setResults([]);
    }else if (text.length > 2) {
      getResults(text)
        .then(results => setResults(results))
        .catch(() => setInputState("error"));
    }
  }, [text]);

  return (
    <Flex position={"relative"} width={width}>
      <Input 
        placeholder={"Escribe tu dirección aqui"} 
        onChange={({ target }) => setText(target.value)} 
        variant={inputState}
        value={text} 
      />
      <ResultsContainer width={300}>
        {results.map(r => <Result key={r.id} onClick={handleSelectResult(r)}>{r.place_name}</Result>)}
      </ResultsContainer>
    </Flex>
  )
};

Search.propTypes = propTypes;

export default Search;
