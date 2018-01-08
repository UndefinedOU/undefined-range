import "./index.css";

import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";

import {
  Input as UndefinedInput
} from "undefined-inputs";

import {
  Range,
  RangeGroup
} from "./components";

import registerServiceWorker from "./registerServiceWorker";

const Input = styled(UndefinedInput)`
  width: 48px;
`;

const style = {
  margin: "20px",
  width: "400px",
  padding: "10px",
  "backgroundColor": "#ddd"
};

ReactDOM.render(
  <div style={{padding: "20px"}}>
    <div style={style}>
      <Range value={30} min={0} max={200} />
    </div>

    <div style={style}>
      <RangeGroup value={50}>
        <Range min={0} max={100} />
      </RangeGroup>
    </div>

    <hr/>

    <div style={style}>
      <RangeGroup value={80}>
        <Input max={200} type="number"/>
        <Range min={0} max={150} />
      </RangeGroup>
    </div>

    <div style={style}>
      <RangeGroup value={80}>
        <Range min={0} max={150} />
        <Input type="number"/>
      </RangeGroup>
    </div>

    <hr/>

    <div style={{...style, width: "60px", height: "200px"}}>
      <Range value={30} min={0} max={200} direction="vertical" />
    </div>

    <div style={{...style, width: "60px", height: "200px"}}>
      <RangeGroup direction="vertical" value={80}>
        <Range min={0} max={150} />
        <Input type="number"/>
      </RangeGroup>
    </div>

    <div style={{...style, width: "60px", height: "200px"}}>
      <RangeGroup direction="vertical" value={80}>
        <Input type="number"/>
        <Range min={0} max={150} />
      </RangeGroup>
    </div>
  </div>
  , document.getElementById("root")
);
registerServiceWorker();
