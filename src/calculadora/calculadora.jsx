import { useState } from "react";
import TableButtons from "./tableButtons";

export default function Calculadora() {
  const [value, setValue] = useState("");

  return (
    <fieldset id="calculatorArea">
      <h1> Calculadora </h1>
      <input type="text" id="result" value={value} readOnly />
      <br />
      <TableButtons
        addText={addText}
        deleteText={deleteText}
        resolve={solve}
        setValue={setValue}
      />
      <h1 />
    </fieldset>
  );

  function addText(text) {
    setValue(value + text);
  }

  function deleteText() {
    setValue(value.slice(0, -1));
  }

  function solve() {
    try {
      if (value == "Error" || value == "") {
        throw "Error";
      }
      let result = String(eval(value));

      setValue(result);
    } catch {
      setValue("Error");
    }
  }
}
