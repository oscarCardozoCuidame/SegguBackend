const { Router } = require('express');
const SoatController = require('../controllers/soatInsurances.controller');

const router = Router();

// Obtener todos los registros de Soat
router.get('/', SoatController.getAll);

// Obtener un registro de Soat por su ID
router.get('/:id', SoatController.getById);

// Crear un nuevo registro de Soat
router.post('/', SoatController.create);

// Actualizar un registro de Soat por su ID
router.put('/:id', SoatController.update);

// Eliminar un registro de Soat por su ID
router.delete('/:id', SoatController.delete);

module.exports = router;
