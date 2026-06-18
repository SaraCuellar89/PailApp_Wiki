import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import estilos from "../Paginas/css/Informacion.module.css";
import Menu from "../Componentes/Menu";
import Encabezado from "../Componentes/Encabezado";
import Personaje from "../Componentes/Personaje";
import Buscar from "../Componentes/Buscar";

import Backend from "../Componentes/Backend";
import Frontend from "../Componentes/Frontend";
import Agente from "../Componentes/Agente";
import Descargar_APK from "../Componentes/Descargar_APK";
import PailApp_Info from "../Componentes/PailApp_Info";
import Modelos from "../Componentes/Modelos";
import Iniciar_Sesion from "../Componentes/Iniciar_Sesion";
import Crear_Cuenta from "../Componentes/Crear_Cuenta";
import Datos_Adicionales from "../Componentes/Datos_Adicionales";
import Explorar_Platos from "../Componentes/Explorar_Platos";
import Subir_Plato from "../Componentes/Subir_Plato";
import Comentarios_Respuestas from "../Componentes/Comentarios_Respuestas";
import Perfil from "../Componentes/Perfil";
import Guardados_Listas from "../Componentes/Guardados_Listas";
import Notificaciones from "../Componentes/Notificaciones";
import Configuracion from "../Componentes/Configuracion";
import Recuperar_Contra from "../Componentes/Recuperar_Contra";
import Guardar_Recomendacion from "../Componentes/Guardar_Recomendacion";
import Hablar_Agente from "../Componentes/Hablar_Agente";

const Informacion = () => {

    const location = useLocation();

    const [buscar, setBuscar] = useState(false);
    const [opcion, setOpcion] = useState(location.state?.opcion || null);
    const [menu_abierto, setMenu_abierto] = useState(false);

    const renderizar_info = () => {
        switch (opcion?.texto) {
            case "Qué es PailApp y para qué sirve": return <PailApp_Info />;
            case "Modelos": return <Modelos />;
            case "Crear una cuenta": return <Crear_Cuenta />;
            case "Descargar e instalar la APK": return <Descargar_APK />;
            case "Iniciar sesión": return <Iniciar_Sesion />;
            case "Ingresar datos adicionales": return <Datos_Adicionales />;
            case "Cómo hablarle": return <Hablar_Agente />;
            case "Cómo guardar una receta que sugiere": return <Guardar_Recomendacion />;
            case "Cómo explorar y filtrar platos": return <Explorar_Platos />;
            case "Cómo publicar tu propio plato": return <Subir_Plato />;
            case "Comentarios y respuestas": return <Comentarios_Respuestas />;
            case "Tu perfil y platos subidos": return <Perfil />;
            case "Platos guardados y listas de ingredientes": return <Guardados_Listas />;
            case "Notificaciones": return <Notificaciones />;
            case "Configuración (editar datos, cambiar contraseña, eliminar cuenta)": return <Configuracion />;
            case "Recuperar contraseña": return <Recuperar_Contra />;
            case "Backend": return <Backend />;
            case "Frontend": return <Frontend />;
            case "Agente": return <Agente />;
            case "Manual de Usuarios": return <Manual_Usuarios />;
            default: return <PailApp_Info />;
        }
    };

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
            
            {buscar ? (
                <Buscar
                    Cerrar_Busqueda={() => setBuscar(false)}
                    setOpcion={(op) => { setOpcion(op); setMenu_abierto(false); }}  // ← igual que en Menu
                />
            ) : null}

            <Personaje/>
        </div>
    )
}

export default Informacion;