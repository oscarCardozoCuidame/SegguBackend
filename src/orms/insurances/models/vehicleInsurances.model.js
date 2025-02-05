const { DataTypes } = require("sequelize");
const db = require("../../../config/conexion");

const vehicleInsurances = db.define(
  "vehicleInsurances",
  {
    vehicle_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    citizenship_card: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: false,
    },
    plate: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "vehicleInsurances",
    timestamps: false,
  }
);

module.exports = vehicleInsurances;
