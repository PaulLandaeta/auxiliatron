const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentancion del API para AUXILIATRON',
      version: '1.0.0',
      description: 'Documentation for your API',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Cambia la URL según tu entorno
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['./src/routes/api.js'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;