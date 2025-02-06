const HomeRepository = require('../repositories/homeInsurances.repository');

class HomeService {
  // Obtener todos los registros de Home
  getAll() {
    return HomeRepository.findAll();
  }

  // Obtener un registro de Home por su ID
  getById(id) {
    return HomeRepository.findById(id);
  }

  // Crear un nuevo registro de Home
  create(data) {
    return HomeRepository.create(data);
  }

  // Actualizar un registro de Home por su ID
  update(id, data) {
    return HomeRepository.update(id, data);
  }

  // Eliminar un registro de Home por su ID
  delete(id) {
    return HomeRepository.delete(id);
  }
}

module.exports = new HomeService();