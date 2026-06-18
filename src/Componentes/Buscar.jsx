import React, { useRef, useEffect, useState } from "react";
import estilos from "../Componentes/css/Buscar.module.css";
import icono_lupa from "../assets/icono_lupa.png";

const todosLosItems = [
    { texto: "Qué es PailApp y para qué sirve", seccion: "Introducción" },
    { texto: "Modelos", seccion: "Introducción" },
    { texto: "Descargar e instalar la APK", seccion: "Primeros pasos" },
    { texto: "Crear una cuenta", seccion: "Primeros pasos" },
    { texto: "Iniciar sesión", seccion: "Primeros pasos" },
    { texto: "Ingresar datos adicionales", seccion: "Primeros pasos" },
    { texto: "Cómo hablarle", seccion: "El agente de IA" },
    { texto: "Cómo guardar una receta que sugiere", seccion: "El agente de IA" },
    { texto: "Cómo explorar y filtrar platos", seccion: "El foro" },
    { texto: "Cómo publicar tu propio plato", seccion: "El foro" },
    { texto: "Comentarios y respuestas", seccion: "El foro" },
    { texto: "Tu perfil y platos subidos", seccion: "Tu cuenta" },
    { texto: "Platos guardados y listas de ingredientes", seccion: "Tu cuenta" },
    { texto: "Notificaciones", seccion: "Tu cuenta" },
    { texto: "Configuración (editar datos, cambiar contraseña, eliminar cuenta)", seccion: "Tu cuenta" },
    { texto: "Recuperar contraseña", seccion: "Tu cuenta" },
    { texto: "Backend", seccion: "Instalación local" },
    { texto: "Frontend", seccion: "Instalación local" },
    { texto: "Agente", seccion: "Instalación local" },
];

const Buscar = ({ Cerrar_Busqueda, setOpcion }) => {
    const ref_input = useRef(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        ref_input.current.focus();
    }, []);

    const resultados = query.trim().length > 0
        ? todosLosItems.filter(item =>
            item.texto.toLowerCase().includes(query.toLowerCase())
          )
        : [];

    const handleSeleccionar = (item) => {
        setOpcion(item);
        Cerrar_Busqueda();
    };

    return (
        <div className={estilos.contenedor} onClick={Cerrar_Busqueda}>
            <div className={estilos.caja} onClick={(e) => e.stopPropagation()}>

                <div className={estilos.sub_caja}>
                    <img className={estilos.img} src={icono_lupa} alt="icono" />
                    <input
                        ref={ref_input}
                        className={estilos.input}
                        type="search"
                        placeholder="Busca algo..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <button className={estilos.btn_cancelar} onClick={Cerrar_Busqueda}>Cancelar</button>

                {resultados.length > 0 && (
                    <div className={estilos.resultados}>
                        {resultados.map((item, i) => (
                            <div
                                key={i}
                                className={estilos.resultado_item}
                                onClick={() => handleSeleccionar(item)}
                            >
                                <span className={estilos.resultado_seccion}>{item.seccion}</span>
                                <span className={estilos.resultado_texto}>{item.texto}</span>
                            </div>
                        ))}
                    </div>
                )}

                {query.trim().length > 0 && resultados.length === 0 && (
                    <div className={estilos.resultados}>
                        <p className={estilos.sin_resultados}>No se encontraron resultados</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Buscar;