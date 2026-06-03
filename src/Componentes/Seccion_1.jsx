import React, { useDebugValue } from "react";
import estilos from "../Componentes/css/Seccion_1.module.css" 
import pregunta from "../assets/icono_pregunta.png"

const Seccion_1 = () => {
    return(
        <div className={estilos.contenedor}>
            <div className={estilos.caja_encabezado}>
                <p className={estilos.texto}>¿Qué es PailApp?</p>
                <img className={estilos.img} src={pregunta} alt="" />
            </div>

            <div>
                <p>
                    Aplicación Android con dos componentes centrales: un agente de inteligencia artificial con avatar virtual que recomienda y adapta recetas según los gustos del usuario, con interacción por voz y comprensión del español bogotano; y un foro social donde la comunidad publica, explora y guarda recetas propias.
                </p>

                <div>
                    <div>
                        <p>Agente IA con Avatar</p>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <p>Interaccion por voz</p>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <p>Foro de recetas</p>
                        <img src="" alt="" />
                    </div>

                    <div>
                        <p>Cocina Regional</p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seccion_1;