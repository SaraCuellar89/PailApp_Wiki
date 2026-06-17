import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/perfil.png"
import captura_2 from "../assets/tus_platos.png"

const Perfil = ({opcion}) => {


const readmeContent = `## Tu perfil

Guía para entender como funciona tu perfil.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Configuración** | Oprime para ver la configuración de la aplicación |
| 2 | **Avatar y nombre de usuario** | Tu avatar y tu nombre de usuario (editable en configuración) |
| 3 | **Datos adicionales** | Tu edad, sexo, altura y peso (editable en configuración) |
`;

const readmeContent_2 = `## Tus platos subidos

Guía para administrar los platos que hayas subido.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Opciones del plato** | Oprime para ver las opciones del plato que subiste |
| 2 | **Interacciones** | Puedes dar like, ver comentarios, guardar el plato y más, igual que en el foro |
| 3 | **Editar plato** | Oprime para editar tu plato |
| 4 | **Eliminar plato** | Oprime para eliminar tu plato |
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

export default Perfil;