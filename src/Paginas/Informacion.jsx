import React, { useState } from "react";
import estilos from "../Paginas/css/Informacion.module.css";
import Menu from "../Componentes/Menu";
import Encabezado from "../Componentes/Encabezado";
import Backend from "../Componentes/Backend";
import Frontend from "../Componentes/Frontend";
import Agente from "../Componentes/Agente";
import Descargar_APK from "../Componentes/Descargar_APK";
import Manual_Usuarios from "../Componentes/Manul_Usuarios";
import Buscar from "../Componentes/Buscar";
import Personaje from "../Componentes/Personaje";

const Informacion = () => {

    const [buscar, setBuscar] = useState(false);

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

    const [menu_abierto, setMenu_abierto] = useState(false);

    return(
        <div>
            <Encabezado
                Abrir_Busqueda={() => setBuscar(true)}
                opcion_menu={true}
                Ver_Menu={() => setMenu_abierto(!menu_abierto)}
                menu_abierto={menu_abierto}
            />

            <div className={estilos.caja}>
                <div className={`${estilos.menu_sticky} ${menu_abierto ? estilos.menu_abierto : estilos.menu_cerrado}`}>
                    <Menu 
                        opcion={opcion} 
                        setOpcion={(op) => { setOpcion(op); setMenu_abierto(false);}} 
                    />
                </div>

                {renderizar_info()}
            </div>
            
            {buscar ? <Buscar Cerrar_Busqueda={() => setBuscar(false)}/> : null}

            <Personaje/>
        </div>
    )
}

export default Informacion;