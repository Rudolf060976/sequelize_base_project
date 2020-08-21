'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsProviders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductsProviders.init({
    idProductsProvider: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    idProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'idProduct'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    },
    idProvider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Providers',
        key: 'idProvider'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    }
  }, {
    sequelize,
    modelName: 'ProductsProviders',
    tableName: 'products_providers'
  });
  return ProductsProviders;
};