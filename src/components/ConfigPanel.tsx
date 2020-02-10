import React, { useContext } from 'react';
import { ConfigContext, DispatchContext } from '../ContextProvider';

function ConfigPanel() {
	const state = useContext(ConfigContext);
	const dispatch = useContext(DispatchContext);
	return (
		<div>
			<h3>Config: </h3>
			<div>{JSON.stringify(state, undefined, '\t')}</div>
			<div>
				<div>
					<label>Font size</label>
					<input
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
					<label>Noto Sans JP</label>
					<input
						type="radio"
						name="font_family"
						value="'Noto Sans JP', sans-serif"
						onChange={(e) => dispatch({ type: 'update_font_family', font_family: e.target.value })}
						checked={state.font_family === "'Noto Sans JP', sans-serif"}
					/>
					<label>Noto Serif JP</label>
					<input
						type="radio"
						name="font_family"
						value="'Noto Serif JP', serif"
						onChange={(e) => dispatch({ type: 'update_font_family', font_family: e.target.value })}
						checked={state.font_family === "'Noto Serif JP', serif"}
					/>
				</div>
				<div>
					<label>Line height</label>
					<input
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
					<label>light</label>
					<input
						type="radio"
						name="mode"
						value="light"
						onChange={(e) => dispatch({ type: 'update_mode', mode: e.target.value })}
						checked={state.mode === 'light'}
					/>
				</div>
				<div>
					<label>dark</label>
					<input
						type="radio"
						name="mode"
						value="dark"
						onChange={(e) => dispatch({ type: 'update_mode', mode: e.target.value })}
						checked={state.mode === 'dark'}
					/>
				</div>
				<div>
					<button onClick={() => dispatch({ type: 'reset' })}>reset</button>
				</div>
			</div>
		</div>
	);
}

export default ConfigPanel;
