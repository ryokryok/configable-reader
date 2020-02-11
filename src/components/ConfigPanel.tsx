import React, { useContext } from 'react';
import { ConfigContext, DispatchContext } from '../ContextProvider';
import styled from 'styled-components';

const PanelFrame = styled.div`
	box-sizing: border-box;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
	padding-top: 2em;
	width: 100%;
	& * {
		@media (prefers-color-scheme: dark) {
			background-color: #222;
			color: #eee;
		}
		@media (prefers-color-scheme: light) {
			background-color: #eee;
			color: #222;
		}
	}
`;

const PanelLabel = styled.label`
	padding: 0.25em 0em;
	font-size: 1em;
	display: block;
`;

const ControlSlider = styled.input`
	-webkit-appearance: none;
	width: 100%;
	height: 2em;
	border-radius: 1em;
	background: gray;
	outline: none;
	opacity: 0.7;
	-webkit-transition: .2s;
	transition: opacity .2s;
	display: block;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 2em;
		height: 2em;
		border-radius: 1em;
		background: white;
		cursor: pointer;
	}
	&::-moz-range-thumb {
		width: 2em;
		height: 2em;
		border-radius: 1em;
		background: white;
		cursor: pointer;
	}
`;

const ResetButton = styled.button`
	border: 2px solid gray;
	border-radius: 2em;
	font-size: 1em;
	padding: 0.5em;
	min-width: 100px;
	background-color: #dd0000;
`;

function ConfigPanel() {
	const state = useContext(ConfigContext);
	const dispatch = useContext(DispatchContext);
	return (
		<PanelFrame>
			<div>
				<PanelLabel>Font size</PanelLabel>
				<ControlSlider
					type="range"
					min="0.1"
					max="5"
					step="0.1"
					name="font_size"
					defaultValue={state.font_size}
					onChange={(e) => dispatch({ type: 'update_font_size', font_size: Number(e.target.value) })}
				/>
			</div>
			<div>
				<PanelLabel>Noto Sans JP</PanelLabel>
				<input
					type="radio"
					name="font_family"
					value="'Noto Sans JP', sans-serif"
					onChange={(e) => dispatch({ type: 'update_font_family', font_family: e.target.value })}
					checked={state.font_family === "'Noto Sans JP', sans-serif"}
				/>
			</div>
			<div>
				<PanelLabel>Noto Serif JP</PanelLabel>
				<input
					type="radio"
					name="font_family"
					value="'Noto Serif JP', serif"
					onChange={(e) => dispatch({ type: 'update_font_family', font_family: e.target.value })}
					checked={state.font_family === "'Noto Serif JP', serif"}
				/>
			</div>
			<div>
				<PanelLabel>Line height</PanelLabel>
				<ControlSlider
					type="range"
					min="0.1"
					max="5"
					step="0.1"
					name="line_height"
					defaultValue={state.line_height}
					onChange={(e) => dispatch({ type: 'update_line_height', line_height: Number(e.target.value) })}
				/>
			</div>
			<div>
				<PanelLabel>light</PanelLabel>
				<input
					type="radio"
					name="mode"
					value="light"
					onChange={(e) => dispatch({ type: 'update_mode', mode: e.target.value })}
					checked={state.mode === 'light'}
				/>
			</div>
			<div>
				<PanelLabel>dark</PanelLabel>
				<input
					type="radio"
					name="mode"
					value="dark"
					onChange={(e) => dispatch({ type: 'update_mode', mode: e.target.value })}
					checked={state.mode === 'dark'}
				/>
			</div>
			<div>
				<ResetButton onClick={() => dispatch({ type: 'reset' })}>reset</ResetButton>
			</div>
		</PanelFrame>
	);
}

export default ConfigPanel;
