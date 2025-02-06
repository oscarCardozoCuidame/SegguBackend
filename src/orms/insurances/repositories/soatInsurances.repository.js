const Soat = require('../models/soatInsurances.model');

class SoatRepository {
  // Obtener todos los registros de Soat
  async findAll() {
    return await Soat.findAll();
  }

  // Buscar un registro de Soat por su ID
  async findById(id) {
    return await Soat.findByPk(id);
  }

  // Crear un nuevo registro de Soat
  async create(data) {
    const newsoat = await Soat.create(data);
    return newsoat.soat_id;
  }

  // Actualizar un registro de Soat por su ID
  async update(id, data) {
    const soat = await this.findById(id);
    if (soat) {
      return await soat.update(data);
    }
    return null;
  }

  // Eliminar un registro de Soat por su ID
  async delete(id) {
    const soat = await this.findById(id);
    if (soat) {
      await soat.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new SoatRepository();
