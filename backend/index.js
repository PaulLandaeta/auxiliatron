const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');

const routes = require("./src/routes/api");


// Creando el servidor
const app = express();

// Leer contenido json dentro del body
app.use(express.json());


//Creando la API
app.use("/api", routes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = 3000; // TODO: crear enviroments

app.listen(PORT, () => {
  console.log("El servidor se ha levantado correctamente en el puerto ", PORT);
});
