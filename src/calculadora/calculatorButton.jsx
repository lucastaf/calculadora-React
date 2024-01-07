export default function CalculatorButton({ numero, callback}) {
  return (
    <div id = "button">
      <button onClick={buttonClick}> {numero} </button>
    </div>
  );

  function buttonClick(){
    if (numero == "C"){
      callback("")
    }else{
      callback(numero)
    }
  }
}

