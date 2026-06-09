import React from "react";
import estilos from "../Componentes/css/Menu.module.css" 

const Boton_Menu = ({texto, activo, onClick}) => {

    return(
        <div className={`${estilos.caja_btn} ${activo ? estilos.btn_seleccionado : ""}`} onClick={onClick}>
            <p className={estilos.texto_btn}>{texto}</p>
        </div>
    )
}

export default Boton_Menu;