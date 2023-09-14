const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');
const { checkAuth } = require('../middleware/auth');
// TODO: como crear un archivo index.js
const {
    getSubjectController,
    getSubjectByIdController,
    postSubjectController,
    putSubjectController,
    deleteSubjectController
} = require('../controllers/subjectController');
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
router.get('/user', checkAuth,  getUserController);


const SUBJECT_ROUTE = '/subjects';

// GET /subjects
router.get(SUBJECT_ROUTE,  getSubjectController);

// GET /subjects/{id}:
router.get(`${SUBJECT_ROUTE}/:id`,  getSubjectByIdController);

// POST /subjects 
router.post(SUBJECT_ROUTE,  postSubjectController);

// PUT /subjects/{id}:
router.put(`${SUBJECT_ROUTE}/:id`,  putSubjectController);

// DELETE /subjects/{id}:
router.delete(SUBJECT_ROUTE,  deleteSubjectController);

module.exports = router;