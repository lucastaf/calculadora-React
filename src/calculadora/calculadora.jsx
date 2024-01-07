import { useState } from "react";
import TableButtons from "./tableButtons";
import SavedItensList from "./savedItensList";

export default function Calculadora() {
  const [value, setValue] = useState("");
  const [itens, setItens] = useState([]);

  return (
    <>
      <fieldset id="calculatorArea">
        <h1> Calculadora </h1>
        <div id="textArea">
          <input type="text" id="result" value={value} readOnly />
          <br />
          <button id="save" onClick={addValue}>
            {" "}
            salvar{" "}
          </button>
          <br />
        </div>

        <TableButtons value={value} setValue={setValue} solve={solve} />
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
