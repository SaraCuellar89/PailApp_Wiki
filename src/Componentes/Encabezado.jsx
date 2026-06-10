import React from "react";
import { useNavigate } from "react-router";
import estilos from "../Componentes/css/Encabezado.module.css" 
import logo from "../assets/logo.png"
import icono_lupa from "../assets/icono_lupa.png";
import icono_menu from "../assets/icono_menu.png";
import icono_x from "../assets/icono_x.png";

const Encabezado = ({Abrir_Busqueda, opcion_menu, Ver_Menu, menu_abierto}) => {

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
            
            {opcion_menu ?
            (
                <div className={estilos.caja_menu}>
                    <img 
                        className={estilos.img_menu} 
                        src={menu_abierto ? icono_x : icono_menu} 
                        alt="" 
                        onClick={(e) => {e.stopPropagation(); Ver_Menu()}}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default Encabezado;