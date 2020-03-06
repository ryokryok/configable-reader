import React, { useContext } from "react";
import { ConfigContext } from "../ContextProvider";
import styled from "styled-components";
import { ConfigState } from "../Reducer";
import ReactMarkdown from "react-markdown";
import rashomon from "../data/rashomon.json";

// prettier-ignore
const Content =styled.div<ConfigState >`
  padding : 0.5em 0.5em;
  max-width: 600px;
  margin: 0 auto;
  font-family: ${({ font_family }) => (font_family ? `${font_family}` : '')};
  & > h1 {
    	font-size: 2em;
  }
  & > h2 {
    	font-size: 1.5em;
  }
  & > p {
    font-size: ${({ font_size }) => (font_size ? `${font_size}em` : '1em')};
    line-height: ${({ line_height }) => (line_height ? `${line_height}em` : '1.2em')};
  }
`;

const Text = () => {
  const state = useContext(ConfigContext);
  return (
    <div>
      <Content
        font_size={state.font_size}
        line_height={state.line_height}
        font_family={state.font_family}
      >
        <ReactMarkdown source={rashomon.text} />
      </Content>
    </div>
  );
};

export default Text;
