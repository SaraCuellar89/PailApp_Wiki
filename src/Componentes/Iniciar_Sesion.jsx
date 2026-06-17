import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/iniciar_sesion.png"

const Crear_Cuenta = ({opcion}) => {


const readmeContent = `## Iniciar Sesión

Guía para iniciar sesion con correo y contraseña.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Correo electrónico** | Escribe tu correo electrónico |
| 2 | **Contraseña** | Ingresa tu contraseña |
| 3 | **¿Olvidaste tu contraseña?** | Oprime si olvidaste tu contraseña y la quieres cambiar |
| 4 | **Iniciar sesión** | Oprime para validar tu cuenta |
| 5 | **Continuar con Google** | Oprime si quieres entrar con tu cuenta de Google |
| 6 | **Crear una cuenta** | Oprime "crear una" para crear una cuenta si aún no tienes |
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