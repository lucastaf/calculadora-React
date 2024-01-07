import CalculatorButton from "./calculatorButton";

export default function TableButtons({
  addText,
  deleteText,
  setValue,
  resolve,
}) {
  return (
    <table id="tableButtons">
      <tbody>
        <tr>
          <td>
            <CalculatorButton numero="C" callback={setValue} />
          </td>
          <td>
            <CalculatorButton numero="(" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero=")" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="/" callback={addText} />
          </td>
        </tr>
        <tr>
          <td>
            <CalculatorButton numero="9" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="8" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="7" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="*" callback={addText} />
          </td>
        </tr>
        <tr>
          <td>
            <CalculatorButton numero="4" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="5" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="6" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="-" callback={addText} />
          </td>
        </tr>
        <tr>
          <td>
            <CalculatorButton numero="1" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="2" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="3" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="+" callback={addText} />
          </td>
        </tr>
        <tr>
          <td>
            <CalculatorButton numero="0" callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="." callback={addText} />
          </td>
          <td>
            <CalculatorButton numero="<" callback={deleteText} />
          </td>
          <td>
            <CalculatorButton numero="=" callback={resolve} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}