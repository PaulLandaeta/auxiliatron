## Paso 1: Crear Middlewares

1. Crea un archivo para tus middlewares, por ejemplo, `auth.js`, en una ubicación conveniente dentro de tu proyecto.

2. En `auth.js`, define tus middlewares. Puedes crear funciones que verifiquen propiedades específicas de `req`, como autenticación, autorización o validación de datos. Aquí hay un ejemplo básico:

```javascript
// middlewares.js
const checkAuth = (req, res, next) => {
  // Aquí puedes verificar la autenticación
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'No estás autenticado.' });
  }
  next();
};

const checkAdmin = (req, res, next) => {
  // Aquí puedes verificar si el usuario es administrador
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'No tienes permisos de administrador.' });
  }
  next();
};

module.exports = {
  checkAuth,
  checkAdmin,
};
```

## Paso 2: Uso de Middlewares en Rutas

1. En tus archivos de rutas, importa los middlewares definidos en `auth.js`.

2. Aplica los middlewares en las rutas que deseas verificar. Puedes pasarlos como argumentos antes de la función de manejo de la ruta. Aquí hay un ejemplo:

```javascript
// userRoutes.js
const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');
const { checkAuth, checkAdmin } = require('../middleware/auth');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener una lista de usuarios (requiere autenticación)
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
router.get('/users', checkAuth, getUserController);

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Obtener una lista de usuarios administradores (requiere autenticación y permisos de administrador)
 *     responses:
 *       200:
 *         description: Lista de usuarios administradores obtenida exitosamente
 */
router.get('/admin/users', checkAuth, checkAdmin, getAdminUserController);

module.exports = router;
```

En este ejemplo, el middleware `checkAuth` se aplica a ambas rutas `/users` y `/admin/users`, mientras que el middleware `checkAdmin` solo se aplica a la ruta `/admin/users`.
