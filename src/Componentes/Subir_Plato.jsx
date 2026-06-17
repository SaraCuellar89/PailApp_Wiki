import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/subir_plato.png"
import captura_2 from "../assets/subir_plato_2.png"

const Subir_Plato = ({opcion}) => {


const readmeContent = `## Subir un plato 

Guía para subir platos al foto.

### Primera parte

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Título del plato** | Escribe el título de tu plato |
| 2 | **Foto del plato** | Selecciona o toma una foto de tu plato |
| 3 | **Ingredientes** | Escribe y agrega la cantidad de ingredientes que requieras |
| 4 | **Tiempo de preparación** | Escribe el tiempo que toma preparar tu receta |
| 5 | **Dificultad** | Selecciona la dificultad que consideras que tiene tu receta |
| 6 | **Siguiente paso** | Oprime para pasar al segundo paso para subir un plato |
`;


const readmeContent_2 = `### Segunda parte

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Editor de descripción** | Editor de texto para la descripción de tu receta |
| 2 | **Descripción** | Escribe aquí lo que quieras acerca de tu receta |
| 3 | **Editor de pasos** | Editor de texto para los pasos de preparación |
| 4 | **Pasos de preparación** | Escribe aquí todos los pasos de preparación que requiera tu receta |
| 5 | **Publicar receta** | Oprime para subir tu receta al foro |
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

export default Subir_Plato;