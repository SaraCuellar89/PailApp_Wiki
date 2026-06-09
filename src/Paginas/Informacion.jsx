import React, { useState } from "react";
import estilos from "../Paginas/css/Informacion.module.css";
import Menu from "../Componentes/Menu";
import Encabezado from "../Componentes/Encabezado";
import Backend from "../Componentes/Backend";
import Frontend from "../Componentes/Frontend";
import Agente from "../Componentes/Agente";
import Descargar_APK from "../Componentes/Descargar_APK";
import Manual_Usuarios from "../Componentes/Manul_Usuarios";

const Informacion = () => {

    const [opcion, setOpcion] = useState(null);

    const renderizar_info = () => {
        switch (opcion?.texto) {
            case "Backend":       return <Backend />;
            case "Frontend":      return <Frontend />;
            case "Agente":        return <Agente />;
            case "Descargar APK":        return <Descargar_APK />;
            case "Manual de Usuarios":        return <Manual_Usuarios />;
            // ... todos los subitems
            default: return <Backend />;
        }
    };

    return(
        <div>
            <Encabezado/>

            <div className={estilos.caja}>
                <div className={estilos.menu_sticky}>
                    <Menu opcion={opcion} setOpcion={setOpcion} />
                </div>

                {renderizar_info()}
            </div>
            
        </div>
    )
}

export default Informacion;