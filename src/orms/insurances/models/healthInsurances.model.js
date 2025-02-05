const { DataTypes } = require("sequelize");
const db = require("../../../config/conexion");

const healthInsurances = db.define(
  "healthInsurances",
  {
    health_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    citizenship_card: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    procedures: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    responsibility_value: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    work_city: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: "healthInsurances",
    timestamps: false,
  }
);

module.exports = healthInsurances;
