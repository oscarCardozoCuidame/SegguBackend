const { DataTypes } = require("sequelize");
const db = require("../../../config/conexion");

const Soat = db.define(
    "Soat",
    {
        soat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        plate: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        citizenship_card: {
            type: DataTypes.STRING(15),
            unique: true,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
    },
    {
        tableName: "soatInsurances",
        timestamps: false,
    }
);

module.exports = Soat;
