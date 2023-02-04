import React from "react";
import ReactDOM from "react-dom/client";
import {CreateCalculadoraUI} from "./components/calculadora.UI";


const root = ReactDOM.createRoot(document.getElementById("root"));


const Saludar=(props)=>{
    return <h1>Hola Naomi</h1>
}

root.render(<>
<CreateCalculadoraUI></CreateCalculadoraUI>
</>);
