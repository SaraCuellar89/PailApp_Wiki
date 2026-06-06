import React, { useDebugValue } from "react";
import estilos from "../Componentes/css/Seccion_1.module.css" 
import pregunta from "../assets/icono_pregunta.png"
import Tarjeta from "./Tarjeta";
import robot from "../assets/icono_robot.png"
import voz from "../assets/icono_voz.png"
import foro from "../assets/icono_foro.png"
import cocina from "../assets/icono_cocina.png"

const Seccion_1 = () => {
    return(
        <div>
            <div className={estilos.caja_encabezado}>
                <p className={estilos.texto}>¿Qué es PailApp?</p>
                <img className={estilos.img} src={pregunta} alt="" />
            </div>

            <div className={estilos.contenedor_contenido}>
                <div className={estilos.caja_contenido}>
                    <p>
                        Aplicación Android con dos componentes centrales: un agente de inteligencia artificial con avatar virtual que recomienda y adapta recetas según los gustos del usuario, con interacción por voz y comprensión del español bogotano; y un foro social donde la comunidad publica, explora y guarda recetas propias.
                    </p>

                    <div className={estilos.caja_tarjetas}>
                        <Tarjeta
                            texto_frente="Agente IA con avatar"
                            icono={robot}
                            texto_reverso="Recomienda y adapta recetas según tus gustos, con representación corporal virtual y soporte de voz."
                        />

                        <Tarjeta
                            texto_frente="Interacción por voz"
                            icono={voz}
                            texto_reverso="Entiende modismos y expresiones del español bogotano para una experiencia más natural."
                        />

                        <Tarjeta
                            texto_frente="Foro de recetas"
                            icono={foro}
                            texto_reverso="Publica, explora y guarda recetas. Construye comunidad con otros cocineros aficionados."
                        />

                        <Tarjeta
                            texto_frente="Cocina regional"
                            icono={cocina}
                            texto_reverso="Visibiliza recetas tradicionales y regionales de Colombia, más allá de los estereotipos."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seccion_1;