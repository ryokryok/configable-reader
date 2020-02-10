import React, { useReducer, createContext, ReactNode, Dispatch } from 'react';
import { reducer, initialState, ConfigState, ActionType } from './Reducer';

export const ConfigContext = createContext<ConfigState>(null as any);
export const DispatchContext = createContext<Dispatch<ActionType>>(null as any);

type ContextProviderProps = {
	children: ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	return (
		<ConfigContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
		</ConfigContext.Provider>
	);
};

export default ContextProvider;
