import React from "react";
import estilos from "../Componentes/css/Archivos.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import qr from "../assets/qr.png"

const readmeContent = `# Descargar PailApp

Escanea el QR o descarga directamente el archivo APK para instalar la app en tu dispositivo Android.

## Requisitos
- Android 8.0 o superior
- Permitir instalación de fuentes desconocidas

## Cómo habilitar fuentes desconocidas

1. Ve a **Ajustes** en tu dispositivo.
2. Entra a **Seguridad** o **Privacidad**.
3. Activa **Instalar apps de fuentes desconocidas**.

## Descarga
`;

const Descargar_APK = ({ opcion }) => {
    return (
        <div className={`markdown-body ${estilos.contenedor}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readmeContent}</ReactMarkdown>

            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <img
                    src={qr}
                    alt="QR de descarga"
                    style={{ width: 200, height: 200 }}
                />
                <p style={{ marginTop: "1rem" }}>
                    <a href="/pailapp.apk" download>
                        Descargar APK directamente
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Descargar_APK;