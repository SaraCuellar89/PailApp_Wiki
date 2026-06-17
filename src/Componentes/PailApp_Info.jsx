import React from "react";
import estilos from "../Componentes/css/Archivos.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

const readmeContent = `# PailApp – Tu Asistente de Cocina

Aplicación móvil para Android que facilita la experiencia culinaria de jóvenes y estudiantes, dando visibilidad a recetas tradicionales colombianas poco conocidas.


## ¿Qué es PailApp?

PailApp es una app diseñada para jóvenes de 18 a 30 años con poco tiempo, poca experiencia en cocina y presupuesto limitado. Combina inteligencia artificial, interacción por voz y una comunidad social para hacer que cocinar sea accesible, divertido y culturalmente cercano.


## Funcionalidades principales

### Asistente virtual con IA
- Recomienda y adapta recetas según tus gustos, presupuesto e ingredientes disponibles
- Interacción por voz con comprensión de modismos bogotanos
- Representación corporal en 3D para una experiencia más cercana

### Foro social
- Publica, explora y guarda recetas
- Construye comunidad con otros usuarios apasionados por la cocina colombiana

### Listas de ingredientes inteligentes
- Se ajustan automáticamente según la cantidad de personas
- El asistente las modifica según lo que tengas disponible, evitando el desperdicio


## ¿A quién va dirigida?

Jóvenes y estudiantes (estratos 1, 2 y 3) que:
- No tienen mucho tiempo para cocinar
- Tienen poca experiencia en la cocina
- Buscan comer bien sin gastar de más


## Nuestra misión

Rescatar y visibilizar la gastronomía colombiana tradicional y regional, rompiendo con los estereotipos culinarios del país y acercando a los jóvenes a sus raíces culturales a través de la comida.


## Equipo

| Nombre | Rol |
|---|---|
| Sara Cuellar | Desarrolladora de Backend |
| Brendon Meléndez | Desarrollador de Agente de IA |
| Laura Ospina | Frontend & Modelado 3D |
| Kevin Páez | Frontend & Modelado 3D |

> Todos aprendices del SENA en Análisis y Desarrollo de Software.
`;

const PailApp_Info = ({ opcion }) => {
    return (
        <div className={`markdown-body ${estilos.contenedor}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
        </div>
    );
};

export default PailApp_Info;