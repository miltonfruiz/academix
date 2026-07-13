# Sistema de gestión de cursos academicos
## Descripción
Sistema de gestión de cursos academicos es una aplicación que permite gestionar cursos, estudiantes, matrículas y perfiles de usuario.

## Stack
* Node.js
* Express.js
* MongoDB
* Mongoose

## Instalación
1. Clonar el repositorio: `git clone https://github.com/usuario/repo.git`
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno: `MONGO_URI`, `PORT`
4. Iniciar la aplicación: `npm start`

## Docker
1. Construir la imagen: `docker build -t sistema-de-gestion-de-cursos-academicos .`
2. Iniciar el contenedor: `docker run -p 5000:5000 sistema-de-gestion-de-cursos-academicos`

## Endpoints
### Autenticación
* **POST /api/auth/register**: registrar un nuevo usuario
* **POST /api/auth/login**: iniciar sesión
* **GET /api/auth/profile**: obtener perfil de usuario (requiere autenticación)
* **PUT /api/auth/profile**: actualizar perfil de usuario (requiere autenticación)

### Cursos
* **GET /api/courses**: listar cursos (requiere autenticación)
* **POST /api/courses**: crear curso (requiere autenticación)
* **GET /api/courses/:id**: obtener curso por id (requiere autenticación)
* **PUT /api/courses/:id**: actualizar curso (requiere autenticación)
* **DELETE /api/courses/:id**: eliminar curso (requiere autenticación)

### Estudiantes
* **GET /api/students**: listar estudiantes (requiere autenticación)
* **POST /api/students**: crear estudiante (requiere autenticación)
* **GET /api/students/:id**: obtener estudiante por id (requiere autenticación)
* **PUT /api/students/:id**: actualizar estudiante (requiere autenticación)
* **DELETE /api/students/:id**: eliminar estudiante (requiere autenticación)

### Matrículas
* **GET /api/enrollments**: listar matrículas (requiere autenticación)
* **POST /api/enrollments**: crear matrícula (requiere autenticación)
* **GET /api/enrollments/:id**: obtener matrícula por id (requiere autenticación)
* **PUT /api/enrollments/:id**: actualizar matrícula (requiere autenticación)
* **DELETE /api/enrollments/:id**: eliminar matrícula (requiere autenticación)

## Modelo principal
* **Course**: curso
 + **name**: nombre del curso (String)
 + **description**: descripción del curso (String)
 + **startDate**: fecha de inicio del curso (Date)
 + **endDate**: fecha de fin del curso (Date)

## Seguridad
* La aplicación utiliza autenticación y autorización para proteger los endpoints.
* Los usuarios deben registrarse y iniciar sesión para acceder a los endpoints protegidos.
* La aplicación utiliza tokens de acceso para verificar la identidad del usuario.
* La aplicación utiliza HTTPS para cifrar la comunicación entre el cliente y el servidor.
* La aplicación utiliza una política de seguridad para proteger contra ataques de inyección de código y cross-site scripting (XSS).
* La aplicación utiliza un sistema de logs para registrar y monitorear las actividades del sistema.