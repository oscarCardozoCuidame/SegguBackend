const { Router } = require('express');
const HomeController = require('../controllers/homeInsurances.controller');

const router = Router();

// Obtener todos los registros de Home
router.get('/', HomeController.getAll);

// Obtener un registro de Home por su ID
router.get('/:id', HomeController.getById);

// Crear un nuevo registro de Home
router.post('/', HomeController.create);

// Actualizar un registro de Home por su ID
router.put('/:id', HomeController.update);

// Eliminar un registro de Home por su ID
router.delete('/:id', HomeController.delete);

module.exports = router;
