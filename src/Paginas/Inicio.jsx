import React, { useRef, useState } from "react";
import estilos from "../Paginas/css/Inicio.module.css";
import Encabezado from "../Componentes/Encabezado";
import Saludo from "../Componentes/Saludo";
import Seccion_1 from "../Componentes/Seccion_1";
import Seccion_2 from "../Componentes/Seccion_2";
import Personaje from "../Componentes/Personaje";
import Buscar from "../Componentes/Buscar";

const Inicio = () => {

    const ref_seccion_2 = useRef(null);

    const [buscar, setBuscar] = useState(false);

    return(
       <div>
            <Encabezado
                Abrir_Busqueda={() => setBuscar(true)}
            />
            
            <div className={estilos.caja_1}>
                <Saludo 
                    scrollRef={ref_seccion_2}
                /> 
            </div>

            <Seccion_1/>
            <Seccion_2
                ref={ref_seccion_2}
            />

            <Personaje/>

            {buscar ? <Buscar Cerrar_Busqueda={() => setBuscar(false)}/> : null}
       </div> 
    )
}

export default Inicio;