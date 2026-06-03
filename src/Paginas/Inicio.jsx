import React from "react";
import estilos from "../Paginas/css/Inicio.module.css";
import Encabezado from "../Componentes/Encabezado";
import Saludo from "../Componentes/Saludo";
import Seccion_1 from "../Componentes/Seccion_1";

const Inicio = () => {
    return(
       <div>
            <Encabezado/>
            
            <div className={estilos.caja_1}>
                <Saludo/>
            </div>

            <Seccion_1/>
       </div> 
    )
}

export default Inicio;