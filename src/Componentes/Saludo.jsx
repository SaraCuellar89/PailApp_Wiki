import React from "react";
import estilos from "../Componentes/css/Saludo.module.css";
import personaje from "../assets/img_portada.png"
import flecha from "../assets/icono_flecha.png"
import { useNavigate } from "react-router-dom";

const Saludo = ({scrollRef}) => {

    const navigate = useNavigate();

    const scroll_seccion2 = () => {
        
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <div className={estilos.contenedor}>
            <div className={estilos.caja_1}>
                <p className={estilos.saludo}>¡Bienvenido a la Wiki de PailApp!</p>
                <img className={estilos.personaje} src={personaje} alt="" />
            </div>

            <div className={estilos.caja_2}>
                <div className={estilos.btn} onClick={scroll_seccion2}>
                    <p className={estilos.texto_btn}>Descargar</p>
                </div>

                <div className={estilos.btn} onClick={() => navigate('/Info')}>
                    <p className={estilos.texto_btn}>Primeros Pasos</p>
                    <img className={estilos.img} src={flecha} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Saludo;