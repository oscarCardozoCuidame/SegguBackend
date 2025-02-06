const { DataTypes } = require('sequelize');
const db = require('../../../config/conexion');
const User = require('../../users/models/user.model');
const Company = require('../../companies/models/companies.model');
const Health = require('../models/healthInsurances.model'); // Asegúrate de importar correctamente
const Soat = require('../models/soatInsurances.model'); // Asegúrate de importar correctamente
const Home = require('../models/homeInsurances.model'); // Asegúrate de importar correctamente
const Vehicle = require('../models/vehicleInsurances.model'); // Asegúrate de importar correctamente

const Insurance = db.define('Insurance', {
  insurance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  health_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Health,
      key: 'health_id',
    },
  },
  soat_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Soat,
      key: 'soat_id',
    },
  },
  home_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Home,
      key: 'home_id',
    },
  },
  vehicle_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Vehicle,
      key: 'vehicle_id',
    },
  },
  product: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  renewal_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  coverage: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  asist: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  policy_number: { 
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Company,
      key: 'company_id',
    },
  },
}, {
  tableName: 'insurances',
  timestamps: false,
});

module.exports = Insurance;
