import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/crear_cuenta.png"

const Crear_Cuenta = ({opcion}) => {


const readmeContent = `## Crea una cuenta

Guía para crear una cuenta de manera local, sin google.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Nombre de usuario** | Escribe el nombre que desees |
| 2 | **Avatar** | Selecciona un avatar para tu perfil |
| 3 | **Correo electrónico** | Escribe tu correo electrónico |
| 4 | **Contraseña** | Escribe una contraseña |
| 5 | **Confirmar contraseña** | Escribe nuevamente tu contraseña |
| 6 | **Continuar con Google** | Oprime si quieres entrar con tu cuenta de Google |
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

export default Crear_Cuenta;