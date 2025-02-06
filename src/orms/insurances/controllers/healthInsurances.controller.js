const HealthService = require('../services/healthInsurances.service');

class HealthController {
  // Obtener todos los registros de Health
  async getAll(req, res) {
    try {
      const healths = await HealthService.getAll();
      res.json(healths);
    } catch (error) {
      console.error('Error fetching health insurances:', error);
      res.status(500).json({ message: 'Error al obtener seguros de salud' });
    }
  }

  // Obtener un registro de Health por su ID
  async getById(req, res) {
    try {
      const health = await HealthService.getById(req.params.id);
      if (health) {
        res.json(health);
      } else {
        res.status(404).json({ message: 'Seguro de salud no encontrado' });
      }
    } catch (error) {
      console.error('Error fetching health insurance:', error);
      res.status(500).json({ message: 'Error al obtener seguro de salud' });
    }
  }

  // Crear un nuevo registro de Health
  async create(req, res) {
    try {
      const data = req.body;
      const healthId = await HealthService.create(data);
      res.status(201).json({ health_id: healthId });
    } catch (error) {
      console.error('Error creating health insurance:', error);
      res.status(500).json({ message: 'Error al crear seguro de salud' });
    }
  }

  // Actualizar un registro de Health por su ID
  async update(req, res) {
    try {
      const updated = await HealthService.update(req.params.id, req.body);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ message: 'Seguro de salud no encontrado' });
      }
    } catch (error) {
      console.error('Error updating health insurance:', error);
      res.status(500).json({ message: 'Error al actualizar seguro de salud' });
    }
  }

  // Eliminar un registro de Health por su ID
  async delete(req, res) {
    try {
      const deleted = await HealthService.delete(req.params.id);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ message: 'Seguro de salud no encontrado' });
      }
    } catch (error) {
      console.error('Error deleting health insurance:', error);
      res.status(500).json({ message: 'Error al eliminar seguro de salud' });
    }
  }
}

module.exports = new HealthController();
