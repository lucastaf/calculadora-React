import { useReducer } from "react";

export default function SavedItensList({ value, setValue, itens, setItens }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const listItens = itens.map((element, index) => (
    <tr key={index} id="listRow">
      <td>{element}</td>
      <td>
        <button id="setButton" onClick={() => setValue(value + element)}>
          Usar
        </button>
      </td>
      <td>
        <button id="deleteButton" onClick={() => deleteItem(index)}>
          Deletar
        </button>
      </td>
    </tr>
  ));

  if (itens.length == 0) {
    return <h1>Números salvos aparecem aqui</h1>;
  } else {
    return (
      <>
        <button
          id="deleteAll"
          onClick={() => {
            setItens([]);
            forceUpdate();
          }}
        >
          Apagar Tudo
        </button>
        <table id="itensList">
          <tbody>{listItens}</tbody>
        </table>
      </>
    );
  }

  function deleteItem(index) {
    itens.splice(index, 1);
    setItens(itens);
    forceUpdate();
  }
}
