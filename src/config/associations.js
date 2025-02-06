const Company = require('../orms/companies/models/companies.model');
const User = require('../orms/users/models/user.model');
const Insurance = require('../orms/insurances/models/insurances.model');
const Health = require('../orms/insurances/models/healthInsurances.model');
const Home = require('../orms/insurances/models/homeInsurances.model');
const Soat = require('../orms/insurances/models/soatInsurances.model');
const Vehicle = require('../orms/insurances/models/vehicleInsurances.model');
const Review = require('../orms/reviews/models/reviews.model');
const Document = require('../orms/documents/models/document.model');

const setupAssociations = () => {
  // Asociaciones para Company
  Company.hasMany(Insurance, { foreignKey: 'company_id' });
  Insurance.belongsTo(Company, { foreignKey: 'company_id' });

  // Asociaciones para User
  User.hasMany(Insurance, { foreignKey: 'user_id' });
  Insurance.belongsTo(User, { foreignKey: 'user_id' });

  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User, { foreignKey: 'user_id' });

  User.hasMany(Document, { foreignKey: 'user_id' });
  Document.belongsTo(User, { foreignKey: 'user_id' });

  // Asociaciones para Insurance
  Insurance.belongsTo(Health, { foreignKey: 'health_id' });
  Health.hasMany(Insurance, { foreignKey: 'health_id' });

  Insurance.belongsTo(Soat, { foreignKey: 'soat_id' });
  Soat.hasMany(Insurance, { foreignKey: 'soat_id' });

  Insurance.belongsTo(Home, { foreignKey: 'home_id' });
  Home.hasMany(Insurance, { foreignKey: 'home_id' });

  Insurance.belongsTo(Vehicle, { foreignKey: 'vehicle_id' });
  Vehicle.hasMany(Insurance, { foreignKey: 'vehicle_id' });

  Insurance.hasMany(Document, { foreignKey: 'insurance_id' });
  Document.belongsTo(Insurance, { foreignKey: 'insurance_id' });
};

module.exports = setupAssociations;
