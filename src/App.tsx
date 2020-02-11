import React, { useState } from 'react';
//import './App.css';
import ConfigPanel from './components/ConfigPanel';
import Text from './components/Text';
import PanelButton from './components/PanelButton';
import ContextProvider from './ContextProvider';

function App() {
	const [ showConfig, setShowConfig ] = useState(false);

	return (
		<ContextProvider>
			<PanelButton onClick={() => setShowConfig(!showConfig)}>Show config</PanelButton>
			{showConfig && <ConfigPanel />}
			<Text />
		</ContextProvider>
	);
}

export default App;
