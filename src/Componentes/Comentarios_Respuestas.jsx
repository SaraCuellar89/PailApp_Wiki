import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/comentarios_respuestas.png"

const Comentarios_Respuestas = ({opcion}) => {


const readmeContent = `## Comentarios y respuestas

Guía para subir y editar comentarios y/o respuestas.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Escribir comentario** | Escribe un comentario |
| 2 | **Responder** | Oprime si quieres responder a un comentario |
| 3 | **Opciones** | Oprime para ver las opciones del comentario que hiciste |
| 4 | **Ver respuestas** | Oprime para ver las respuestas que ha tenido ese comentario |
| 5 | **Editar** | Oprime para editar tu comentario |
| 6 | **Eliminar** | Oprime para eliminar tu comentario |
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

export default Comentarios_Respuestas;