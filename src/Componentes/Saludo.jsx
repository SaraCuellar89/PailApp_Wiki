import React from "react";
import estilos from "../Componentes/css/Saludo.module.css";
import personaje from "../assets/img_portada.png"
import flecha from "../assets/icono_flecha.png"

const Saludo = () => {
    return(
        <div className={estilos.contenedor}>
            <div className={estilos.caja_1}>
                <p className={estilos.saludo}>¡Bienvenido a la Wiki de PailApp!</p>
                <img className={estilos.personaje} src={personaje} alt="" />
            </div>

            <div className={estilos.caja_2}>
                <div className={estilos.btn}>
                    <p className={estilos.texto_btn}>Descargar</p>
                </div>

                <div className={estilos.btn}>
                    <p className={estilos.texto_btn}>Primeros Pasos</p>
                    <img className={estilos.img} src={flecha} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Saludo;