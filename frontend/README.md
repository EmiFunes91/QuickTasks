# 🖥️ QuickTasks Frontend

Interfaz web moderna para la gestión de tareas del sistema **QuickTasks**, desarrollada con **React 19**, **Vite** y **Tailwind CSS**. Este frontend interactúa con el backend de Spring Boot a través de una API REST protegida por JWT.

---

## 🚀 Características principales

- Inicio de sesión con autenticación mediante JWT
- Registro de nuevos usuarios
- Visualización de perfil del usuario autenticado
- Formularios profesionales y adaptables
- Estilos con Tailwind CSS y tipografía optimizada
- Interacción fluida con el backend mediante `fetch`/`axios`
- Estructura modular con buenas prácticas

---

## ⚙️ Tecnologías utilizadas

- **React 19**
- **Vite** (bundler moderno y ultra rápido)
- **Tailwind CSS 4**
- **PostCSS + Autoprefixer**
- **ESLint** con configuración personalizada
- Integración API REST con backend Spring Boot

---

## 📦 Instalación y ejecución

1. Navegar al directorio:

```bash
cd frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`

---

## 📁 Estructura del proyecto

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🔐 Seguridad

- Los formularios envían credenciales cifradas al backend.
- El token JWT se almacena de forma segura y se adjunta en cada solicitud protegida.
- Se valida la autenticación y los permisos en el backend.

---

## 📌 Notas adicionales

- El entorno está preparado para ser integrado fácilmente con servicios externos.
- Se recomienda emparejar con el backend de QuickTasks para tener funcionalidad completa.

---

## 📝 Licencia

Este proyecto está licenciado bajo la MIT License.

---

## 👨‍💻 Autor

**Emilio Funes**  
📍 Argentina  
💼 Backend Developer | Java | Spring Boot | React  
🔗 [LinkedIn](https://www.linkedin.com/in/emilio-funes-8b140b21a/) · [GitHub](https://github.com/EmiFunes91)

---

> _"Una buena interfaz no es solo estética, es comunicación efectiva con el usuario."_

