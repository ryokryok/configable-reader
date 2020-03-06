import styled from "styled-components";

export const PanelFrame = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 0;
  margin-block: 1em;
  width: 30em;
  @media (prefers-color-scheme: dark) {
    background-color: #444;
    color: #ddd;
  }
  @media (prefers-color-scheme: light) {
    background-color: #ddd;
    color: #444;
  }
  @media screen and (max-width: 30em) {
    width: 100%;
  }
  & > * {
    display: block;
    margin: 0.5em;
    padding: 0.5em;
    border-bottom: 1px gray solid;
  }

  & div:first-child {
    margin-top: 3em;
  }
`;

export const PanelPartsBox = styled.div`
  display: block;
`;

export const PanelLabel = styled.label`
  padding: 0.25em 0em;
  font-size: 1em;
  display: block;
  font-weight: bold;
`;

export const PanelButton = styled.button`
  padding: 0.5em;
  font-size: 1em;
  border-radius: 1em;
  background-color: gray;
  color: white;
  position: fixed;
  top: 0.5em;
  right: 0.5em;
  z-index: 200;
`;

export const PanelResetButton = styled.label`
  border: 0px none;
  border-radius: 2em;
  font-size: 1em;
  color: #fff;
  padding: 0.5em;
  min-width: 100px;
  background-color: #dd0000;
  text-align: center;
`;

export const PanelSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2em;
  border-radius: 1em;
  background: gray;
  outline: none;
  opacity: 1;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
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

export const PanelFontSwitch = styled.button`
  min-width: 8em;
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 2em;
  background-color: gray;
  font-size: 1em;
  color: #fff;
  text-align: center;
`;
