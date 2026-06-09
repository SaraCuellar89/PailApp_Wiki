import React from "react";
import { useNavigate } from "react-router";
import estilos from "../Componentes/css/Encabezado.module.css" 
import logo from "../assets/logo.png"
import icono_lupa from "../assets/icono_lupa.png";

const Encabezado = ({Abrir_Busqueda}) => {

    const navigate = useNavigate();

    return(
        <div className={estilos.contenedor} onClick={() => navigate("/")}>
            <div className={estilos.caja_1}>
                <img className={estilos.logo} src={logo} alt="icono" />
                <p className={estilos.nombre}>PailApp</p>
            </div>

            <div className={estilos.caja_2} onClick={(e) => e.stopPropagation()}>
                <div className={estilos.sub_caja} onClick={Abrir_Busqueda}>
                    <input className={estilos.input} type="search" placeholder="Busca algo..."/>
                    <img className={estilos.img} src={icono_lupa} alt="icono" />
                </div>
            </div>
        </div>
    )
}

export default Encabezado;