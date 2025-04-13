# 🧠 QuickTasks - Task Management System

![Java](https://img.shields.io/badge/Java-17+-red?style=flat&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3-green?style=flat&logo=springboot)
![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=flat&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-%231572B6.svg?style=flat&logo=docker&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> **QuickTasks** es una aplicación full stack moderna que permite registrar usuarios, iniciar sesión con JWT, y gestionar tareas personales con autenticación y persistencia en base de datos.

---

## 🚀 Tecnologías principales

- ✅ **Java 17 + Spring Boot 3.3**
- ✅ **Spring Security + JWT**
- ✅ **PostgreSQL con Docker Compose**
- ✅ **React 19 + Vite + TailwindCSS**
- ✅ Arquitectura limpia, desacoplada y escalable

---

## 🛠️ Estructura del proyecto

```
quicktasks/
├── backend/         # API RESTful con Spring Boot
├── frontend/        # Interfaz moderna con React y TailwindCSS
├── compose.yaml     # Servicio de PostgreSQL con Docker
├── start.sh         # Script para iniciar todo automáticamente
└── README.md
```

---

## ⚙️ Requisitos

- [x] Java 17 o superior
- [x] Node.js 18+ y npm
- [x] Docker + Docker Compose
- [x] Bash (o Git Bash en Windows)

---

## 🧪 Cómo iniciar el proyecto

Desde la raíz del proyecto (`quicktasks/`), ejecutá:

```bash
./start.sh
```

Esto hará lo siguiente:

1. 🐳 Levanta PostgreSQL usando Docker
2. 🧩 Ejecuta el backend con Spring Boot
3. 🎨 Ejecuta el frontend con Vite

---

## 🌐 Acceso

| Servicio     | URL                       |
|--------------|---------------------------|
| Frontend     | http://localhost:5173     |
| Backend API  | http://localhost:8080     |

---

## 🧪 Rutas útiles para testeo

| Endpoint             | Método | Descripción                   |
|----------------------|--------|-------------------------------|
| `/auth/register`     | POST   | Registro de usuario           |
| `/auth/login`        | POST   | Inicio de sesión (JWT)        |
| `/usuarios/auth/me`  | GET    | Perfil autenticado (JWT)      |

---

## 📁 TODOs

- [ ] CRUD completo de tareas
- [ ] Gestión por estado (pendiente, en proceso, hecha)
- [ ] Vistas personalizadas por usuario
- [ ] Guardado y edición de tareas

---

## 📄 Licencia

Este proyecto está bajo licencia [MIT](https://choosealicense.com/licenses/mit/).

---

## 🤝 Contribuciones

Si querés colaborar, ¡bienvenido! Podés abrir un issue, sugerir mejoras o enviar un PR.

---

## ✨ Autor

Desarrollado por [Emilio Funes](https://www.linkedin.com/in/emilio-funes-8b140b21a/)
