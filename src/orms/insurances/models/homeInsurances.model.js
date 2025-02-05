const { DataTypes } = require("sequelize");
const db = require("../../../config/conexion");

const homeInsurances = db.define(
  "homeInsurances",
  {
    home_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    citizenship_card: {
        type: DataTypes.STRING(15),
        unique: true,
        allowNull: false,
    },
    property_value: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    property_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    stratum: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    furniture_value: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    electronics_value: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    computer_value: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    valuables_value: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    tableName: "homeInsurances",
    timestamps: false,
  }
);

module.exports = homeInsurances;
