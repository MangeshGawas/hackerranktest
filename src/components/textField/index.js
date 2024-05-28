import React from "react";
import "./index.css";

function TextField ({labelText, onChange}) {

  return (
    <div className="textfield">
        <label data-testid="label"></label>
        <input data-testid="input" onChange={null}></input>
    </div>
  );
}

export default TextField;