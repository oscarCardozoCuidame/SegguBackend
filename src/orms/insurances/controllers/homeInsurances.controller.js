const HomeService = require('../services/homeInsurances.service');

class HomeController {
  // Obtener todos los registros de Home
  async getAll(req, res) {
    try {
      const homes = await HomeService.getAll();
      res.json(homes);
    } catch (error) {
      console.error('Error fetching home insurances:', error);
      res.status(500).json({ message: 'Error al obtener seguros de hogar' });
    }
  }

  // Obtener un registro de Home por su ID
  async getById(req, res) {
    try {
      const home = await HomeService.getById(req.params.id);
      if (home) {
        res.json(home);
      } else {
        res.status(404).json({ message: 'Seguro de hogar no encontrado' });
      }
    } catch (error) {
      console.error('Error fetching home insurance:', error);
      res.status(500).json({ message: 'Error al obtener seguro de hogar' });
    }
  }

  // Crear un nuevo registro de Home
  async create(req, res) {
    try {
      const data = req.body;
      const homeId = await HomeService.create(data);
      res.status(201).json({ home_id: homeId });
    } catch (error) {
      console.error('Error creating home insurance:', error);
      res.status(500).json({ message: 'Error al crear seguro de hogar' });
    }
  }

  // Actualizar un registro de Home por su ID
  async update(req, res) {
    try {
      const updated = await HomeService.update(req.params.id, req.body);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ message: 'Seguro de hogar no encontrado' });
      }
    } catch (error) {
      console.error('Error updating home insurance:', error);
      res.status(500).json({ message: 'Error al actualizar seguro de hogar' });
    }
  }

  // Eliminar un registro de Home por su ID
  async delete(req, res) {
    try {
      const deleted = await HomeService.delete(req.params.id);
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ message: 'Seguro de hogar no encontrado' });
      }
    } catch (error) {
      console.error('Error deleting home insurance:', error);
      res.status(500).json({ message: 'Error al eliminar seguro de hogar' });
    }
  }
}

module.exports = new HomeController();
