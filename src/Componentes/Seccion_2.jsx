import React from "react";
import estilos from "../Componentes/css/Seccion_2.module.css" 
import descarga from "../assets/icono_descarga.png"
import robot from "../assets/personaje.png"
import qr from "../assets/qr.png"
import pantallas from "../assets/pantallas.png"

const Seccion_2 = () => {
    return(
        <div>
            <div className={estilos.contenedor_encabezado}>
                <div className={estilos.caja_encabezado}>
                    <img className={estilos.img} src={descarga} alt="" />
                    <p className={estilos.texto}>Descargar la App</p>
                </div>
            </div>

            <div className={estilos.contenedor_contenido}>

                <div className={estilos.caja_contenido}>
                    <div className={estilos.contenedor_descarga}>
                        <img className={estilos.img_robot} src={robot} alt="" />

                        <div className={estilos.caja_qr}>
                            <img className={estilos.img_qr} src={qr} alt="" />
                            <p className={estilos.texto_descarga}>¡Descarga el apk aquí!</p>
                        </div>
                    </div>

                    <img className={estilos.pantallas}  src={pantallas} alt="" />
                </div>

            </div>

            <div className={estilos.caja_btn}>
                <div className={estilos.btn}>
                    <p className={estilos.texto_btn}>Descargar PailApp v.1</p>
                </div>
            </div>
        </div>
    )
}

export default Seccion_2;