import React from "react";
import Encabezado from "./Encabezado";
import estilos from "../Componentes/css/Menu.module.css" 
import Boton_Menu from "./Boton_Menu";

const Menu = ({opcion, setOpcion}) => {

    const menuData = [
        {
            id: 1,
            texto: "Instalación y Usos",          
            subItems: [
                { texto: "Backend" },
                { texto: "Frontend" },
                { texto: "Agente" },
                { texto: "Descargar APK" },    
            ]
        },
        {
            id: 2,
            texto: "Usar la aplicación",
            subItems: [
                { texto: "Manual de Usuarios" }
            ]
        },
        {
            id: 3,
            texto: "Acerca del Agente de IA",
            subItems: [
                { texto: "Interacciones" },
                { texto: "Sistema de recomendaciones" },
                { texto: "Modelos y demás" },
            ]
        },
    ];

    return(
        <div className={estilos.contenedor_general}>
            
            {menuData.map((seccion) => (
                <React.Fragment key={seccion.id}>
                    <Boton_Menu texto={seccion.texto} /> 

                    <div className={estilos.sub_caja}>
                        {seccion.subItems.map((item, index) => (
                            <Boton_Menu
                                key={index}
                                texto={item.texto}
                                activo={opcion?.texto === item.texto}
                                onClick={() => setOpcion(item)}  // ← item, no seccion
                            />
                        ))}
                    </div>
                </React.Fragment>
            ))}

        </div>
    )
}

export default Menu;