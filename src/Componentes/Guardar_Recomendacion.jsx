import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/guardar_reco.png"

const Guardar_Recomendacion = ({opcion}) => {


const readmeContent = `## Guardar una receta que sugiere

Guía para entender como guardar un plato que te haya sugerido el agente.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Escuchar mensajes** | Oprime si quieres escuchar los mensajes del agente |
| 2 | **Guardar receta sugerida** | Oprime si quieres guardar una receta sugerida por el agente |
| 3 | **Título de la receta** | Título que le quieras poner a la receta |
| 4 | **Imagen de la publicación** | Imagen opcional que quieras que aparezca en la publicación |
| 5 | **Cancelar** | Oprime si ya no quieres guardar la receta |
| 6 | **Confirmar guardado** | Oprime si quieres guardar la receta |
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

export default Guardar_Recomendacion;