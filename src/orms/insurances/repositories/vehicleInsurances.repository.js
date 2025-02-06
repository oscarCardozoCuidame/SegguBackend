const Vehicle = require('../models/vehicleInsurances.model');

class VehicleRepository {
  async findAll() {
    return await Vehicle.findAll();
  }

  async findById(id) {
    return await Vehicle.findByPk(id);
  }

  async create(data) {
    const newVehicle = await Vehicle.create(data); 
    return newVehicle.vehicle_id;
  }

  async update(id, data) {
    const vehicle = await this.findById(id);
    if (vehicle) {
      return await vehicle.update(data);
    }
    return null;
  }

  async delete(id) {
    const vehicle = await this.findById(id);
    if (vehicle) {
      await vehicle.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new VehicleRepository();
