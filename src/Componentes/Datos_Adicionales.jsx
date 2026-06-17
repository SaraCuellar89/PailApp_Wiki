import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/datos_adicionales.png"

const Datos_Adicionales = ({opcion}) => {


const readmeContent = `## Ingresar datos adicionales

Cuando inicies sesión por primera vez, el sistema te guiará paso a paso para que completes tu perfil con unos datos clave. Este paso es fundamental para activar tu entorno personalizado y asegurarnos de que la plataforma se adapte a tus necesidades desde el primer día.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Sexo** | Selecciona tu sexo |
| 2 | **Edad** | Escribe tu edad |
| 3 | **Altura** | Escribe tu altura en centímetros (Ej: 168) |
| 4 | **Peso** | Escribe tu peso en kilogramos |
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

export default Datos_Adicionales;