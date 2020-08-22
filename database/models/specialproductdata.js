'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecialProductData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      models.SpecialProductData.belongsTo(models.Product, {
        as: 'product',
        foreignKey: {
          name: 'idProduct',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });


    }
  };
  SpecialProductData.init({
    idProduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    actualCost: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0,
      validate: {        
        isNumeric: true
      }
    },
    nameInCharge: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lastBuy: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    }

  }, {
    sequelize,
    modelName: 'SpecialProductData',
    tableName: 'special_product_data'
  });
  return SpecialProductData;
};