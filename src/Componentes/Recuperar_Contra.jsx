import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/recuperar_contra.png"

const Recuperar_Contra = ({opcion}) => {


const readmeContent = `## Recuperar contraseña

Guía para poder cambiar tu contraseña en caso de que la hayas olvidado.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Correo electrónico** | Escribe tu correo electrónico |
| 2 | **Enviar código** | Oprime para que te llegue un código al correo |
| 3 | **Código de verificación** | Escribe el código que te llegó al correo |
| 4 | **Nueva contraseña** | Escribe una nueva contraseña |
| 5 | **Confirmar contraseña** | Escribe nuevamente tu contraseña |
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

export default Recuperar_Contra;