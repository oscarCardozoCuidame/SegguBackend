const SoatService = require('../services/soatInsurances.service');

class SoatController {
  // Obtener todos los registros de Soat
  async getAll(req, res) {
    try {
      const soats = await SoatService.getAll();
      res.json(soats);
    } catch (error) {
      console.error('Error fetching SOATs:', error);
      res.status(500).json({ message: 'Error al obtener SOATs' });
    }
  }

  // Obtener un registro de Soat por su ID
  async getById(req, res) {
    try {
      const soat = await SoatService.getById(req.params.id);
      if (soat) {
        res.json(soat);
      } else {
        res.status(404).json({ message: 'SOAT no encontrado' });
      }
    } catch (error) {
      console.error('Error fetching SOAT:', error);
      res.status(500).json({ message: 'Error al obtener SOAT' });
    }
  }

  // Crear un nuevo registro de Soat
  async create(req, res) {
    try {
      const data = req.body;
      const soatId = await SoatService.create(data);
      res.status(201).json({ soat_id: soatId });
    } catch (error) {
      console.error('Error creating SOAT:', error);
      res.status(500).json({ message: 'Error al crear SOAT' });
    }
  }

  // Actualizar un registro de Soat por su ID
  async update(req, res) {
    try {
      const updated = await SoatService.update(req.params.id, req.body);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ message: 'SOAT no encontrado' });
      }
    } catch (error) {
      console.error('Error updating SOAT:', error);
      res.status(500).json({ message: 'Error al actualizar SOAT' });
    }
  }

  // Eliminar un registro de Soat por su ID
  async delete(req, res) {
    try {
      const deleted = await SoatService.delete(req.params.id);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ message: 'SOAT no encontrado' });
      }
    } catch (error) {
      console.error('Error deleting SOAT:', error);
      res.status(500).json({ message: 'Error al eliminar SOAT' });
    }
  }
}

module.exports = new SoatController();
