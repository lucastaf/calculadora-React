import { useReducer } from "react";

export default function SavedItensList({ setValue, itens, setItens}) {
  const[, forceUpdate] = useReducer(x => x + 1, 0);

  const listItens = itens.map((element, index) => (
    <tr key={index}>
      <td>{index}-</td>
      <td>{element}</td>
      <td><button id="setButton" onClick={() => setValue(element)}>Setar</button></td>
      <td><button id="deleteButton" onClick={() => deleteItem(index)}>Deletar</button></td>
    </tr>
  ));

  if (itens.length == 0){
    return(<h1> sem itens</h1>);
  }else{
    return (
      <table>
        <tbody> {listItens} </tbody>
      </table>
    );
  }

  function deleteItem(index){
    itens.splice(index,1);
    setItens(itens);
    forceUpdate();
  }

}
