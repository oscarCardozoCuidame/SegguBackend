const { Router } = require('express');
const HealthController = require('../controllers/healthInsurances.controller');
const router = Router();

// Obtener todos los registros de Health
router.get('/', HealthController.getAll);

// Obtener un registro de Health por su ID
router.get('/:id', HealthController.getById);

// Crear un nuevo registro de Health
router.post('/', HealthController.create);

// Actualizar un registro de Health por su ID
router.put('/:id', HealthController.update);

// Eliminar un registro de Health por su ID
router.delete('/:id', HealthController.delete);

module.exports = router;
