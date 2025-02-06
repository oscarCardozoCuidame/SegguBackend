const VehicleRepository = require('../repositories/vehicleInsurances.repository');

class VehicleService {
  getAll() {
    return VehicleRepository.findAll();
  }

  getById(id) {
    return VehicleRepository.findById(id);
  }

  create(data) {
    return VehicleRepository.create(data);
  }

  update(id, data) {
    return VehicleRepository.update(id, data);
  }

  delete(id) {
    return VehicleRepository.delete(id);
  }
}

module.exports = new VehicleService();
