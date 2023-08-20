# Cómo Agregar Variables de Entorno en Node.js

Las variables de entorno son útiles para configurar y controlar diferentes aspectos de tu aplicación Node.js, como configuraciones específicas, claves API y tokens de acceso. Aquí te mostramos cómo agregar y utilizar variables de entorno en tu proyecto Node.js.

## Paso 1: Crear un Archivo .env

1. En la raíz de tu proyecto, crea un archivo llamado `.env`.
2. En este archivo, define tus variables de entorno y sus valores usando el formato `NOMBRE_VARIABLE=valor`.
3. Ejemplo:

```
DB_HOST=localhost
DB_USER=usuario_db
DB_PASSWORD=contraseña_db
API_KEY=mi_clave_secreta
```


## Paso 2: Usar Variables de Entorno en tu Código

1. En tu código, accede a las variables de entorno utilizando `process.env.NOMBRE_VARIABLE`.
2. Ejemplo:

```javascript
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const apiKey = process.env.API_KEY;

console.log(`Conectándose a la base de datos en ${dbHost} como ${dbUser}`);
console.log(`Usando la clave API: ${apiKey}`);
``` 

## Paso 3: Cargar las Variables de Entorno

1. Instala el paquete dotenv en tu proyecto:

```
npm install dotenv
```

2. En el punto de entrada de tu aplicación (por ejemplo, en el archivo index.js), agrega el siguiente código para cargar las variables de entorno desde el archivo .env:

```
require('dotenv').config();
```

Esto hará que las variables de entorno definidas en el archivo .env estén disponibles en process.env en toda tu aplicación.