'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Code.init({
    idCode: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    tableName: {
      type: DataTypes.STRING(45),
      unique: true,
      allowNull: false
    },
    lastCode: {
      type: DataTypes.INTEGER,      
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Code',
    tableName: 'codes'
  });
  return Code;
};