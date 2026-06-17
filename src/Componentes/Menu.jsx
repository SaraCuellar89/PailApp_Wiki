import React from "react";
import Encabezado from "./Encabezado";
import estilos from "../Componentes/css/Menu.module.css" 
import Boton_Menu from "./Boton_Menu";

const Menu = ({opcion, setOpcion}) => {

    const menuData = [
        {
            id: 1,
            texto: "Introducción",          
            subItems: [
                { texto: "Qué es PailApp y para qué sirve" },
                { texto: "Modelos" }
            ]
        },
        {
            id: 2,
            texto: "Primeros pasos",
            subItems: [
                { texto: "Descargar e instalar la APK" },
                { texto: "Crear una cuenta" },
                { texto: "Iniciar sesión" },
                { texto: "Ingresar datos adicionales" },
            ]
        },
        {
            id: 3,
            texto: "El agente de IA",
            subItems: [
                { texto: "Qué puede y qué no puede hacer" },
                { texto: "Cómo hablarle" },
                { texto: "Cómo guardar una receta que sugiere" },
                { texto: "Qué son las interacciones restantes y qué pasa cuando se acaban" },
            ]
        },
        {
            id: 4,
            texto: "El foro",
            subItems: [
                { texto: "Cómo explorar y filtrar platos" },
                { texto: "Cómo publicar tu propio plato" },
                { texto: "Comentarios y respuestas" }
            ]
        },
        {
            id: 5,
            texto: "Tu cuenta",
            subItems: [
                { texto: "Tu perfil y platos subidos" },
                { texto: "Platos guardados y listas de ingredientes" },
                { texto: "Notificaciones" },
                { texto: "Configuración (editar datos, cambiar contraseña, eliminar cuenta)" },
            ]
        },
        {
            id: 6,
            texto: "Instalación local",
            subItems: [
                { texto: "Backend" },
                { texto: "Frontend" },
                { texto: "Agente" }
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