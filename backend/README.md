# QuickTasks – Backend

Sistema backend para QuickTasks, una aplicación moderna de gestión de tareas. Desarrollado en **Java 17** con **Spring Boot 3**, seguridad con JWT y persistencia en **PostgreSQL** usando JPA/Hibernate. Se ejecuta junto con el frontend (React + Tailwind) y se orquesta vía Docker Compose.

## 🚀 Tecnologías utilizadas

- **Java 17**
- **Spring Boot 3.3.10**
- **Spring Security**
- **JWT (JSON Web Token)**
- **PostgreSQL**
- **Hibernate / JPA**
- **Docker Compose**
- **Maven**

## 🧩 Estructura del proyecto

```
quicktasks/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── compose.yaml
│   └── README.md
└── frontend/
    └── ...
```

## ⚙️ Comandos de ejecución

> Asegurate de tener Docker Desktop y Java 17+ instalados.

1. **Levantar base de datos**:
```bash
docker-compose up -d
```

2. **Ejecutar la API backend**:
```bash
./mvnw spring-boot:run
```

3. **(Opcional) Ejecutar todos los pasos automáticamente**:
```bash
bash start.sh
```

---

## 📦 Endpoints principales

- `POST /auth/register` – Registro de usuario
- `POST /auth/login` – Inicio de sesión y generación de token
- `GET /usuarios/auth/me` – Obtener datos del usuario autenticado (requiere token)

> Los endpoints protegidos usan JWT como mecanismo de autenticación. Debe enviarse el token en cada request mediante el header: `Authorization: Bearer <token>`

## 🔐 Seguridad

La autenticación está basada en JWT y configurada globalmente con un filtro personalizado (`JwtAuthenticationFilter`). Solo las rutas `/auth/**` están abiertas al público, todo el resto requiere autenticación.

## 🧪 Test rápido con Postman

1. Registrar un usuario (`/auth/register`)
2. Loguearse (`/auth/login`) y copiar el token
3. Acceder al endpoint `/usuarios/auth/me` con el token en el header.

## 💡 Buenas prácticas aplicadas

- Arquitectura desacoplada con controladores, servicios y repositorios.
- Manejo de errores con `@ControllerAdvice`.
- Inyección de dependencias y separación de capas.
- Validaciones con `javax.validation` y `@Valid`.
- Tokens firmados y verificados con clave segura.

## 🛠️ Mantenimiento

El archivo `compose.yaml` se encarga de levantar y mantener la base de datos PostgreSQL para desarrollo local.

## 🧑‍💻 Autor

**Emilio Funes**  
[LinkedIn](https://www.linkedin.com/in/emilio-funes-8b140b21a) · [GitHub](https://github.com/EmiFunes91)

---

© 2025 - Proyecto personal con fines profesionales. Bajo licencia MIT.