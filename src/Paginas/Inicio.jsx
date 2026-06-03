import React from "react";
import estilos from "../Paginas/css/Inicio.module.css";
import Encabezado from "../Componentes/Encabezado";
import Saludo from "../Componentes/Saludo";

const Inicio = () => {
    return(
       <div>
            <Encabezado/>
            
            <div className={estilos.caja_1}>
                <Saludo/>
            </div>
       </div> 
    )
}

export default Inicio;