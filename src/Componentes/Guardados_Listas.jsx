import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import captura from "../assets/guardados.png"
import captura_2 from "../assets/listas.png"

const Guardados_Listas = ({opcion}) => {


const readmeContent = `## Platos Guardados

Guía para entender como funcionan los platos que guardas en la vista de "Mis Platos".

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Eliminar de guardados** | Oprime si quieres eliminar ese plato de tus guardados (ten en cuenta que tus listas personalizadas se borrarán) |
| 2 | **Confirmar eliminación** | Oprime para aceptar que se elimine ese plato de tus guardados |
| 3 | **Cancelar eliminación** | Oprime para cancelar que se elimine ese plato de tus guardados |
| 4 | **Ver lista personalizada** | Oprime para ver tu lista personalizada de ese plato específico |
`;

const readmeContent_2 = `## Listas de ingredientes

Guía para entender como funcionan las listas personalizables de cada plato que guardes.

### Elementos de la interfaz

| # | Elemento | Descripción |
|---|----------|-------------|
| 1 | **Ingredientes de la receta** | Los primeros ingredientes que aparecen son los que vienen en la receta (son editables) |
| 2 | **Marcar como obtenido** | Oprime si quieres marcar el ingrediente como obtenido |
| 3 | **Agregar ingredientes** | Escribe los nuevos ingredientes que creas que necesites |
| 4 | **Guardar cambios** | Oprime para guardar todos los cambios que habías hecho |
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

export default Guardados_Listas;