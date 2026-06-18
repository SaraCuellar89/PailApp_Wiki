import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/notificaciones.png"

const Notificaciones = ({opcion}) => {


const readmeContent = `## Notificaciones

Guía de los elementos de la vista de notificaciones.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Regresar** | Oprime si quieres regresar a la pantalla anterior |
| 2 | **Eliminar notificación** | Oprime para eliminar la notificación |
`;

    return(
        <div className={`markdown-body ${estilos.contenedor}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
            <div className={estilos.contenedor_capturas}>
                <div className={estilos.caja_capturas}>
                    <img className={estilos.img_capturas} src={captura} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Notificaciones;