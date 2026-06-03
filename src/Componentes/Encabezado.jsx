import React from "react";
import estilos from "../Componentes/css/Encabezado.module.css" 
import logo from "../assets/logo.png"
import icono_lupa from "../assets/icono_lupa.png";

const Encabezado = () => {
    return(
        <div className={estilos.contenedor}>
            <div className={estilos.caja_1}>
                <img className={estilos.logo} src={logo} alt="icono" />
                <p className={estilos.nombre}>PailApp</p>
            </div>

            <div className={estilos.caja_2}>
                <div className={estilos.sub_caja}>
                    <input className={estilos.input} type="search" placeholder="Busca algo..."/>
                    <img className={estilos.img} src={icono_lupa} alt="icono" />
                </div>
            </div>
        </div>
    )
}

export default Encabezado;