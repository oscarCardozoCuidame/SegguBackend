const Health = require('../models/healthInsurances.model');

class HealthRepository {
  async findAll() {
    return await Health.findAll();
  }

  async findById(id) {
    return await Health.findByPk(id);
  }

  async create(data) {
    const newHealth = await Health.create(data);
    return newHealth.health_id;
  }

  async update(id, data) {
    const health = await this.findById(id);
    if (health) {
      return await health.update(data);
    }
    return null;
  }

  async delete(id) {
    const health = await this.findById(id);
    if (health) {
      await health.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new HealthRepository();
