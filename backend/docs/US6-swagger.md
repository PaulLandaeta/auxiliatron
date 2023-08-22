# Tutorial: Uso de Swagger para Documentar una API Node.js

En este tutorial, aprenderás cómo usar Swagger para documentar una API Node.js. Swagger es una herramienta poderosa que te permite describir, visualizar y probar tus API de manera efectiva. Aprenderás a integrar Swagger en tu proyecto Node.js y cómo generar documentación automáticamente.

## Paso 1: Instalación de Dependencias

1. Asegúrate de tener Node.js y npm instalados en tu sistema.

1. Instala las dependencias necesarias:

```bash
npm install swagger-jsdoc swagger-ui-express --save
```

## Paso 2: Configuración de Swagger

1. Crea un archivo de configuración para Swagger en la carpeta config, por ejemplo, `swagger.js`.

2. Agrega el siguiente contenido al archivo `swagger.js`:

```javascript
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for your API',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia la URL según tu entorno
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['path/to/your/routes/*.js'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
```

## Paso 3: Integración de Swagger en Express

1. En tu archivo principal (por ejemplo, `app.js`), agrega las siguientes líneas para habilitar Swagger UI:

```javascript
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./path/to/swagger.js');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

## Paso 4: Documentación de Rutas

En tus archivos de rutas, utiliza comentarios en estilo JSDoc para documentar tus rutas y parámetros. Aquí hay un ejemplo:

```javascript
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
app.get('/users', (req, res) => {
  // Tu lógica aquí
});
```

## Paso 5: Ejecución del Proyecto

1. Ejecuta tu proyecto Node.js:

```bash
node app.js
```

2. Abre un navegador y visita `http://localhost:3000/api-docs` para ver la documentación generada por Swagger.

## Conclusión

Has aprendido a configurar y utilizar Swagger para documentar tu API Node.js de manera efectiva. Ahora puedes mantener tu documentación actualizada automáticamente y brindar a los desarrolladores una forma sencilla de explorar y probar tu API. Recuerda que puedes personalizar aún más tu documentación agregando detalles como descripciones detalladas, ejemplos y esquemas de respuestas. ¡Felicitaciones!