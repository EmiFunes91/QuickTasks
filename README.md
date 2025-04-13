# QuickTasks

**Aplicación web para gestión de tareas con autenticación JWT, backend en Spring Boot y frontend en React + Tailwind.**

---

## 📅 Estado del Proyecto

☑️ Proyecto en desarrollo activo

---

## 📊 Tecnologías utilizadas

### Backend (Spring Boot)
- Java 17
- Spring Boot 3.3.10
- Spring Security (JWT)
- Spring Data JPA
- PostgreSQL
- Docker Compose
- Lombok

### Frontend (React + Vite)
- React 19
- Vite 6
- Tailwind CSS 4
- Axios

---

## 🚀 Cómo iniciar el proyecto

Este proyecto utiliza Docker, Spring Boot y Vite con React. Para levantar todo el entorno de desarrollo, seguí estos pasos:

### Desde Bash (recomendado):
```bash
./start.sh
```

> 🔁 Este script ejecuta automáticamente:
> 1. `docker compose up -d` para levantar la base de datos (PostgreSQL)
> 2. Compila y lanza el backend con Spring Boot
> 3. Ejecuta el frontend con Vite en modo desarrollo

---

### Desde Windows (CMD o PowerShell):
Si preferís usar Windows de forma nativa, asegurate de tener Git Bash o WSL instalado.

```bash
bash start.sh
```

> 💡 También podés crear un archivo `start.bat`, pero **se recomienda mantener una única fuente de verdad usando Bash** para entornos multiplataforma.

---

## 🔍 Características
- Registro de usuarios
- Inicio de sesión con generación de token JWT
- Autenticación protegida por roles
- Conexión a base de datos con PostgreSQL
- Estilos responsivos y modernos con Tailwind

---

## 🔧 Estructura del Proyecto
```
quicktasks/
├── backend/
│   ├── src/main/java/... (código Java)
│   └── compose.yaml
├── frontend/
│   ├── src/
│   └── index.html, App.jsx, etc.
├── start.sh
└── README.md
```

---

## ✅ Próximos pasos
- [x] Registro e inicio de sesión funcional
- [ ] CRUD completo de tareas
- [ ] Panel de usuario
- [ ] Deploy en Railway o Vercel

---

## 📄 Licencia

MIT — Libre para usar, modificar y distribuir.

---

## ✨ Autor
**Emilio Funes**
- [LinkedIn](https://www.linkedin.com/in/emilio-funes-8b140b21a/)
- [GitHub](https://github.com/EmiFunes91)

---

