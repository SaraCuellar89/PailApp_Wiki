import React, { useRef, useEffect } from "react";
import estilos from "../Componentes/css/Buscar.module.css" 
import icono_lupa from "../assets/icono_lupa.png";

const Buscar = ({Cerrar_Busqueda}) => {

    const ref_input = useRef(null);

    useEffect(() => {
        ref_input.current.focus();
    }, []);

    return(
        <div className={estilos.contenedor} onClick={Cerrar_Busqueda}>
            <div className={estilos.caja} onClick={(e) => e.stopPropagation()}>
                <div className={estilos.sub_caja}>
                    <img className={estilos.img} src={icono_lupa} alt="icono" />
                    <input 
                        ref={ref_input}
                        className={estilos.input} 
                        type="search" 
                        placeholder="Busca algo..."
                    />
                </div>

                <button className={estilos.btn_cancelar} onClick={Cerrar_Busqueda}>Cancelar</button>
            </div>
        </div>
    )
}

export default Buscar;