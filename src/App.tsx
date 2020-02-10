import React from 'react';
import './App.css';
import ConfigPanel from './components/ConfigPanel';
import Text from './components/Text';
import ContextProvider from './ContextProvider';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<ConfigPanel />
				<Text />
			</div>
		</ContextProvider>
	);
}

export default App;
