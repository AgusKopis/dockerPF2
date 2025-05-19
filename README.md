# dockerPF2
Practica Formativa Docker

Este repositorio contiene el proyecto desarrollado durante la materia Seminario Devops, incluyendo la aplicación Node.js que conecta con MySQL y muestra registros en una página web.

---

## Configuración del proyecto con Docker

Se ha dockerizado la aplicación para que corra fácilmente con los servicios necesarios:  
- MySQL  
- Aplicación Node.js (servidor web + API)  

## Archivos importantes

- `Dockerfile`: Contiene las instrucciones para construir la imagen de la aplicación Node.js.
- `docker-compose.yml`: Configura y levanta los contenedores necesarios para la aplicación y la base de datos MySQL.
- `app.js`: Código del servidor Node.js.
- `public/index.html`: Página web que muestra los datos de la base MySQL.

## Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/aguskopis/dockerPF2.git
cd dockerPF2
