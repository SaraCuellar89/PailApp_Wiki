import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/explorar_platos.png"

const Explorar_Platos = ({opcion}) => {


const readmeContent = `## Explorar y filtrar platos

Guía para adentrarse en el foro tipo red social.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Filtros** | Oprime cualquiera para filtrar el orden en que aparecen los platos |
| 2 | **Imagen del plato** | Oprime para ver la imagen |
| 3 | **Like** | Oprime para darle like al plato |
| 4 | **Comentarios** | Oprime para ver los comentarios y respuestas de ese plato |
| 5 | **Guardar plato** | Oprime para añadir ese plato a tus platos guardados |
| 6 | **Subir plato** | Oprime si quieres subir un plato tú mismo | 
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

export default Explorar_Platos;