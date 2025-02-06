const Home = require('../models/homeInsurances.model');

class HomeRepository {
  // Obtener todos los registros de Home
  async findAll() {
    return await Home.findAll();
  }

  // Buscar un registro de Home por su ID
  async findById(id) {
    return await Home.findByPk(id);
  }

  // Crear un nuevo registro de Home
  async create(data) {
    const newhome = await Home.create(data);
    return newhome.home_id; // Devuelve el ID del nuevo registro creado
  }

  // Actualizar un registro de Home por su ID
  async update(id, data) {
    const home = await this.findById(id);
    if (home) {
      return await home.update(data);
    }
    return null;
  }

  // Eliminar un registro de Home por su ID
  async delete(id) {
    const home = await this.findById(id);
    if (home) {
      await Home.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new HomeRepository();
