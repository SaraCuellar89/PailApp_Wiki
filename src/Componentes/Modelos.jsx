import React from "react";
import estilos from "../Componentes/css/Archivos.module.css";
import estilos_mod from "../Componentes/css/Modelos.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import modelo_1 from "../assets/modelo_1.png";
import modelo_2 from "../assets/modelo_2.png";
import modelo_3 from "../assets/modelo_3.png";
import modelo_4 from "../assets/modelo_4.png";

const modelos = [
    {
        id: 1,
        nombre: "Próximamente",
        estado: "Disponible",
        imagen: modelo_2,
    },
    {
        id: 2,
        nombre: "Pailero",
        estado: "En desarrollo",
        imagen: modelo_1,
    },
    {
        id: 3,
        nombre: "Próximamente",
        estado: "En desarrollo",
        imagen: modelo_3,
    },
    {
        id: 4,
        nombre: "Próximamente",
        estado: "En desarrollo",
        imagen: modelo_4,
    },
];

const introContent = `## Modelos corporales del agente

El asistente virtual de PailApp cuenta con una representación corporal en 3D que le da personalidad y cercanía al usuario. A continuación se presentan los modelos disponibles:

> **Nota:** Esta sección se actualizará a medida que se desarrollen nuevos modelos.
`;

const Modelos = () => {
  return (
    <div className={`markdown-body ${estilos.contenedor}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{introContent}</ReactMarkdown>

        <div className={estilos_mod.contenedor_modelos}>
            {modelos.map((modelo) => (
                <div key={modelo.id} className={estilos_mod.caja_modelo}>

                        <img src={modelo.imagen} alt={`Modelo ${modelo.id}`} className={estilos_mod.img_modelo}/>
                        <p>Estado: {modelo.estado}</p>
                </div>
            ))}
        </div>  
    </div>
  );
};

export default Modelos;