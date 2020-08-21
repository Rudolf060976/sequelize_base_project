'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {


      models.Department.hasMany(models.Product, {
        as: 'products',
        foreingKey: {
          type: DataTypes.INTEGER,
          name: idDepartment,
          allowNull: false
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      });

    }
  };
  Department.init({
    idDepartment: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    code: {
      type: DataTypes.STRING(4),
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100)
    }
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'departments'
  });
  return Department;
};