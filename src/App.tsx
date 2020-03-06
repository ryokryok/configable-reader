import React, { useState } from "react";
//import './App.css';
import ConfigPanel from "./components/ConfigPanel";
import Text from "./components/Text";
import { PanelButton } from "./components/PanelComponents";
import ContextProvider from "./ContextProvider";

function App() {
  const [showConfig, setShowConfig] = useState(true);
  return (
    <ContextProvider>
      <PanelButton onClick={() => setShowConfig(!showConfig)}>
        Config
      </PanelButton>
      {showConfig && <ConfigPanel />}
      <Text />
    </ContextProvider>
  );
}

export default App;
