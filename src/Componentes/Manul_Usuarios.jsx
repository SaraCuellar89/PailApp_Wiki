import React from "react";
import estilos from "../Componentes/css/Archivos.module.css";
import manual from "../assets/Manual_Usuarios.pdf"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

const Manual_Usuarios = ({ opcion }) => {

const readmeContent = `# Manual de Usuario — PailApp

Guía completa para usar la aplicación. Incluye registro, navegación, foro, recetas y chatbot.

## Contenido del manual

- Registro e inicio de sesión
- Navegación general
- Foro: publicar, comentar y reaccionar
- Platos guardados y listas de ingredientes
- Chatbot de cocina saludable
- Configuración y edición de perfil
`;


    return (
        <div className={estilos.contenedor}>
            <div className="markdown-body" style={{ paddingBottom: "1rem" }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
            </div>

            <iframe
                src={manual}
                width="100%"
                height="100vh"
                style={{ border: "none", minHeight: "100vh" }}
            />
        </div>
    );
};

export default Manual_Usuarios;