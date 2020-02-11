import React, { useContext } from 'react';
import { ConfigContext } from '../ContextProvider';
import styled from 'styled-components';
import { ConfigState } from '../Reducer';
import TextData from '../data/rashomon';

const Title = styled.h1`
	font-size: 2em;
	padding: 0em 0.5em;
`;

const Author = styled.h2`
	font-size: 1.5em;
	padding: 0em 0.25em;
`;

const Content =
	styled.div <
	ConfigState >
	`
font-size: ${({ font_size }) => (font_size ? `${font_size}em` : '1em')};
line-height: ${({ line_height }) => (line_height ? `${line_height}em` : '1.2em')};
font-family: ${({ font_family }) => (font_family ? `${font_family}` : '')};
`;

const Text = () => {
	const state = useContext(ConfigContext);
	return (
		<div>
			<Title> {TextData.title}</Title>
			<Author>{TextData.author}</Author>
			<Content font_size={state.font_size} line_height={state.line_height} font_family={state.font_family}>
				{TextData.text}
			</Content>
		</div>
	);
};

export default Text;
