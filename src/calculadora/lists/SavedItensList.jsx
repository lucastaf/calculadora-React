import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useReducer } from "react";

export default function SavedItensList({ value, setValue, itens, setItens }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const listItens = itens.map((element, index) => (
    <TableRow key={index} id="listRow">
      <TableCell align="right" id="listCell">{element}</TableCell>
      <TableCell align="right" id="listCell">
        <AddBoxOutlinedIcon id="setButton" onClick={() => setValue(value + element)}>
          Usar
        </AddBoxOutlinedIcon>
      </TableCell>
      <TableCell align="right" id="listCell">
        <DeleteOutlineOutlinedIcon id="deleteButton" onClick={() => deleteItem(index)}>
          Deletar
        </DeleteOutlineOutlinedIcon>
      </TableCell>
    </TableRow>
  ));

  if (itens.length == 0) {
    return <h1>Números salvos aparecem aqui</h1>;
  } else {
    return (
      <>
        <Button
          id="deleteAll"
          onClick={() => {
            setItens([]);
            forceUpdate();
          }}
        >
          Apagar Tudo
        </Button>
        <Table id="itensList">
          <TableBody>{listItens}</TableBody>
        </Table>
      </>
    );
  }

  function deleteItem(index) {
    itens.splice(index, 1);
    setItens(itens);
    forceUpdate();
  }
}
