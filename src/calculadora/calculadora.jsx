import { useState } from "react";
import CalculatorButtonsList from "./lists/CalculatorButtonsList";
import SavedItensList from "./lists/SavedItensList";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 
export default function Calculadora() {
  const [value, setValue] = useState("");
  const [itens, setItens] = useState([]);

  return (
    <>
      <fieldset id="calculatorArea">
        <h1> Calculadora </h1>
        <div id="textArea">
          <TextField  type="text" id="result" value={value} readOnly />
          <br />
          <Button id="save" onClick={addValue}>
            {" "}
            salvar{" "}
          </Button>
          <br />
        </div>

        <CalculatorButtonsList value={value} setValue={setValue} solve={solve} />
        <br />
      </fieldset>

      <SavedItensList value={value} setItens={setItens} setValue={setValue} itens={itens} />
    </>
  );

  function addValue() {
    let result = solve();
    if (result == "" || result == "Error") return;
    itens.unshift(result);
    setItens(itens);
    setValue("");
  }

  function solve() {
    try {
      if (value == "Error" || value == "") {
        throw "Error";
      }
      let result = String(eval(value));

      setValue(result);
      return result;
    } catch {
      setValue("Error");
      return 0;
    }
  }
}
