# Usar imagen base oficial de Node.js (versión Alpine para imagen ligera)
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de definición de dependencias
COPY package*.json ./

# Instalar las dependencias necesarias
RUN npm install

# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto que usa la aplicación
EXPOSE 8080

# Comando para arrancar la aplicación
CMD ["node", "app.js"]