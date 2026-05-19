## SISTEMA DE TURNOS MÉDICOS
Es una aplicación web desarrolada como parte del proyecto final de la asignatura ESTRUCTURAS DE DATOS. 

En este sistema nos permite registrar, consultar, editar y eliminar personas que solicitan turnos médicos. La app esta construida con Spring Boot, MySQL, HTML, CSS, JavaScript y Axios. 

## Objetivo del Proyecto 

Nuestro obetivo del proyecto es desarrollar una web funcional que implemente las operaciones CRUD (Crear, leer, Actualizar y Eliminar) sobre la entidad Persona, aplicando los conceptos vistos en clase sobre estructuras de datos, persistencia y desarrollo web. 

## Tecnologias Utilizadas 

### Backend
-java
-Spring Boot
-Spring Data JPA
-Maven

### Base de Datos 
- MySQL

### Frontend
-HTML5
-CSS#
-JavaScript
-Axios

### Herramientas

-Visual Studio Code
-MySQL Workbench
-GIT y GITHUB

## Funcionalidades Implementadas
```plaintext
- Registrar Personas.
- Consultar todas las personas registrada.
- Editar información de una persona.
- Eliminar Personas.
- Validar campos del formulario.
- Mostrar mensaje de éxito y error.
- Conectar el frontend con el backend mediante Axios.
- Persistir la información en MySQL.
```
## Estructura del Proyecto 

```plaintext
├── backend-springboot/
│   ├── src/
│   ├── pom.xml
│   └── src/main/resources/application.properties
│
├── frontend-html-axios/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── db-mysql/
│   └── database.sql
│
└── README.md

```
## Entidad Principal

### Persona

| Atributo | Tipo |
|---------|------|
| id | Long |
| nombre | String |
| correo | String |
| numeroDocumento | String |

---

## API REST

### Base URL

`http://localhost:8080/api/personas`

### Endpoints Disponibles

| Método HTTP | Endpoint | Descripción |
|-----------|-----------|-------------|
| GET | `/api/personas` | Obtener todas las personas |
| GET | `/api/personas/{id}` | Obtener una persona por ID |
| POST | `/api/personas` | Crear una nueva persona |
| PUT | `/api/personas/{id}` | Actualizar una persona |
| DELETE | `/api/personas/{id}` | Eliminar una persona |

---

## Requisitos Previos

Antes de ejecutar el proyecto debes tener instalado:

- Java JDK 17 o superior.
- Maven.
- MySQL Server.
- MySQL Workbench.
- Visual Studio Code.
- Git.

---

## Configuración de la Base de Datos

1. Abrir MySQL Workbench.
2. Ejecutar el archivo `db-mysql/database.sql`.
3. Se creará la base de datos `turnos_medicos`.

---

## Ejecutar el Backend

Abrir una terminal en la carpeta `backend-springboot` y ejecutar:

```
mvn spring-boot:run

Si todo funciona correctamente, el servidor quedará disponible en:

`http://localhost:8080`

---

## Ejecutar el Frontend

Abrir el archivo:

`frontend-html-axios/index.html`

en cualquier navegador web.

---

## Flujo de Funcionamiento

1. El usuario completa el formulario en la página web.
2. JavaScript captura los datos.
3. Axios envía una petición HTTP al backend.
4. Spring Boot procesa la solicitud.
5. Spring Data JPA guarda la información en MySQL.
6. El frontend actualiza la tabla con los datos almacenados.

---

## Validaciones Implementadas

- Todos los campos son obligatorios.
- El documento debe contener entre 6 y 12 dígitos numéricos.
- El correo electrónico no puede repetirse.

---

## Autor

Juan Esteban Muñoz Vargas
Andres Julian Serna Rueda
---

## Asignatura

Estructura de Datos

---

## Proyecto Académico

Parte 1 – Mi Primera Web