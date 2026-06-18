import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/hablar_agente.png"
import captura_2 from "../assets/hablar_agente_2.png"

const Hablar_Agente = ({opcion}) => {


const readmeContent = `## Modos de interacción con el agente

Guía de como interactuar con el agente de IA.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Chat** | Habla con el agente por medio de un chat |
| 2 | **Voz** | Habla con el agente por voz |
| 3 | **Regresar a escribir** | Regresa al modo de escritura |
`;

const readmeContent_2 = `
### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Editar mensaje** | Oprime para editar un mensaje que ya hayas enviado |
| 2 | **Reenviar mensaje** | Oprime para reenviar un mensaje |
| 3 | **Campo de edición** | Aquí puedes editar el mensaje que hayas escrito |
`;

    return(
        <div className={`markdown-body ${estilos.contenedor}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
            <div className={estilos.contenedor_capturas}>
                <div className={estilos.caja_capturas}>
                    <img className={estilos.img_capturas} src={captura} alt="" />
                </div>
            </div>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent_2}</ReactMarkdown>
            <div className={estilos.contenedor_capturas}>
                <div className={estilos.caja_capturas}>
                    <img className={estilos.img_capturas} src={captura_2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hablar_Agente;