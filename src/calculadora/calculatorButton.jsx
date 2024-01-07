export default function CalculatorButton({ numero, callback}) {
  return (
      <button id = "button" onClick={buttonClick}> {numero} </button>
  );

  function buttonClick(){
    if (numero == "C"){
      callback("")
    }else{
      callback(numero)
    }
  }

  
}

