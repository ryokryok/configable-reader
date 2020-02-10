export type ConfigState = {
	font_size?: number;
	font_family?: string;
	line_height?: number;
	mode?: 'light' | 'dark' | undefined | string;
};

export const initialState: ConfigState = {
	font_size: 1,
	font_family: "'Noto Sans JP', sans-serif",
	line_height: 1.2,
	mode: 'light'
};

export type ActionType = ConfigState & {
	type: 'reset' | 'update_font_size' | 'update_font_family' | 'update_line_height' | 'update_mode';
};

export function reducer(state: ConfigState, action: ActionType) {
	switch (action.type) {
		case 'reset':
			return initialState;
		case 'update_font_size':
			return { ...state, font_size: action.font_size };
		case 'update_font_family':
			return { ...state, font_family: action.font_family };
		case 'update_line_height':
			return { ...state, line_height: action.line_height };
		case 'update_mode':
			return { ...state, mode: action.mode };
		default:
			return state;
	}
}
