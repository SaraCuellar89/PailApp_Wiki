import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/configuracion.png"
import captura_2 from "../assets/editar_cuenta.png"
import captura_3 from "../assets/editar_contra.png"

const Configuracion = ({opcion}) => {


const readmeContent = `## Opciones de configuración

Guía de los elementos de la pantalla de configuración.

### Elementos de la interfaz

> La opción de "Tema" es una función que implementaremos en el futuro.

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Editar información** | Oprime si quieres editar la información de tu cuenta |
| 2 | **Cambiar contraseña** | Oprime si quieres cambiar tu contraseña (si inicias sesión con Google, esta opción no aplica) |
| 3 | **Cerrar sesión** | Oprime si quieres salir de tu cuenta |
| 4 | **Eliminar cuenta** | Oprime si quieres eliminar tu cuenta de manera permanente |
`;

const readmeContent_2 = `## Editar iformación de tu cuenta

Guía para editar los datos de tu cuenta.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Nombre de usuario** | Edita tu nombre de usuario |
| 2 | **Avatar** | Edita tu avatar |
| 3 | **Correo electrónico** | Edita tu correo electrónico |
| 4 | **Sexo** | Edita tu sexo |
| 5 | **Edad** | Edita tu edad |
| 6 | **Altura** | Edita tu altura en centímetros |
| 7 | **Peso** | Edita tu peso en kilogramos |
`;

const readmeContent_3 = `## Formualio para cambiar la contraseña

> Si te registraste con tu gmail, no puedes cambiar la contraseña, esto debido a que no cuentas con una como tal.

> Si te registraste sin gmail y luego vinculaste tu cuenta a google, el cambio de contraseña si aplica para ti.

Guía para editar tu contraseña.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Contraseña actual** | Escribe tu contraseña actual |
| 2 | **Nueva contraseña** | Escribe tu nueva contraseña |
| 3 | **Confirmar contraseña** | Reescribe tu nueva contraseña |
| 4 | **Guardar cambios** | Oprime para guardar los cambios |
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

            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent_3}</ReactMarkdown>
            <div className={estilos.contenedor_capturas}>
                <div className={estilos.caja_capturas}>
                    <img className={estilos.img_capturas} src={captura_3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Configuracion;