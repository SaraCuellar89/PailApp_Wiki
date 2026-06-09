import React from "react";
import estilos from "../Componentes/css/Archivos.module.css" 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

const Backend = ({opcion}) => {


const readmeContent = `# PailApp Backend

Tecnologías utilizadas:
- Node.js / Express
- Firebase
- Google Auth
- Cloudflare R2
- MySQL

## Requerimientos
- Node.js 18+
- npm o yarn
- XAMPP

## Instalación
\`\`\`bash
git clone https://github.com/SaraCuellar89/PailApp_Backend.git
cd PailApp_Backend
npm install
\`\`\`

## Configuración
Crea un archivo \`.env\` en base al \`.env.example\` o copia directamente esto:
\`\`\`env
# Numero del puerto
PORT=

# Informacion para conectar con la base de datos
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

# Contraseña para las sesiones con JWT
JWT_SECRET=

# Correo y contraseña de aplicaciones para enviar correos con "nodemailer"
EMAIL_USER=
EMAIL_PASS=

# Variables para hacer Auth con google
CLIENT_ID=
CLIENT_SECRET=

# Variables de Cloudflare - R2
R2_BUCKET_NAME=
R2_PUBLIC_URL=
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=

# Variables para hacer Push Notification
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
\`\`\`

## Uso
\`\`\`bash
npm run dev
\`\`\`

## Estructura
\`\`\`
src/
├── config/
├── controllers/
├── helpers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── validators/
└── env.example
└── app.js
└── database_pailapp.js    # Solo hay que importar en xampp
└── index.js
\`\`\`

## Módulos y Endpoints

> El ingreso a todas las rutas requiere inicio de sesión, excepto registro, login y recuperación de contraseña.

### Usuarios
| Method | Endpoint                              | Descripción                        |
|--------|---------------------------------------|------------------------------------|
| POST   | /usuarios/registrar                   | Registrarse                        |
| POST   | /usuarios/iniciar_sesion              | Iniciar sesión local               |
| POST   | /usuarios/iniciar_sesion_google       | Iniciar sesión con Google          |
| PUT    | /usuarios/registrar_datos_adicionales | Registrar datos adicionales        |
| GET    | /usuarios/usuario_logueado            | Ver perfil                         |
| PUT    | /usuarios/editar_cuenta               | Editar cuenta                      |
| PUT    | /usuarios/editar_contrasena           | Editar contraseña                  |
| DELETE | /usuarios/eliminar_cuenta             | Eliminar cuenta                    |
| POST   | /usuarios/contrasena_olvidada         | Solicitar restablecimiento         |
| POST   | /usuarios/restablecer_contrasena      | Restablecer contraseña             |

### Publicaciones (Platos)
| Method | Endpoint                               | Descripción              |
|--------|----------------------------------------|--------------------------|
| POST   | /publicaciones/subir                   | Subir un plato           |
| GET    | /publicaciones/todas                   | Ver todos los platos     |
| GET    | /publicaciones/una/:id_publicacion     | Ver un plato             |
| GET    | /publicaciones/todas_usuario           | Platos del usuario       |
| PUT    | /publicaciones/editar/:id_publicacion  | Editar un plato          |
| DELETE | /publicaciones/eliminar/:id_publicacion| Eliminar un plato        |

### Guardados
| Method | Endpoint                          | Descripción                        |
|--------|-----------------------------------|------------------------------------|
| POST   | /guardados/guardar/:id_publicacion| Guardar / quitar guardado (toggle) |
| GET    | /guardados/listar                 | Ver platos guardados               |

### Comentarios
| Method | Endpoint                              | Descripción               |
|--------|---------------------------------------|---------------------------|
| POST   | /comentarios/subir/:id_publicacion    | Subir comentario          |
| GET    | /comentarios/todos/:id_publicacion    | Ver todos los comentarios |
| GET    | /comentarios/uno/:id_comentario       | Ver un comentario         |
| PUT    | /comentarios/editar/:id_comentario    | Editar comentario         |
| DELETE | /comentarios/eliminar/:id_comentario  | Eliminar comentario       |

### Respuestas
| Method | Endpoint                            | Descripción       |
|--------|-------------------------------------|-------------------|
| POST   | /respuestas/contestar/:id_comentario| Responder         |
| PUT    | /respuestas/editar/:id_respuesta    | Editar respuesta  |
| DELETE | /respuestas/eliminar/:id_respuesta  | Eliminar respuesta|

### Filtros
| Method | Endpoint          | Descripción                        |
|--------|-------------------|------------------------------------|
| GET    | /filtros/populares| Platos por cantidad de reacciones  |
| GET    | /filtros/antiguas | Platos por fecha (ascendente)      |
| GET    | /filtros/recientes| Platos por fecha (descendente)     |

### Ingredientes
| Method | Endpoint                                 | Descripción                    |
|--------|------------------------------------------|--------------------------------|
| POST   | /ingredientes/agregar/:id_publicacion    | Guardar lista de ingredientes  |
| GET    | /ingredientes/todos/:id_publicacion      | Listar ingredientes            |
| POST   | /ingredientes/marcar/:id_ingrediente     | Marcar como obtenido (toggle)  |

### Notificaciones
| Method | Endpoint                                        | Descripción                  |
|--------|-------------------------------------------------|------------------------------|
| GET    | /notificaciones/una/:id_notificacion            | Ver una notificación         |
| GET    | /notificaciones/todas                           | Ver todas las notificaciones |
| DELETE | /notificaciones/eliminar_una/:id_notificacion   | Eliminar una notificación    |
| DELETE | /notificaciones/eliminar_todas                  | Eliminar todas              |

### Reacciones
| Method | Endpoint                              | Descripción                    |
|--------|---------------------------------------|--------------------------------|
| POST   | /reacciones/reaccionar/:id_publicacion| Reaccionar / quitar (toggle)   |

### Token FCM
| Method | Endpoint             | Descripción                   |
|--------|----------------------|-------------------------------|
| POST   | /tokenFCM/guardar    | Guardar token del dispositivo |
| DELETE | /tokenFCM/eliminar   | Eliminar token                |

`;

    return(
        <div className={`markdown-body ${estilos.contenedor}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>
        </div>
    )
}

export default Backend;