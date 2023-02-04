export const CreateCalculadoraUI = () => {
  const calculadora = (operacion) => {
    switch (operacion) {
      case "suma":
        return (
          parseInt(document.getElementById("num1").value) +
          parseInt(document.getElementById("num2").value)
        );

      case "resta":
        return (
          parseInt(document.getElementById("num1").value) -
          parseInt(document.getElementById("num2").value)
        );

      case "division":
        return (
          parseInt(document.getElementById("num1").value) /
          parseInt(document.getElementById("num2").value)
        );

      case "multiplicacion":
        return (
          parseInt(document.getElementById("num1").value) *
          parseInt(document.getElementById("num2").value)
        );
    }
  };

  return (
    <div>
      <h1 id="resultado"></h1>
      <input type="number" id="num1"></input>
      <br></br>
      <input type="number" id="num2"></input>
      <br></br>
      <input type={"radio"} name={"opeacion"} value={"suma"}></input>
      <label>SUMAR</label>
      <input type={"radio"} name={"opeacion"} value={"resta"}></input>
      <label>RESTAR</label>
      <input type={"radio"} name={"opeacion"} value={"division"}></input>
      <label>DIVIR</label>
      <input type={"radio"} name={"opeacion"} value={"multiplicacion"}></input>
      <label>MULTIPLICAR</label>
      <br></br>
      <button
        onClick={() => {
          const operacion = document.querySelector(
            'input[name="opeacion"]:checked'
          ).value;
          document.getElementById(
            "resultado"
          ).textContent = `El resultado de la ${operacion} es: ${calculadora(
            operacion
          )}`;
        }}
      >
        REALIZAR OPERACION
      </button>
    </div>
  );
};
