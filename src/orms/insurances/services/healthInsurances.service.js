const HealthRepository = require('../repositories/healthInsurances.repository');

class HealthService {
  getAll() {
    return HealthRepository.findAll();
  }

  getById(id) {
    return HealthRepository.findById(id);
  }

  create(data) {
    return HealthRepository.create(data);
  }

  update(id, data) {
    return HealthRepository.update(id, data);
  }

  delete(id) {
    return HealthRepository.delete(id);
  }
}

module.exports = new HealthService();
