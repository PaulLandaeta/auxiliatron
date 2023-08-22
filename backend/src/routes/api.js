const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
router.get('/user', getUserController);

module.exports = router;