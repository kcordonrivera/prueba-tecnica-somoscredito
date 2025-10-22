const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Sucursal = sequelize.define('Sucursal', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombreSucursal: { type: DataTypes.STRING, allowNull: false },
  pais: { type: DataTypes.STRING, allowNull: false },
  departamento: { type: DataTypes.STRING, allowNull: false },
  direccionExacta: { type: DataTypes.STRING, allowNull: false },
  codigoPais: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING, allowNull: false },
  nombreEncargado: { type: DataTypes.STRING, allowNull: false },
  estado: { 
    type: DataTypes.ENUM('Alta', 'Baja'), 
    allowNull: false, 
    defaultValue: 'Alta' 
  },
  fechaCreacion: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: DataTypes.NOW 
  },
  fechaModificacion: { type: DataTypes.DATE }
}, {
  tableName: 'Sucursales',
  timestamps: false
});

module.exports = Sucursal;
