import React, { useContext } from "react";
import { ConfigContext, DispatchContext } from "../ContextProvider";
import {
  PanelFrame,
  PanelPartsBox,
  PanelFontSwitch,
  PanelSlider,
  PanelLabel,
  PanelResetButton
} from "./PanelComponents";

function ConfigPanel() {
  const state = useContext(ConfigContext);
  const dispatch = useContext(DispatchContext);
  return (
    <PanelFrame>
      <PanelPartsBox>
        <PanelLabel>Font size</PanelLabel>
        <PanelSlider
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          name="font_size"
          value={state.font_size}
          onChange={e =>
            dispatch({
              type: "update_font_size",
              font_size: Number(e.target.value)
            })
          }
        />
      </PanelPartsBox>
      <PanelPartsBox>
        <PanelFontSwitch
          name="font_family"
          value="'Noto Sans JP', sans-serif"
          onClick={() =>
            dispatch({
              type: "update_font_family",
              font_family: "'Noto Sans JP', sans-serif"
            })
          }
        >
          Noto Sans JP
        </PanelFontSwitch>
        <PanelFontSwitch
          name="font_family"
          value="'Noto Serif JP', serif"
          onClick={() =>
            dispatch({
              type: "update_font_family",
              font_family: "'Noto Serif JP', serif"
            })
          }
        >
          Noto Serif JP
        </PanelFontSwitch>
      </PanelPartsBox>
      <PanelPartsBox>
        <PanelLabel>Line height</PanelLabel>
        <PanelSlider
          type="range"
          min="0.1"
          max="5"
          step="0.1"
          name="line_height"
          value={state.line_height}
          onChange={e =>
            dispatch({
              type: "update_line_height",
              line_height: Number(e.target.value)
            })
          }
        />
      </PanelPartsBox>
      <PanelResetButton onClick={() => dispatch({ type: "reset" })}>
        reset
      </PanelResetButton>
    </PanelFrame>
  );
}

export default ConfigPanel;
