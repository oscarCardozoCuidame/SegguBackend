const { Router } = require('express');
const VehicleController = require('../controllers/vehicleInsurances.controller');

const router = Router();

// Obtener todos los registros de Vehicle
router.get('/', VehicleController.getAll);

// Obtener un registro de Vehicle por su ID
router.get('/:id', VehicleController.getById);

// Crear un nuevo registro de Vehicle
router.post('/', VehicleController.create);

// Actualizar un registro de Vehicle por su ID
router.put('/:id', VehicleController.update);

// Eliminar un registro de Vehicle por su ID
router.delete('/:id', VehicleController.delete);

module.exports = router;
