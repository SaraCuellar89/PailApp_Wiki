import React, { useState } from "react";
import estilos from "../Componentes/css/Tarjeta.module.css" 

const Tarjeta = ({texto_frente, icono, texto_reverso}) => {

    const [flipped, setFlipped] = useState(false);

    return(
        <div className={`${estilos.scene} ${flipped ? estilos.flipped : ""}`} onClick={() => setFlipped(!flipped)}>
            <div className={estilos.tarjeta}>
                <div className={estilos.frente}>
                    <p className={estilos.texto_frente}>{texto_frente}</p>
                    <img className={estilos.img_tarjeta} src={icono} alt="" />
                </div>

                <div className={estilos.reverso}>
                    <p className={estilos.texto_reverso}>{texto_reverso}</p>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta;