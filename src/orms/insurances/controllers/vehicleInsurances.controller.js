const VehicleService = require('../services/vehicleInsurances.service');

class VehicleController {
  // Obtener todos los registros de Vehicle
  async getAll(req, res) {
    try {
      const vehicles = await VehicleService.getAll();
      res.json(vehicles);
    } catch (error) {
      console.error('Error fetching vehicle insurances:', error);
      res.status(500).json({ message: 'Error al obtener seguros de vehículos' });
    }
  }

  // Obtener un registro de Vehicle por su ID
  async getById(req, res) {
    try {
      const vehicle = await VehicleService.getById(req.params.id);
      if (vehicle) {
        res.json(vehicle);
      } else {
        res.status(404).json({ message: 'Seguro de vehículo no encontrado' });
      }
    } catch (error) {
      console.error('Error fetching vehicle insurance:', error);
      res.status(500).json({ message: 'Error al obtener seguro de vehículo' });
    }
  }

  // Crear un nuevo registro de Vehicle
  async create(req, res) {
    try {
      const data = req.body;
      const vehicleId = await VehicleService.create(data);
      res.status(201).json({ vehicle_id: vehicleId });
    } catch (error) {
      console.error('Error creating vehicle insurance:', error);
      res.status(500).json({ message: 'Error al crear seguro de vehículo' });
    }
  }

  // Actualizar un registro de Vehicle por su ID
  async update(req, res) {
    try {
      const updated = await VehicleService.update(req.params.id, req.body);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ message: 'Seguro de vehículo no encontrado' });
      }
    } catch (error) {
      console.error('Error updating vehicle insurance:', error);
      res.status(500).json({ message: 'Error al actualizar seguro de vehículo' });
    }
  }

  // Eliminar un registro de Vehicle por su ID
  async delete(req, res) {
    try {
      const deleted = await VehicleService.delete(req.params.id);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ message: 'Seguro de vehículo no encontrado' });
      }
    } catch (error) {
      console.error('Error deleting vehicle insurance:', error);
      res.status(500).json({ message: 'Error al eliminar seguro de vehículo' });
    }
  }
}

module.exports = new VehicleController();
