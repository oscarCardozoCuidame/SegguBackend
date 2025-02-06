const SoatRepository = require('../repositories/soatInsurances.repository'); // Ajusta la ruta según la estructura de tu proyecto

class SoatService {
  // Obtener todos los registros de Soat
  getAll() {
    return SoatRepository.findAll();
  }

  // Obtener un registro de Soat por su ID
  getById(id) {
    return SoatRepository.findById(id);
  }

  // Crear un nuevo registro de Soat
  create(data) {
    return SoatRepository.create(data);
  }

  // Actualizar un registro de Soat por su ID
  update(id, data) {
    return SoatRepository.update(id, data);
  }

  // Eliminar un registro de Soat por su ID
  delete(id) {
    return SoatRepository.delete(id);
  }
}

module.exports = new SoatService();
