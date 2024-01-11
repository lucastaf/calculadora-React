import Button from '@mui/material/Button';

export default function CalculatorButton({ numero, callback}) {
  return (
      <Button id = "button" variant="contained" onClick={buttonClick}> {numero} </Button>
  );

  function buttonClick(){
    if (numero == "C"){
      callback("")
    }else{
      callback(numero)
    }
  }

  
}

